import ScrollReveal from "./ScrollReveal";

const services = [
	{
		icon: "⚙️",
		title: "Enterprise Resource Planning",
		desc: "Sistem ERP terintegrasi untuk manufaktur, furnitur, retail, dan konstruksi. Satu platform untuk seluruh operasional bisnis.",
		n: "01",
	},
	{
		icon: "👥",
		title: "Rekrutmen & HR System",
		desc: "Sistem rekrutmen online, absensi digital, dan payroll otomatis. Dari seleksi kandidat hingga penggajian dalam satu alur.",
		n: "02",
	},
	{
		icon: "🖥️",
		title: "IT Invnentory ",
		desc: "IT Inventory yang terintegrasi langsung dengan sistem Direktorat Jenderal Bea dan Cukai, memungkinkan pemantauan dokumen export import secara real-time dan meningkatkan akurasi pelaporan kepabeanan perusahaan",
		n: "03",
	},
	{
		icon: "📊",
		title: "Pendataan & Verifikasi Data",
		desc: "Sistem pendataan berskala besar dengan verifikasi berlapis. Telah digunakan pada Pemilu & Pilkada 2024 oleh konsultan politik nasional.",
		n: "04",
	},
	{
		icon: "🏗️",
		title: "ERP Konstruksi & Proyek",
		desc: "Manajemen proyek konstruksi dengan RAB, progress monitoring, dan laporan keuangan proyek secara real-time.",
		n: "05",
	},
	{
		icon: "🚀",
		title: "Custom Web Application",
		desc: "Pengembangan aplikasi web modern dengan Next.js, Tailwind CSS, dan Shadcn UI — cepat, aman, dan siap skalabilitas tinggi.",
		n: "06",
	},
];

export default function ServicesSection() {
	return (
		<section
			id="layanan"
			className="px-6 md:px-16 py-[30px] md:py-[110px]"
			style={{ background: "var(--bg-section)" }}>
			<ScrollReveal className="flex flex-col md:flex-row md:justify-between md:items-end mb-10 md:mb-[60px] gap-6">
				<div>
					<div
						className="inline-flex items-center gap-[10px] text-[.72rem] font-semibold tracking-[2px] uppercase mb-3"
						style={{ color: "var(--orange-600)" }}>
						<span
							className="w-5 h-[2px]"
							style={{ background: "var(--orange-400)" }}
						/>
						Layanan Unggulan
					</div>
					<h2
						className="leading-[1.1] tracking-[-0.5px]"
						style={{
							fontFamily: "var(--font-playfair)",
							fontSize: "clamp(1.9rem,3.5vw,2.8rem)",
							fontWeight: 900,
							color: "var(--text-primary)",
						}}>
						Solusi yang Kami
						<br />
						Rancang untuk Anda
					</h2>
				</div>
				<p
					className="text-[.9rem] md:text-[.95rem] leading-[1.75] font-light max-w-full md:max-w-[360px]"
					style={{ color: "var(--text-secondary)" }}>
					Dari sistem enterprise hingga aplikasi industri spesifik — kami
					hadirkan teknologi yang presisi dan berdampak nyata.
				</p>
			</ScrollReveal>

			<ScrollReveal delay={1}>
				<div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] md:gap-[1px] rounded-[var(--radius)] overflow-hidden border"
					style={{
						background: "var(--border-soft)",
						borderColor: "var(--border-soft)",
					}}>
					{services.map(({ icon, title, desc, n }) => (
						<div
							key={n}
							className="svc-card relative overflow-hidden p-6 md:p-10 transition-colors duration-300"
							style={{ background: "var(--bg-card)" }}
							data-cursor-hover>
							<div
								className="svc-icon w-[44px] h-[44px] md:w-[52px] md:h-[52px] text-xl md:text-2xl mb-4 md:mb-[22px] rounded-[14px] flex items-center justify-center  border transition-all duration-300"
								style={{
									background: "var(--orange-50)",
									borderColor: "var(--border-medium)",
								}}>
								{icon}
							</div>
							<h3
								className="text-[1.1rem] font-bold mb-[10px]"
								style={{
									fontFamily: "var(--font-playfair)",
									color: "var(--text-primary)",
								}}>
								{title}
							</h3>
							<p
								className="text-[.82rem] md:text-[.84rem] leading-[1.7] font-light"
								style={{ color: "var(--text-secondary)" }}>
								{desc}
							</p>
							<div
								className="absolute bottom-5 right-7 leading-none font-black"
								style={{
									fontFamily: "var(--font-playfair)",
									fontSize: "clamp(2.5rem,8vw,4rem)",
									color: "rgba(28,18,8,.03)",
								}}>
								{n}
							</div>
						</div>
					))}
				</div>
			</ScrollReveal>
		</section>
	);
}
