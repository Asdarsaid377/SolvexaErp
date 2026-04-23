import ScrollReveal from "./ScrollReveal";

const projects = [
	{
		n: "01",
		title: "Sistem Pendataan & Verifikasi Pemilu 2024",
		sub: "Jaringan Suara Indonesia — Konsultan Politik · Pemilu Legislatif & Pilkada 2024",
		chip: "Data Politik",
		chipClass: "chip-data",
	},
	{
		n: "02",
		title: "Sistem Rekrutmen Online Kawasan Industri",
		sub: "Huadi Bantaeng Industry Park — Kawasan Industri Bantaeng, Sulawesi Selatan",
		chip: "Rekrutmen",
		chipClass: "chip-hr",
	},
	{
		n: "02",
		title:
			"Sistem Recap Case Pekerjaan dan pelaporan realisasi pekerjaan di Kawasan Industri",
		sub: "Huadi Bantaeng Industry Park — Kawasan Industri Bantaeng, Sulawesi Selatan",
		chip: "Recap Case",
		chipClass: "chip-hr",
	},
	{
		n: "03",
		title: "Sistem Attendance & Payroll Karyawan",
		sub: "PT Unity Nickel Alloy Indonesia — Industri Nikel & Metalurgi",
		chip: "HR System",
		chipClass: "chip-hr",
	},
	{
		n: "04",
		title: "Sistem IT Inventory Management",
		sub: "PT Unity Nickel Alloy Indonesia — Manajemen Aset IT & Infrastruktur",
		chip: "IT Asset",
		chipClass: "chip-it",
	},
	{
		n: "05",
		title: "ERP Manufaktur Furnitur",
		sub: "BungaNaik Furniture — Produksi, Inventori, Penjualan & Keuangan",
		chip: "ERP",
		chipClass: "chip-erp",
	},
	{
		n: "06",
		title: "ERP Retail Handphone",
		sub: "IBone Gadget — POS, Manajemen Stok & Laporan Keuangan",
		chip: "ERP",
		chipClass: "chip-erp",
	},
	{
		n: "07",
		title: "ERP Perusahaan Konstruksi",
		sub: "Karya Pare Sejahtera — Manajemen Proyek, RAB & Keuangan Konstruksi",
		chip: "ERP",
		chipClass: "chip-erp",
	},
	{
		n: "08",
		title: "ERP Proyek Sekolah Rakyat — Kab. Bone",
		sub: "PT Nindya & BPS KSO — Proyek Pembangunan Strategis Nasional",
		chip: "ERP",
		chipClass: "chip-erp",
	},
	{
		n: "09",
		title: "ERP Proyek Sekolah Rakyat — Tebing Tinggi",
		sub: "PT Waskita & MKI KSO — Proyek Pembangunan Sekolah Rakyat Palembang",
		chip: "ERP",
		chipClass: "chip-erp",
	},
];

const chipStyles: Record<string, React.CSSProperties> = {
	"chip-erp": {
		background: "#FFF4E8",
		color: "#B85208",
		border: "1px solid #F4832A44",
	},
	"chip-hr": {
		background: "#F0FDF4",
		color: "#166534",
		border: "1px solid #22c55e44",
	},
	"chip-it": {
		background: "#EFF6FF",
		color: "#1D4ED8",
		border: "1px solid #3b82f644",
	},
	"chip-data": {
		background: "#FDF4FF",
		color: "#7E22CE",
		border: "1px solid #a855f744",
	},
};

export default function PortfolioSection() {
	return (
		<section
			id="portfolio"
			className="px-6 md:px-16 py-[30px] md:py-[110px]"
			style={{ background: "var(--bg-base)" }}>
			<ScrollReveal className="mb-14">
				<div
					className="inline-flex items-center gap-[10px] text-[.72rem] font-semibold tracking-[2px] uppercase mb-3"
					style={{ color: "var(--orange-600)" }}>
					<span
						className="w-5 h-[2px]"
						style={{ background: "var(--orange-400)" }}
					/>
					Klien &amp; Portofolio
				</div>
				<h2
					className="leading-[1.1] tracking-[-0.5px]"
					style={{
						fontFamily: "var(--font-playfair)",
						fontSize: "clamp(1.9rem,3.5vw,2.8rem)",
						fontWeight: 900,
						color: "var(--text-primary)",
					}}>
					Dipercaya oleh Perusahaan
					<br />
					&amp; Institusi Terkemuka
				</h2>
			</ScrollReveal>

			<ScrollReveal delay={1}>
				<div
					className="flex flex-col border rounded-[var(--radius)] overflow-hidden"
					style={{ borderColor: "var(--border-soft)" }}>
					{projects.map((item, index) => (
						<div
							key={index}
							className="port-item relative grid items-center gap-7 px-9 py-[26px] border-b last:border-b-0"
							style={{
								gridTemplateColumns: "52px 1fr auto",
								background: "var(--bg-card)",
								borderColor: "var(--border-soft)",
							}}
							data-cursor-hover>
							<div
								className="text-[.85rem] font-bold"
								style={{
									fontFamily: "var(--font-playfair)",
									color: "var(--orange-400)",
								}}>
								{index + 1}
							</div>
							<div>
								<h3
									className="port-title text-[.98rem] font-bold mb-[3px] transition-colors duration-250"
									style={{
										fontFamily: "var(--font-playfair)",
										color: "var(--text-primary)",
									}}>
									{item.title}
								</h3>
								<p
									className="text-[.8rem] font-light"
									style={{ color: "var(--text-muted)" }}>
									{item.sub}
								</p>
							</div>
							<span
								className="hidden sm:inline-block px-[14px] py-[4px] rounded-full text-[.7rem] font-semibold tracking-[.5px] whitespace-nowrap"
								style={chipStyles[item.chipClass]}>
								{item.chip}
							</span>
						</div>
					))}
				</div>
			</ScrollReveal>
		</section>
	);
}
