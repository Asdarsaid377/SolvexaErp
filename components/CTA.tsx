import Link from "next/link";

const contacts = [
	{ icon: "📧", title: "Email", value: "info@asdarsaid.dev" },
	{ icon: "💬", title: "WhatsApp", value: "+6289630085814" },
	{ icon: "📍", title: "Lokasi", value: "Makassar, Sulawesi Selatan" },
];

export function CTASection() {
	return (
		<section
			id="kontak"
			className="relative overflow-hidden px-6 md:px-16 py-[30px] md:py-[110px] text-center"
			style={{ background: "var(--bg-section)" }}>
			{/* Dot grid */}
			<div
				className="absolute inset-0 pointer-events-none"
				style={{
					backgroundImage:
						"radial-gradient(circle, rgba(224,107,16,.10) 1.5px, transparent 1.5px)",
					backgroundSize: "40px 40px",
					maskImage:
						"radial-gradient(ellipse 60% 60% at 50% 50%, black 20%, transparent 80%)",
				}}
			/>

			<div className="relative z-10">
				<div>
					<div
						className="inline-flex items-center justify-center gap-[10px] text-[.72rem] font-semibold tracking-[2px] uppercase mb-3"
						style={{ color: "var(--orange-600)" }}>
						<span
							className="w-5 h-[2px]"
							style={{ background: "var(--orange-400)" }}
						/>
						Mulai Bersama Kami
					</div>
					<h2
						className="mx-auto mb-[18px] max-w-[640px] leading-[1.1] tracking-[-0.5px]"
						style={{
							fontFamily: "var(--font-playfair)",
							fontSize: "clamp(2rem,4.5vw,3.4rem)",
							fontWeight: 900,
							color: "var(--text-primary)",
						}}>
						Siap Membangun Sistem
						<br />
						Digital Bisnis Anda?
					</h2>
					<p
						className="mx-auto mb-[52px] max-w-[480px] text-[.95rem] leading-[1.75] font-light"
						style={{ color: "var(--text-secondary)" }}>
						Ceritakan kebutuhan Anda. Konsultasi gratis, tanpa komitmen apapun.
					</p>
				</div>

				{/* Contact cards */}
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-[840px] mx-auto mb-16">
					{contacts.map(({ icon, title, value }) => (
						<div
							key={title}
							className="cta-info-card text-left p-6 rounded-[var(--radius)] border transition-all duration-300"
							style={{
								background: "var(--bg-card)",
								borderColor: "var(--border-soft)",
							}}
							data-cursor-hover>
							<span className="text-2xl mb-3 block">{icon}</span>
							<div
								className="text-[.9rem] font-bold mb-[6px]"
								style={{
									fontFamily: "var(--font-playfair)",
									color: "var(--text-primary)",
								}}>
								{title}
							</div>
							<div
								className="text-[.82rem] font-medium break-all"
								style={{ color: "var(--orange-600)" }}>
								{value}
							</div>
						</div>
					))}
				</div>

				<div className="flex gap-4 justify-center flex-wrap">
					<Link
						href="mailto:info@asdarsaid.dev"
						className="inline-block px-8 py-[14px] rounded-full text-[.92rem] font-semibold no-underline transition-all duration-300"
						style={{
							background: "var(--orange-400)",
							color: "var(--text-on-orange)",
							boxShadow: "0 6px 20px rgba(244,131,42,.35)",
							border: "2px solid var(--orange-400)",
						}}>
						📧 Kirim Email
					</Link>
					<Link
						href="https://wa.me/+6289630085814"
						className="inline-block px-8 py-[14px] rounded-full text-[.92rem] font-semibold no-underline transition-all duration-300"
						style={{
							background: "transparent",
							color: "var(--orange-600)",
							border: "2px solid var(--border-medium)",
						}}>
						💬 Chat WhatsApp
					</Link>
				</div>
			</div>
		</section>
	);
}

export function Footer() {
	return (
		<footer
			className="flex items-center justify-between flex-wrap gap-5 px-16 py-10 border-t"
			style={{
				background: "var(--bg-dark)",
				borderColor: "rgba(244,131,42,.1)",
			}}>
			<div
				className="font-black text-[1.3rem]"
				style={{
					fontFamily: "var(--font-playfair)",
					color: "var(--orange-200)",
				}}>
				Solvexa
				<em style={{ fontStyle: "italic", color: "var(--orange-400)" }}>ERP</em>
			</div>
			<p className="text-[.78rem]" style={{ color: "rgba(255,248,241,.35)" }}>
				© 2025 Solvexa. Enterprise Digital Solutions Indonesia.
			</p>
			<div className="flex gap-6">
				{[
					{ href: "#layanan", label: "Layanan" },
					{ href: "#portfolio", label: "Portfolio" },
					{ href: "#kontak", label: "Kontak" },
				].map(({ href, label }) => (
					<Link
						key={href}
						href={href}
						className="text-[.78rem] no-underline transition-colors duration-200 hover:text-[var(--orange-200)]"
						style={{ color: "rgba(255,248,241,.4)" }}>
						{label}
					</Link>
				))}
			</div>
		</footer>
	);
}
