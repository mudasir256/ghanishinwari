import type { Metadata } from "next";
import { Great_Vibes, Source_Serif_4 } from "next/font/google";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ghani Shinwari Restaurant | Authentic Shinwari Cuisine in Lahore",
  description: "Experience authentic Shinwari karahi, kabab, rosh, pulao & more. Three branches in Lahore: Truck Adda, Bedian Road, Bahria Town. Let's meat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${greatVibes.variable} ${sourceSerif.variable} antialiased min-h-screen bg-[#FDF8F0] text-[#2c1810] font-[family-name:var(--font-source-serif)]`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
