import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
// import { Toaster } from "@/components/ui/sonner";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cubekit",
  description: "Content creator's helper for Solopreneurs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link rel="icon" href="/jsm-logo.png" sizes="any" />
			</head>
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
				<Script
					strategy="afterInteractive"
					src="https://www.googletagmanager.com/gtag/js?id=G-40SNJ5SY2Z"
				/>
				<Script id="google-analytics" strategy="afterInteractive">
					{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-40SNJ5SY2Z', { page_path: window.location.pathname });
        `}
				</Script>
				{/* <Toaster /> */}
			</body>
		</html>
  );
}
