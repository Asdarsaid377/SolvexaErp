import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const playfair = Playfair_Display({
	variable: "--font-playfair",
	subsets: ["latin"],
	weight: ["700", "900"],
	style: ["normal", "italic"],
});

const plusJakarta = Plus_Jakarta_Sans({
	variable: "--font-plus-jakarta",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
	title: "Solvexa — Enterprise Digital Solutions",
	description:
		"Kami membangun ERP, sistem rekrutmen, payroll, dan aplikasi enterprise custom yang dipercaya oleh perusahaan nasional dan proyek strategis pemerintah di Indonesia.",
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html
			lang="id"
			className={`${playfair.variable} ${plusJakarta.variable} h-full antialiased`}>
			<body className="min-h-full flex flex-col">
				<CustomCursor />
				{children}
			</body>
		</html>
	);
}
