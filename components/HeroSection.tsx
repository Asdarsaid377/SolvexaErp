"use client";
import Link from "next/link";

export default function HeroSection() {
	return (
		<>
			<section
				className="relative min-h-screen flex items-center px-6 md:px-16 pt-[70px] md:pt-[120px] pb-16 md:pb-20 overflow-hidden"
				style={{ background: "var(--bg-base)" }}>
				{/* Dot grid */}
				<div
					className="absolute inset-0 pointer-events-none"
					style={{
						backgroundImage:
							"radial-gradient(circle, rgba(224,107,16,.12) 1.2px, transparent 1.2px)",
						backgroundSize: "32px 32px",
						maskImage:
							"radial-gradient(ellipse 70% 70% at 60% 40%, black 20%, transparent 80%)",
					}}
				/>

				{/* Floating orbs */}
				<div
					className="hero-shape hs1 absolute rounded-full pointer-events-none"
					style={{
						width: 700,
						height: 700,
						right: -200,
						top: -180,
						background:
							"radial-gradient(circle,rgba(244,131,42,.10) 0%,transparent 65%)",
						filter: "blur(60px)",
					}}
				/>
				<div
					className="hero-shape hs2 absolute rounded-full pointer-events-none"
					style={{
						width: 450,
						height: 450,
						left: -100,
						bottom: -80,
						background:
							"radial-gradient(circle,rgba(255,202,138,.18) 0%,transparent 65%)",
						filter: "blur(60px)",
					}}
				/>
				<div
					className="hero-shape hs3 absolute rounded-full pointer-events-none"
					style={{
						width: 200,
						height: 200,
						left: "42%",
						top: "20%",
						background:
							"radial-gradient(circle,rgba(244,131,42,.07) 0%,transparent 70%)",
						filter: "blur(40px)",
					}}
				/>

				<div className="relative z-10 max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
					{/* Left */}
					<div>
						{/* Badge */}
						<div
							className="hero-tag inline-flex items-center gap-[10px] mb-7 px-[18px] py-[6px] rounded-full text-xs font-semibold tracking-[1.5px] uppercase border"
							style={{
								background: "var(--orange-50)",
								borderColor: "var(--border-medium)",
								color: "var(--orange-600)",
							}}>
							<span
								className="pulse-dot w-[7px] h-[7px] rounded-full"
								style={{ background: "var(--orange-400)" }}
							/>
							Enterprise Digital Solutions
						</div>

						{/* H1 */}
						<h1
							className="hero-h1 mb-6 leading-[1.05] tracking-[-0.5px]"
							style={{
								fontFamily: "var(--font-playfair)",
								fontSize: "clamp(2.2rem,6vw,5rem)",
								fontWeight: 900,
								color: "var(--text-primary)",
							}}>
							Sistem Digital
							<br />
							yang{" "}
							<span
								className="relative inline-block italic"
								style={{ color: "var(--orange-600)" }}>
								Menggerakkan
								<span
									className="accent-line absolute left-0 bottom-[-4px] h-[3px] w-full rounded"
									style={{
										background:
											"linear-gradient(90deg,var(--orange-400),transparent)",
									}}
								/>
							</span>
							<br />
							Bisnis Anda
						</h1>

						{/* Description */}
						<p
							className="hero-desc text-[1.05rem] leading-[1.75] font-light max-w-[100%] md:max-w-[460px] mb-8 md:mb-11"
							style={{ color: "var(--text-secondary)" }}>
							Kami membangun ERP, sistem rekrutmen, payroll, dan aplikasi
							enterprise custom yang telah dipercaya oleh perusahaan nasional
							dan proyek strategis pemerintah di seluruh Indonesia.
						</p>

						{/* Buttons */}
						<div className="hero-btns flex gap-3 md:gap-[14px] flex-wrap">
							<Link
								href="#portfolio"
								className="inline-block px-8 py-[14px] rounded-full text-[.92rem] font-semibold no-underline transition-all duration-300"
								style={{
									background: "var(--orange-400)",
									color: "var(--text-on-orange)",
									boxShadow: "0 6px 20px rgba(244,131,42,.35)",
									border: "2px solid var(--orange-400)",
								}}
								onMouseEnter={(e) => {
									const el = e.currentTarget as HTMLElement;
									el.style.background = "var(--orange-500)";
									el.style.borderColor = "var(--orange-500)";
									el.style.transform = "translateY(-2px)";
								}}
								onMouseLeave={(e) => {
									const el = e.currentTarget as HTMLElement;
									el.style.background = "var(--orange-400)";
									el.style.borderColor = "var(--orange-400)";
									el.style.transform = "";
								}}>
								Lihat Portfolio ↓
							</Link>
							<Link
								href="#kontak"
								className="inline-block px-8 py-[14px] rounded-full text-[.92rem] font-semibold no-underline transition-all duration-300"
								style={{
									background: "transparent",
									color: "var(--orange-600)",
									border: "2px solid var(--border-medium)",
								}}
								onMouseEnter={(e) => {
									const el = e.currentTarget as HTMLElement;
									el.style.borderColor = "var(--orange-400)";
									el.style.background = "var(--orange-50)";
								}}
								onMouseLeave={(e) => {
									const el = e.currentTarget as HTMLElement;
									el.style.borderColor = "var(--border-medium)";
									el.style.background = "transparent";
								}}>
								Konsultasi Gratis
							</Link>
						</div>
					</div>

					{/* Right — floating dashboard cards */}
					<div className="hero-visual hidden lg:block relative h-[480px]">
						{/* Main card */}
						<div
							className="card-float-1 absolute rounded-[var(--radius)] border p-6"
							style={{
								width: 280,
								left: 30,
								top: 0,
								background: "var(--bg-card)",
								borderColor: "var(--border-soft)",
								boxShadow: "var(--shadow-md)",
							}}>
							<div
								className="text-[.72rem] font-semibold tracking-[1px] uppercase mb-[14px]"
								style={{ color: "var(--text-muted)" }}>
								Proyek Aktif
							</div>
							<div
								style={{
									fontFamily: "var(--font-playfair)",
									fontSize: "2.4rem",
									fontWeight: 900,
									color: "var(--text-primary)",
									lineHeight: 1,
								}}>
								9{" "}
								<sub
									className="text-base font-semibold"
									style={{
										color: "var(--orange-500)",
										fontFamily: "var(--font-plus-jakarta)",
									}}>
									proyek
								</sub>
							</div>
							<div
								className="text-xs font-light mt-[6px]"
								style={{ color: "var(--text-muted)" }}>
								Selesai on-time &amp; on-budget
							</div>
							<div className="mt-[18px] flex flex-col gap-[10px]">
								{[
									{ label: "ERP", w: "88%" },
									{ label: "HR System", w: "72%", delay: "0.2s" },
									{ label: "IT Asset", w: "60%", delay: "0.4s" },
								].map(({ label, w, delay }) => (
									<div key={label} className="flex items-center gap-[10px]">
										<span
											className="text-[.72rem] font-medium w-[60px] flex-shrink-0"
											style={{ color: "var(--text-secondary)" }}>
											{label}
										</span>
										<div
											className="flex-1 h-[6px] rounded-[3px] overflow-hidden"
											style={{ background: "var(--orange-100)" }}>
											<div
												className="bar-fill h-full rounded-[3px]"
												style={{
													width: w,
													background:
														"linear-gradient(90deg,var(--orange-400),var(--orange-200))",
													animationDelay: delay,
												}}
											/>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Stat card 1 */}
						<div
							className="card-float-2 absolute rounded-[var(--radius)] border p-7"
							style={{
								width: 190,
								bottom: 60,
								right: 0,
								background: "var(--bg-card)",
								borderColor: "var(--border-soft)",
								boxShadow: "var(--shadow-md)",
							}}>
							<span className="text-xl mb-2 block">🏭</span>
							<div
								className="text-[.72rem] font-semibold tracking-[1px] uppercase mb-[14px]"
								style={{ color: "var(--text-muted)" }}>
								Industri Dilayani
							</div>
							<div
								style={{
									fontFamily: "var(--font-playfair)",
									fontSize: "2.4rem",
									fontWeight: 900,
									color: "var(--text-primary)",
									lineHeight: 1,
								}}>
								4
								<sub
									className="text-base font-semibold"
									style={{
										color: "var(--orange-500)",
										fontFamily: "var(--font-plus-jakarta)",
									}}>
									+
								</sub>
							</div>
							<div
								className="mt-3 inline-flex items-center gap-[6px] px-3 py-[5px] rounded-full text-[.72rem] font-semibold border"
								style={{
									background: "var(--orange-50)",
									color: "var(--orange-600)",
									borderColor: "var(--border-medium)",
								}}>
								✓ Verified Clients
							</div>
						</div>

						{/* Stat card 2 */}
						<div
							className="card-float-3 absolute rounded-[var(--radius)] border p-7"
							style={{
								width: 160,
								top: 160,
								right: 20,
								background: "var(--bg-card)",
								borderColor: "var(--border-soft)",
								boxShadow: "var(--shadow-md)",
							}}>
							<span className="text-xl mb-2 block">⚡</span>
							<div
								className="text-[.72rem] font-semibold tracking-[1px] uppercase mb-[14px]"
								style={{ color: "var(--text-muted)" }}>
								Delivery Rate
							</div>
							<div
								style={{
									fontFamily: "var(--font-playfair)",
									fontSize: "2.4rem",
									fontWeight: 900,
									color: "var(--orange-500)",
									lineHeight: 1,
								}}>
								100
								<sub
									className="text-base font-semibold"
									style={{ fontFamily: "var(--font-plus-jakarta)" }}>
									%
								</sub>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Stats bar */}
			<div
				className="hero-statsbar flex justify-center flex-wrap gap-6 md:gap-0 py-6 md:py-7 px-6 md:px-16"
				style={{ background: "var(--bg-dark)" }}>
				{[
					{ num: "9+", label: "Proyek Selesai" },
					{ num: "7+", label: "Klien Terpercaya" },
					{ num: "4+", label: "Industri Terlayani" },
					{ num: "100%", label: "On-Time Delivery" },
				].map(({ num, label }) => (
					<div
						key={label}
						className="flex flex-col items-center md:flex-row gap-2 md:gap-6 px-4 md:px-14 py-2 md:py-3 border-none md:border-r last:border-r-0"
						style={{ borderColor: "rgba(255,248,241,.08)" }}>
						<div>
							<div
								style={{
									fontFamily: "var(--font-playfair)",
									fontSize: "2.2rem",
									fontWeight: 900,
									color: "var(--orange-200)",
									lineHeight: 1,
								}}>
								{num}
							</div>
							<div
								className="text-[.78rem] font-light mt-[3px] tracking-[.3px]"
								style={{ color: "rgba(255,248,241,.55)" }}>
								{label}
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
}
