import { TbTargetArrow } from "react-icons/tb";
import ScrollReveal from "./ScrollReveal";
import { IoIosFlash } from "react-icons/io";
import { MdLock } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";

const points = [
	{
		icon: <TbTargetArrow />,
		title: "Domain Expertise Lintas Industri",
		desc: "Pengalaman nyata di industri nikel, furnitur, retail, konstruksi, politik, dan proyek pemerintah skala nasional.",
	},
	{
		icon: <IoIosFlash />,
		title: "Delivery Terstruktur & Transparan",
		desc: "Metodologi agile dengan milestone yang terukur. Anda selalu tahu perkembangan proyek secara real-time.",
	},
	{
		icon: <MdLock />,
		title: "Aman, Skalabel & Production-Ready",
		desc: "Arsitektur yang dirancang untuk tumbuh bersama bisnis Anda — aman, performant, dan mudah dikembangkan.",
	},
	{
		icon: <FaHandshake />,
		title: "Support & Maintenance Berkelanjutan",
		desc: "Kami tidak hilang setelah serah terima. Dukungan purna jual, pembaruan, dan pengembangan lanjutan siap kami berikan.",
	},
];

const stats = [
	{
		num: "9+",
		title: "Proyek Enterprise Terselesaikan",
		sub: "Dari ERP, HR System, hingga Data Politik",
	},
	{
		num: "7+",
		title: "Klien Aktif dari Berbagai Sektor",
		sub: "Industri, konstruksi, retail, pemerintah",
	},
	{
		num: "4+",
		title: "Industri Vertikal yang Dilayani",
		sub: "Spesialisasi mendalam di setiap domain",
	},
	{
		num: "100%",
		title: "On-Time Delivery Rate",
		sub: "Semua proyek selesai sesuai jadwal",
	},
];

export default function WhyUsSection() {
	return (
		<section
			id="tentang"
			className="px-6  md:px-16 py-[80px] md:py-[110px]"
			style={{ background: "var(--bg-dark)" }}>
			{/* Glow orb */}
			<div
				className="absolute hidden md:block pointer-events-none rounded-full"
				style={{
					width: 600,
					height: 600,
					top: -200,
					right: -200,
					background:
						"radial-gradient(circle,rgba(244,131,42,.08) 0%,transparent 65%)",
				}}
			/>

			<div className=" grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
				{/* Left */}
				<ScrollReveal>
					<div
						className="inline-flex items-center gap-[10px] text-[.72rem] font-semibold tracking-[2px] uppercase mb-3"
						style={{ color: "var(--orange-200)" }}>
						<span
							className="w-5 h-[2px]"
							style={{ background: "var(--orange-400)" }}
						/>
						Mengapa Kami
					</div>
					<h2
						className="leading-[1.1] tracking-[-0.5px] mb-3"
						style={{
							fontFamily: "var(--font-playfair)",
							fontSize: "clamp(1.9rem,3.5vw,2.8rem)",
							fontWeight: 900,
							color: "var(--text-on-dark)",
						}}>
						Bukan Sekadar
						<br />
						Vendor Teknologi
					</h2>
					<p
						className="text-[.95rem] leading-[1.75] font-light max-w-[420px]"
						style={{ color: "rgba(255,248,241,.6)" }}>
						Kami adalah mitra strategis yang memahami proses bisnis Anda secara
						mendalam — dari kebutuhan operasional hingga arsitektur digital
						jangka panjang.
					</p>

					<div className="mt-11 flex flex-col gap-6">
						{points.map(({ icon, title, desc }) => (
							<div
								key={title}
								className="why-pt flex gap-[18px] items-start p-[22px] rounded-[var(--radius)] border transition-all duration-300"
								style={{
									borderColor: "rgba(244,131,42,.1)",
									background: "rgba(244,131,42,.04)",
								}}
								data-cursor-hover>
								<div
									className="w-10 h-10 rounded-[10px] flex items-center justify-center text-base flex-shrink-0 mt-[1px] border"
									style={{
										background: "rgb(255, 255, 255)",
										borderColor: "rgb(255, 255, 255)",
									}}>
									{icon}
								</div>
								<div>
									<div
										className="text-[.95rem] font-bold mb-[5px]"
										style={{
											fontFamily: "var(--font-playfair)",
											color: "var(--text-on-dark)",
										}}>
										{title}
									</div>
									<div
										className="text-[.82rem] leading-[1.65] font-light"
										style={{ color: "rgba(255,248,241,.55)" }}>
										{desc}
									</div>
								</div>
							</div>
						))}
					</div>
				</ScrollReveal>

				{/* Right */}
				<ScrollReveal delay={2} className="flex flex-col gap-5">
					{stats.map(({ num, title, sub }) => (
						<div
							key={title}
							className="wstat-card flex items-center gap-6 p-7 rounded-[var(--radius)] border transition-all duration-300"
							style={{
								background: "rgba(255,248,241,.04)",
								borderColor: "rgba(244,131,42,.12)",
							}}
							data-cursor-hover>
							<div
								className="font-black flex-shrink-0 w-[110px] leading-none"
								style={{
									fontFamily: "var(--font-playfair)",
									fontSize: "2.8rem",
									color: "var(--orange-200)",
								}}>
								{num}
							</div>
							<div>
								<strong
									className="block text-[.92rem] font-semibold mb-1"
									style={{ color: "var(--text-on-dark)" }}>
									{title}
								</strong>
								<span
									className="text-[.8rem] font-light"
									style={{ color: "rgba(255,248,241,.45)" }}>
									{sub}
								</span>
							</div>
						</div>
					))}
				</ScrollReveal>
			</div>
		</section>
	);
}
