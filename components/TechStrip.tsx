const techs = [
	"Next.js",
	"React",
	"TypeScript",
	"Tailwind CSS",
	"Shadcn UI",
	"Node.js",
	"PostgreSQL",
	"Prisma ORM",
	"REST API",
	"Docker",
	"Vercel",
	"Redis",
];

export default function TechStrip() {
	// Duplicate for seamless loop
	const doubled = [...techs, ...techs];

	return (
		<div
			className="py-14 overflow-hidden relative"
			style={{ background: "var(--bg-dark)" }}>
			{/* Fade edges */}
			<div
				className="absolute left-0 top-0 bottom-0 w-[120px] pointer-events-none z-10"
				style={{
					background: "linear-gradient(90deg,var(--bg-dark),transparent)",
				}}
			/>
			<div
				className="absolute right-0 top-0 bottom-0 w-[120px] pointer-events-none z-10"
				style={{
					background: "linear-gradient(-90deg,var(--bg-dark),transparent)",
				}}
			/>

			<p
				className="text-center text-[.7rem] tracking-[2px] uppercase font-medium mb-7"
				style={{ color: "rgba(255,248,241,.35)" }}>
				Teknologi yang kami gunakan
			</p>

			<div className="marquee-track">
				{doubled.map((tech, i) => (
					<span
						key={i}
						className="tech-pill inline-flex items-center gap-2 mx-2 px-[22px] py-[10px] rounded-full text-[.82rem] font-medium whitespace-nowrap border transition-all duration-300"
						style={{
							background: "rgba(255,248,241,.06)",
							borderColor: "rgba(244,131,42,.15)",
							color: "rgba(255,248,241,.7)",
						}}
						data-cursor-hover>
						<span
							className="w-[6px] h-[6px] rounded-full opacity-70"
							style={{ background: "var(--orange-400)" }}
						/>
						{tech}
					</span>
				))}
			</div>
		</div>
	);
}
