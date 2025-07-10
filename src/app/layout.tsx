import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { PrimeReactProvider } from "primereact/api";
import { ToastProvider } from "./components/ToastContext";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Toji's Homepage",
	description: "Authored by Sagar Khatri",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<PrimeReactProvider>
			<html lang="en">
				<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
					<ToastProvider>{children}</ToastProvider>
				</body>
			</html>
		</PrimeReactProvider>
	);
}
