"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
	children: ReactNode;
	delay?: 0 | 1 | 2 | 3 | 4;
	className?: string;
}

const delayMap = {
	0: "",
	1: "sr-d1",
	2: "sr-d2",
	3: "sr-d3",
	4: "sr-d4",
};

export default function ScrollReveal({
	children,
	delay = 0,
	className = "",
}: ScrollRevealProps) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => {
					if (e.isIntersecting) e.target.classList.add("in");
				});
			},
			{ threshold: 0.1 },
		);
		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<div ref={ref} className={`sr ${delayMap[delay]} ${className}`}>
			{children}
		</div>
	);
}
