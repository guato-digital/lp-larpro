import type { Metadata } from "next";
import "./globals.css";
// import { Logo } from "@/components/Logo";
import Image from "next/image";
import logoImage from "@/assets/logo.png";
import { MobileNavbar } from "@/components/MobileNavbar";

export const metadata: Metadata = {
  title: "LarPró",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="w-nav">
          <div className="nav-content">
            <Image
              src={logoImage}
              className="lg:w-[70px] lg:h-[90px] w-[34px] h-[43px]"
              alt="LarPró"
            />
            <ul className="hidden lg:flex gap-8">
              <li className="text-xl font-normal text-white">Home</li>
              <li className="text-xl font-normal text-white">Serviços</li>
              <li className="text-xl font-normal text-white">Benefícios</li>
              <li className="text-xl font-normal text-white">
                Dúvidas Frequentes
              </li>
            </ul>
            <MobileNavbar />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
