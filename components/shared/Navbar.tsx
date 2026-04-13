"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 60);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const menu = [
		{ href: "#layanan", label: "Layanan" },
		{ href: "#portfolio", label: "Portfolio" },
		{ href: "#tentang", label: "Tentang" },
	];

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-[999] flex items-center justify-between px-5 md:px-16 py-[18px] backdrop-blur-xl border-b transition-all duration-500 ${
				scrolled ? "shadow-md bg-white/90" : "bg-transparent"
			}`}
			style={{
				background: scrolled
					? "rgba(253,250,246,0.95)"
					: "rgba(253,250,246,0.88)",
				borderColor: "var(--border-soft)",
			}}>
			{/* Logo */}
			<Link
				href="/"
				className="relative z-[1001] font-black text-xl md:text-2xl no-underline">
				<span
					style={{
						color: "var(--text-primary)",
						fontFamily: "var(--font-playfair)",
					}}>
					Solvexa
				</span>
				<em style={{ color: "var(--orange-400)", fontStyle: "italic" }}>ERP</em>
			</Link>

			{/* Desktop Menu */}
			<ul className="hidden md:flex items-center gap-9 list-none p-0 m-0">
				{menu.map(({ href, label }) => (
					<li key={href}>
						<Link
							href={href}
							className="text-sm font-medium no-underline hover:text-[var(--orange-600)] transition-colors">
							{label}
						</Link>
					</li>
				))}
				<li>
					<Link
						href="#kontak"
						className="text-sm font-semibold no-underline px-6 py-[10px] rounded-full bg-[var(--orange-400)] text-white hover:scale-105 active:scale-95 transition-transform">
						Konsultasi Gratis
					</Link>
				</li>
			</ul>

			{/* Hamburger Button with Better Morphing */}
			<button
				className="md:hidden relative z-[1001] w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
				onClick={() => setOpen(!open)}>
				<motion.span
					animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
					className="w-6 h-[2px] bg-[var(--text-primary)] rounded-full"
				/>
				<motion.span
					animate={open ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
					className="w-6 h-[2px] bg-[var(--text-primary)] rounded-full"
				/>
				<motion.span
					animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
					className="w-6 h-[2px] bg-[var(--text-primary)] rounded-full"
				/>
			</button>

			{/* Mobile Menu Dropdown with Framer Motion */}
			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
						className="absolute top-full left-0 w-full overflow-hidden border-b bg-[rgba(253,250,246,0.98)] shadow-2xl md:hidden z-[998]"
						style={{ borderColor: "var(--border-soft)" }}>
						<motion.ul
							initial={{ y: -20 }}
							animate={{ y: 0 }}
							className="flex flex-col px-8 py-10 gap-6 list-none">
							{menu.map(({ href, label }, i) => (
								<motion.li
									key={href}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: i * 0.1 }}>
									<Link
										href={href}
										onClick={() => setOpen(false)}
										className="text-lg font-semibold no-underline text-[var(--text-secondary)] hover:text-[var(--orange-400)] transition-colors">
										{label}
									</Link>
								</motion.li>
							))}
							<motion.li
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.3 }}
								className="pt-4">
								<Link
									href="#kontak"
									onClick={() => setOpen(false)}
									className="block text-center text-md font-bold px-4 py-4 rounded-full bg-[var(--orange-400)] text-white shadow-lg shadow-orange-200">
									Konsultasi Gratis
								</Link>
							</motion.li>
						</motion.ul>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}
