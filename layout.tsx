import type { Metadata } from "next";
import { Poppins, Space_Grotesk, Inter, Manrope } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Md. Ferdous Rahman Fakir | Fashion Designer Portfolio",
  description: "Premium fashion design portfolio of Md. Ferdous Rahman Fakir - Fashion Design Student at Port City International University, Chattogram, Bangladesh.",
  keywords: ["fashion designer", "portfolio", "fashion design", "Bangladesh", "student"],
  authors: [{ name: "Md. Ferdous Rahman Fakir" }],
  openGraph: {
    title: "Md. Ferdous Rahman Fakir | Fashion Designer",
    description: "Premium fashion design portfolio showcasing creative works and projects.",
    type: "website",
    locale: "en_BD",
    siteName: "Ferdous Fashion Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Ferdous Rahman Fakir | Fashion Designer",
    description: "Premium fashion design portfolio showcasing creative works and projects.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${spaceGrotesk.variable} ${inter.variable} ${manrope.variable} bg-[#0B0B0B] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
