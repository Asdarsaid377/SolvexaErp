"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
	const dotRef = useRef<HTMLDivElement>(null);
	const ringRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// Skip on touch devices
		if (window.matchMedia("(pointer: coarse)").matches) return;

		let mx = 0,
			my = 0,
			rx = 0,
			ry = 0;
		let animId: number;

		const onMove = (e: MouseEvent) => {
			mx = e.clientX;
			my = e.clientY;
			if (dotRef.current) {
				dotRef.current.style.left = mx - 5 + "px";
				dotRef.current.style.top = my - 5 + "px";
			}
		};

		const animate = () => {
			rx += (mx - rx) * 0.13;
			ry += (my - ry) * 0.13;
			if (ringRef.current) {
				ringRef.current.style.left = rx - 19 + "px";
				ringRef.current.style.top = ry - 19 + "px";
			}
			animId = requestAnimationFrame(animate);
		};

		const onEnter = () => {
			if (dotRef.current) dotRef.current.style.transform = "scale(2.5)";
			if (ringRef.current) {
				ringRef.current.style.transform = "scale(1.4)";
				ringRef.current.style.opacity = "0.8";
			}
		};
		const onLeave = () => {
			if (dotRef.current) dotRef.current.style.transform = "";
			if (ringRef.current) {
				ringRef.current.style.transform = "";
				ringRef.current.style.opacity = "0.5";
			}
		};

		const targets = document.querySelectorAll("a, button, [data-cursor-hover]");
		targets.forEach((el) => {
			el.addEventListener("mouseenter", onEnter);
			el.addEventListener("mouseleave", onLeave);
		});

		document.addEventListener("mousemove", onMove);
		animId = requestAnimationFrame(animate);

		return () => {
			document.removeEventListener("mousemove", onMove);
			cancelAnimationFrame(animId);
			targets.forEach((el) => {
				el.removeEventListener("mouseenter", onEnter);
				el.removeEventListener("mouseleave", onLeave);
			});
		};
	}, []);

	return (
		<>
			<div ref={dotRef} className="cursor-dot" aria-hidden="true" />
			<div ref={ringRef} className="cursor-ring" aria-hidden="true" />
		</>
	);
}
