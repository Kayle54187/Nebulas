import type { Metadata } from "next";
import { Poppins } from "next/font/google";

// Globals
import "./globals.css";

// Components
import NavBar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Nebulas",
  description: "Official Website fo the Nebulas Think Tank",
};

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <div className="w-full flex flex-col items-center bg-[#F4F7FA]">
          <NavBar />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
