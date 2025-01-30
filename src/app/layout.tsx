import type { Metadata } from "next";
import "./globals.css";
// import { Logo } from "@/components/Logo";
import Image from "next/image";
import logoImage from "@/assets/logo-no-name.png";
import { MobileNavbar } from "@/components/MobileNavbar";
import Link from "next/link";

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

        <meta
          property="og:url"
          content="https://lp-larpro-git-develop-guato-digitals-projects-c02ea4fe.vercel.app"
        />
        <meta property="og:site_name" content="LarPró" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="LarPró" />
        <meta
          property="og:description"
          content="Soluções para o seu dia a dia, a um toque!"
        />
        <meta
          property="og:image"
          content="https://lp-larpro-git-develop-guato-digitals-projects-c02ea4fe.vercel.app/favicon.ico"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LarPró" />
        <meta
          name="twitter:description"
          content="Soluções para o seu dia a dia, a um toque!"
        />
        <meta
          name="twitter:image"
          content="https://lp-larpro-git-develop-guato-digitals-projects-c02ea4fe.vercel.app/favicon.ico"
        />
      </head>
      <body>
        <header className="w-nav">
          <div className="nav-content">
            <Image
              src={logoImage}
              className="lg:w-[72px] lg:h-[51px] w-[50px] h-[43px]"
              alt="LarPró"
            />
            <ul className="hidden lg:flex gap-8">
              <li className="text-xl font-normal text-white">
                <Link href="#">Home</Link>
              </li>
              <li className="text-xl font-normal text-white">
                <Link href="#servicos">Serviços</Link>
              </li>
              <li className="text-xl font-normal text-white">
                <Link href="#beneficios">Benefícios</Link>
              </li>
              <li className="text-xl font-normal text-white">
                <Link href="#faqs">Dúvidas Frequentes</Link>
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
