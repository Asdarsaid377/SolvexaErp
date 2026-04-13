import { CTASection, Footer } from "@/components/CTA";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/Portofolio";
import ServicesSection from "@/components/Services";
import Navbar from "@/components/shared/Navbar";
import TechStrip from "@/components/TechStrip";
import WhyUsSection from "@/components/WhyUs";

export default function Home() {
	return (
		<main>
			<Navbar />
			<HeroSection />
			<ServicesSection />
			<PortfolioSection />
			<TechStrip />
			<WhyUsSection />
			<CTASection />
			<Footer />
		</main>
	);
}
