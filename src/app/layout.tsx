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
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Soluções para o seu dia a dia, a um toque!"
        />
        <meta name="author" content="LarPró" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:url" content="https://larpro.com" />
        <meta property="og:site_name" content="LarPró" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="LarPró" />
        <meta
          property="og:description"
          content="Soluções para o seu dia a dia, a um toque!"
        />
        <meta property="og:image" content="https://larpro.com/favicon.ico" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LarPró" />
        <meta
          name="twitter:description"
          content="Soluções para o seu dia a dia, a um toque!"
        />
        <meta name="twitter:image" content="https://larpro.com/favicon.ico" />
      </head>
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
            <div className="flex lg:hidden">
              <MobileNavbar />
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
