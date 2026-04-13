const Statsbar = () => {
	return (
		<div>
			<div>
				<div className="hero-statsbar flex justify-center  gap-6 md:gap-0 py-6 md:py-7 px-6 md:px-16">
					<div className="statsbar-item">
						<div>
							<div className="statsbar-num">
								9
								<span
									style={{ fontSize: "1.2rem", color: "var(--orange-400)" }}>
									+
								</span>
							</div>
							<div className="statsbar-text">Proyek Selesai</div>
						</div>
					</div>
					<div className="statsbar-item">
						<div>
							<div className="statsbar-num">
								7
								<span
									style={{ fontSize: "1.2rem", color: "var(--orange-400)" }}>
									+
								</span>
							</div>
							<div className="statsbar-text">Klien Terpercaya</div>
						</div>
					</div>
					<div className="statsbar-item">
						<div>
							<div className="statsbar-num">
								4
								<span
									style={{ fontSize: "1.2rem", color: "var(--orange-400)" }}>
									+
								</span>
							</div>
							<div className="statsbar-text">Industri Terlayani</div>
						</div>
					</div>
					<div className="statsbar-item">
						<div>
							<div className="statsbar-num">
								100
								<span
									style={{ fontSize: "1.2rem", color: "var(--orange-400)" }}>
									%
								</span>
							</div>
							<div className="statsbar-text">On-Time Delivery</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Statsbar;
