import Image from "next/image";
import {
  ChatCircleDots,
  ChatTeardropText,
  CheckCircle,
  Confetti,
  GearSix,
  InstagramLogo,
  Lightning,
  NavigationArrow,
  Sparkle,
  Star,
  ThumbsUp,
} from "@phosphor-icons/react/dist/ssr";

import { AppStoreLogo } from "@/components/AppStoreLogo";
import { CardIcon } from "@/components/CardIcon";

import phoneImage from "@/assets/phone-mockup.png";
import phoneCircle from "@/assets/phone-circle.png";
import phoneCirclePink from "@/assets/phone-circle-pink.png";
import phone from "@/assets/phone-mockup-2.png";
import logo from "@/assets/logo-purple.png";

import playStoreLogo from "@/assets/playstore-logo.png";
import { FacebookLogo } from "@/components/FacebookLogo";
import { LinkedinLogo } from "@/components/LinkedinLogo";
import Link from "next/link";
import { FadeInSection } from "@/components/FadeInSection";
import { Faq } from "@/components/Faq";

export default function Home() {
  return (
    <>
      <main className="pt-16 lg:pt-28">
        <section className="w-full flex justify-center px-6 xl:px-7 lg:px-7 pt-10 bg-header bg-center bg-cover">
          <div className="w-full max-w-screen-xl flex flex-col lg:flex-row">
            <div className="flex flex-col lg:justify-center items-start">
              <span className="bg-primary/10 text-primary font-bold text-sm rounded-[100px] px-6 py-3 tracking-[2px] lg:-mt-40">
                LARPRÓ
              </span>
              <div className="flex flex-col gap-4 mt-4">
                <h1 className="text-[32px] font-bold text-black-500 w-full max-w-80 leading-[38px] lg:text-6xl lg:max-w-[665px] lg:leading-[72px]">
                  Soluções para o seu dia a dia,{" "}
                  <span className="text-primary">a um toque</span>!
                </h1>
                <p className="text-black-150 text-base lg:text-xl">
                  Encontre eletricistas, encanadores, pintores, diaristas,
                  técnicos e muito mais. Tudo em um só lugar, com praticidade e
                  confiança!
                </p>
                <div className="mt-4 w-full flex justify-between gap-5 lg:max-w-[404px]">
                  <button className="w-full max-w-48 py-2 px-4 bg-black-500 rounded-lg flex gap-3 items-center">
                    <Image
                      src={playStoreLogo}
                      alt="Baixe LarPró na PlayStore"
                      className="w-[27px] h-[30px]"
                    />
                    <span className="flex flex-col text-[10px] lg:text-xs text-white text-left">
                      Disponível na
                      <p className="text-base lg:text-xl text-white font-bold">
                        Google Play
                      </p>
                    </span>
                  </button>

                  <button className="w-full max-w-48 py-2 px-4 bg-black-500 rounded-lg flex gap-3 items-center">
                    <AppStoreLogo />
                    <span className="flex flex-col text-[10px] lg:text-xs text-white text-left">
                      Disponível na
                      <p className="text-base lg:text-xl text-white font-bold">
                        App Store
                      </p>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full mt-8 lg:mt-0 z-10">
              <Image src={phoneImage} alt="LarPró - Celular" />
            </div>
          </div>
        </section>

        <div className="w-full h-28 bg-bullets bg-cover bg-no-repeat bg-center absolute z-30 -mt-10"></div>

        <section
          className="w-full flex justify-center px-6 pt-10 mt-14 lg:mt-28 xl:px-7 lg:px-7 "
          id="servicos"
        >
          <div className="w-full max-w-screen-xl">
            <FadeInSection>
              <span className="bg-primary/10 text-primary font-bold text-sm rounded-[100px] px-6 py-3 tracking-[2px]">
                SERVIÇOS
              </span>
              <div className="flex flex-col gap-4 mt-4 lg:flex-row lg:mt-6">
                <h1 className="text-2xl font-bold text-black-500 w-full max-w-80 leading-[38px] lg:w-1/2 lg:max-w-full lg:text-[40px]">
                  Precisa de ajuda em casa?
                </h1>
                <p className="text-black-150 text-base border-l-[2px] border-primary pl-3 lg:w-1/2 lg:max-w-full lg:text-xl">
                  O LarPró conecta você aos melhores prestadores de serviços
                  para tudo o que você precisa:
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="flex flex-col lg:flex-row gap-4 mt-12">
                <CardIcon
                  Icon={GearSix}
                  title="Consertos e reparos"
                  description="Soluções rápidas e profissionais para consertar e manter tudo funcionando perfeitamente na sua casa ou empresa."
                />
                <CardIcon
                  Icon={Confetti}
                  title="Decoração e artigos para festas"
                  description="Transforme qualquer ocasião com especialistas em decoração e acessórios para eventos inesquecíveis."
                />
                <CardIcon
                  Icon={Lightning}
                  title="Pintura, elétrica, hidráulica e mecânica"
                  description="Serviços técnicos especializados para garantir segurança, funcionalidade e beleza ao seu espaço."
                />
                <CardIcon
                  Icon={Sparkle}
                  title="Limpeza, estética e muito mais"
                  description="Encontre serviços que cuidam do seu ambiente e do seu bem-estar com qualidade e confiança."
                />
              </div>
            </FadeInSection>
          </div>
        </section>

        <section
          className="w-full flex justify-center px-6 pt-10 bg-benefits bg-cover bg-center bg-no-repeat xl:px-7 lg:px-7 "
          id="beneficios"
        >
          <div className="w-full max-w-screen-xl lg:flex lg:flex-col lg:items-center">
            <FadeInSection>
              <h1 className="text-xl font-semibold text-black-500 w-full max-w-80 leading-8 lg:text-center lg:text-[32px] lg:max-w-full">
                Tudo em um só lugar, fácil, rápido e seguro.
              </h1>
              <p className="text-black-150 text-base mt-3 lg:text-center lg:text-xl lg:max-w-[900px]">
                Com o LarPro, você acessa uma rede confiável de prestadores
                avaliados por outros clientes e pode escolher pela sua
                localidade.
              </p>
            </FadeInSection>

            <FadeInSection>
              <div className="w-full flex flex-col gap-4 mt-14 lg:flex-row lg:items-center">
                <div className="hidden lg:flex w-full">
                  <Image
                    src={phoneCircle}
                    alt="LarPro - Benefícios"
                    className="w-full"
                  />
                </div>

                <div className="w-full lg:-mt-24">
                  <span className="bg-primary/10 text-primary font-bold text-sm rounded-[100px] px-6 py-3 tracking-[2px]">
                    BENEFÍCIOS
                  </span>
                  <h1 className="text-2xl font-bold text-black-500 w-full max-w-80 leading-8 mt-6 lg:text-[40px] lg:max-w-full">
                    Por que escolher o LarPro?
                  </h1>

                  <div className="w-full flex gap-2 mt-10">
                    <div className="flex flex-col gap-1">
                      <div className="flex gap-2">
                        <div className="flex flex-col items-center gap-1">
                          <span className="w-10 h-10 rounded-full bg-[#6659FE14] flex items-center justify-center">
                            <CheckCircle size={20} className="text-primary" />
                          </span>
                          <span className="border border-primary border-dashed h-16" />
                        </div>
                        <div>
                          <h2 className="text-black-500 text-xl font-semibold lg:text-2xl">
                            Facilidade e Praticidade
                          </h2>
                          <p className="text-black-150 text-base lg:text-xl">
                            Solicite serviços com apenas alguns cliques.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <div className="flex flex-col items-center gap-1">
                          <span className="w-10 h-10 rounded-full bg-[#6659FE14] flex items-center justify-center">
                            <ChatCircleDots
                              size={20}
                              className="text-primary"
                            />
                          </span>
                          <span className="border border-primary border-dashed h-16" />
                        </div>
                        <div>
                          <h2 className="text-black-500 text-xl font-semibold lg:text-2xl">
                            Chat em Tempo Real
                          </h2>
                          <p className="text-black-150 text-base lg:text-xl">
                            Fale diretamente com os prestadores para tirar
                            dúvidas e negociar detalhes.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <div className="flex flex-col items-center gap-1">
                          <span className="w-10 h-10 rounded-full bg-[#6659FE14] flex items-center justify-center">
                            <NavigationArrow
                              size={20}
                              className="text-primary rotate-45"
                            />
                          </span>
                          <span className="border border-primary border-dashed h-16" />
                        </div>
                        <div>
                          <h2 className="text-black-500 text-xl font-semibold lg:text-2xl">
                            Escolha de Localidade
                          </h2>
                          <p className="text-black-150 text-base lg:text-xl">
                            Encontre profissionais próximos a você, garantindo
                            rapidez e economia.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <div className="flex flex-col items-center gap-1">
                          <span className="w-10 h-10 rounded-full bg-[#6659FE14] flex items-center justify-center">
                            <Star size={20} className="text-primary" />
                          </span>
                        </div>
                        <div>
                          <h2 className="text-black-500 text-xl font-semibold lg:text-2xl">
                            Avaliações Reais
                          </h2>
                          <p className="text-black-150 text-base lg:text-xl">
                            Escolha prestadores com base nas avaliações de
                            outros usuários.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex lg:hidden w-full">
                  <Image
                    src={phoneCircle}
                    alt="LarPro - Benefícios"
                    className="w-full"
                  />
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        <section className="w-full flex justify-center px-6 xl:px-7 lg:px-7 pt-10">
          <div className="w-full max-w-screen-xl flex flex-col justify-center items-center">
            <FadeInSection>
              <span className="bg-primary/10 text-primary font-bold text-sm rounded-[100px] px-6 py-3 tracking-[2px]">
                PARA PRESTADORES
              </span>
            </FadeInSection>

            <div className="w-full flex flex-col mt-6 items-center">
              {" "}
              <FadeInSection>
                <h1 className="text-2xl font-bold text-black-500 text-center lg:text-[44px]">
                  LarPro Prestadores
                </h1>
                <p className="text-black-150 text-center text-base mt-4 lg:text-xl">
                  Se você é um prestador de serviços, o LarPro Prestadores é a
                  plataforma ideal para impulsionar seu negócio! <br />
                  <strong>
                    Cadastre-se gratuitamente, ofereça seus serviços e conquiste
                    clientes perto de você.
                  </strong>
                </p>
              </FadeInSection>
              <div className="hidden lg:flex lg:flex-row w-full mt-24">
                <div className="w-full max-w-96 flex flex-col justify-between py-32">
                  <FadeInSection>
                    <CardIcon
                      Icon={Star}
                      title="Avaliações que valorizam o seu trabalho"
                      description="Destaque sua qualidade com avaliações reais que atraem mais
                    oportunidades de negócios."
                    />
                  </FadeInSection>

                  <FadeInSection>
                    <p className="border-l-2 border-primary pl-4 text-black-500 text-2xl font-bold">
                      Baixe o LarPro e o LarPro Prestadores agora mesmo e faça
                      parte dessa revolução no mercado de serviços!
                    </p>
                  </FadeInSection>
                </div>

                <div className="w-full">
                  <Image
                    src={phoneCirclePink}
                    className="w-full"
                    alt="LarPro - Baixe o LarPro"
                  />
                </div>

                <div className="w-full max-w-96 flex flex-col justify-between py-32">
                  <FadeInSection>
                    <CardIcon
                      Icon={ThumbsUp}
                      title="Mais visibilidade e demanda"
                      description="Amplie sua presença no mercado e conquiste novos clientes que precisam dos seus serviços."
                    />
                  </FadeInSection>
                  <FadeInSection>
                    <CardIcon
                      Icon={ChatTeardropText}
                      title="Comunicação direta com clientes via chat"
                      description="Tire dúvidas e negocie detalhes facilmente com seus clientes em tempo real."
                    />
                  </FadeInSection>
                </div>
              </div>
              <div className="flex lg:hidden flex-col w-full gap-8 mt-8">
                <FadeInSection>
                  <CardIcon
                    Icon={Star}
                    title="Avaliações que valorizam o seu trabalho"
                    description="Destaque sua qualidade com avaliações reais que atraem mais
                    oportunidades de negócios."
                  />
                </FadeInSection>
                <FadeInSection>
                  <CardIcon
                    Icon={ThumbsUp}
                    title="Mais visibilidade e demanda"
                    description="Amplie sua presença no mercado e conquiste novos clientes que precisam dos seus serviços."
                  />
                </FadeInSection>
                <FadeInSection>
                  <CardIcon
                    Icon={ChatTeardropText}
                    title="Comunicação direta com clientes via chat"
                    description="Tire dúvidas e negocie detalhes facilmente com seus clientes em tempo real."
                  />
                </FadeInSection>
                <FadeInSection>
                  <p className="border-l-2 border-primary pl-4 text-black-500 text-xl font-bold">
                    Baixe o LarPro e o LarPro Prestadores agora mesmo e faça
                    parte dessa revolução no mercado de serviços!
                  </p>
                </FadeInSection>
                <FadeInSection>
                  <Image
                    src={phoneCirclePink}
                    className="w-full"
                    alt="LarPro - Baixe o LarPro"
                  />
                </FadeInSection>
              </div>
            </div>

            <div></div>
          </div>
        </section>

        <FadeInSection>
          <section
            className="w-full flex flex-col justify-center lg:items-center px-6 pt-10 lg:mt-40 xl:px-7 lg:px-7 "
            id="faqs"
          >
            <Faq />

            <div className="w-full max-w-screen-xl mt-8 lg:mt-12">
              <h1 className="text-black-500 text-2xl font-bold lg:text-[32px]">
                Tem mais dúvidas?
              </h1>
              <p className="text-base text-black-150 lg:text-xl">
                Entre em contato pelo suporte do app! Estamos prontos para
                ajudar.
              </p>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="hidden lg:flex justify-center mt-44 xl:px-7 lg:px-7">
            <div className="w-full max-w-screen-xl h-[445px] bg-cta rounded-[40px] flex items-center justify-between px-20">
              <div className="w-full max-w-[674px]">
                <h1 className="font-bold text-white text-4xl">
                  Baixe o LarPro e o LarPro Prestadores
                </h1>
                <p className="text-white text-base mt-3">
                  Disponível para Android e iOS. Baixe agora e descubra como é
                  fácil resolver suas necessidades do dia a dia com apenas
                  alguns cliques.
                </p>
                <div className="grid grid-cols-2 w-full max-w-[412px]">
                  <div className="w-full max-w-48 flex flex-col gap-2 mt-10">
                    <p className="text-white font-bold text-base">
                      LarPro para Clientes
                    </p>
                    <button className="w-full max-w-48 py-2 px-4 bg-black-500 rounded-lg flex gap-3 items-center">
                      <Image
                        src={playStoreLogo}
                        alt="Baixe LarPró na PlayStore"
                        className="w-[27px] h-[30px]"
                      />
                      <span className="flex flex-col text-[10px] lg:text-xs text-white text-left">
                        Disponível na
                        <p className="text-base lg:text-xl text-white font-bold">
                          Google Play
                        </p>
                      </span>
                    </button>

                    <button className="w-full max-w-48 py-2 px-4 bg-black-500 rounded-lg flex gap-3 items-center">
                      <AppStoreLogo />
                      <span className="flex flex-col text-[10px] lg:text-xs text-white text-left">
                        Disponível na
                        <p className="text-base lg:text-xl text-white font-bold">
                          App Store
                        </p>
                      </span>
                    </button>
                  </div>

                  <div className="w-full max-w-48 flex flex-col gap-2 mt-10">
                    <p className="text-white font-bold text-base">
                      LarPro para Prestadores
                    </p>
                    <button className="w-full max-w-48 py-2 px-4 bg-black-500 rounded-lg flex gap-3 items-center">
                      <Image
                        src={playStoreLogo}
                        alt="Baixe LarPró na PlayStore"
                        className="w-[27px] h-[30px]"
                      />
                      <span className="flex flex-col text-[10px] lg:text-xs text-white text-left">
                        Disponível na
                        <p className="text-base lg:text-xl text-white font-bold">
                          Google Play
                        </p>
                      </span>
                    </button>

                    <button className="w-full max-w-48 py-2 px-4 bg-black-500 rounded-lg flex gap-3 items-center">
                      <AppStoreLogo />
                      <span className="flex flex-col text-[10px] lg:text-xs text-white text-left">
                        Disponível na
                        <p className="text-base lg:text-xl text-white font-bold">
                          App Store
                        </p>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <Image
                alt="Phone Mockup 2"
                className="w-[531px] h-[585px] mt-[-140px]"
                src={phone}
              />
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="flex lg:hidden justify-center mt-14 mx-7">
            <div className="w-full bg-primary rounded-[40px] flex flex-col items-center justify-center px-8 pt-9">
              <div className="w-full max-w-[674px]">
                <h1 className="font-bold text-white text-2xl mt-4">
                  Baixe o LarPro e o LarPro Prestadores
                </h1>
                <p className="text-white text-sm mt-3">
                  Disponível para Android e iOS. Baixe agora e descubra como é
                  fácil resolver suas necessidades do dia a dia com apenas
                  alguns cliques.
                </p>

                <div className="grid grid-cols-2 w-full gap-6">
                  <div className="w-full  flex flex-col gap-2 mt-10">
                    <p className="text-white font-bold text-base">
                      LarPro para Clientes
                    </p>
                    <button className="w-full  py-2 px-4 bg-black-500 rounded-lg flex gap-3 items-center">
                      <Image
                        src={playStoreLogo}
                        alt="Baixe LarPró na PlayStore"
                        className="w-[27px] h-[30px]"
                      />
                      <span className="flex flex-col text-[10px] lg:text-xs text-white text-left">
                        Disponível na
                        <p className="text-xs lg:text-xl text-white font-bold">
                          Google Play
                        </p>
                      </span>
                    </button>

                    <button className="w-full  py-2 px-4 bg-black-500 rounded-lg flex gap-3 items-center">
                      <AppStoreLogo />
                      <span className="flex flex-col text-[10px] lg:text-xs text-white text-left">
                        Disponível na
                        <p className="text-xs lg:text-xl text-white font-bold">
                          App Store
                        </p>
                      </span>
                    </button>
                  </div>

                  <div className="w-full  flex flex-col gap-2 mt-10">
                    <p className="text-white font-bold text-base">
                      LarPro para Prestadores
                    </p>
                    <button className="w-full  py-2 px-4 bg-black-500 rounded-lg flex gap-3 items-center">
                      <Image
                        src={playStoreLogo}
                        alt="Baixe LarPró na PlayStore"
                        className="w-[27px] h-[30px]"
                      />
                      <span className="flex flex-col text-[10px] lg:text-xs text-white text-left">
                        Disponível na
                        <p className="text-xs lg:text-xl text-white font-bold">
                          Google Play
                        </p>
                      </span>
                    </button>

                    <button className="w-full  py-2 px-4 bg-black-500 rounded-lg flex gap-3 items-center">
                      <AppStoreLogo />
                      <span className="flex flex-col text-[10px] lg:text-xs text-white text-left">
                        Disponível na
                        <p className="text-xs lg:text-xl text-white font-bold">
                          App Store
                        </p>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <Image
                alt="Phone Mockup 2"
                className="w-[366px] h-[379px] mt-[72px]"
                src={phone}
              />
            </div>
          </section>
        </FadeInSection>
      </main>

      <footer className="w-full px-6 py-14 mt-14 lg:flex lg:flex-col lg:items-center xl:px-7 lg:px-7">
        <div className="w-full max-w-screen-xl flex flex-col lg:items-center">
          <div className="lg:w-full lg:flex lg:justify-between">
            <div className="flex flex-col lg:max-w-[272px]">
              <Image src={logo} alt="LarPró" className="w-[70px] h-[90px]" />
              <p className="text-black-150 text-xl">
                Soluções para seu dia a dia, a um toque!
              </p>
            </div>

            <div className="lg:flex lg:flex-col lg:items-center">
              <ul className="flex flex-col gap-6 text-xl my-8 lg:flex-row">
                <li className=" text-black-500 hover:text-primary">
                  <Link href="#">Home</Link>
                </li>
                <li className=" text-black-500 hover:text-primary">
                  <Link href="#servicos">Serviços</Link>
                </li>
                <li className=" text-black-500 hover:text-primary">
                  <Link href="#beneficios">Benefícios</Link>
                </li>
                <li className=" text-black-500 hover:text-primary">
                  <Link href="#faqs">Dúvidas Frequentes</Link>
                </li>
              </ul>

              <div className="w-full max-w-44 mt-6 hidden lg:flex flex-col gap-5 lg:max-w-[440px] lg:flex-row">
                <button className="w-full  py-2 px-4 bg-black-500 rounded-lg flex gap-3 items-center">
                  <Image
                    src={playStoreLogo}
                    alt="Baixe LarPró na PlayStore"
                    className="w-[27px] h-[30px]"
                  />
                  <span className="flex flex-col text-[10px] lg:text-xs text-white text-left">
                    Disponível na
                    <p className="text-xs lg:text-xl text-white font-bold">
                      Google Play
                    </p>
                  </span>
                </button>

                <button className="w-full  py-2 px-4 bg-black-500 rounded-lg flex gap-3 items-center">
                  <AppStoreLogo />
                  <span className="flex flex-col text-[10px] lg:text-xs text-white text-left">
                    Disponível na
                    <p className="text-xs lg:text-xl text-white font-bold">
                      App Store
                    </p>
                  </span>
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <InstagramLogo className="text-white" size={24} />
              </span>
              <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <FacebookLogo />
              </span>
              <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <LinkedinLogo />
              </span>
            </div>
          </div>

          <div className="w-full max-w-44 mt-6 flex lg:hidden flex-col gap-5 lg:max-w-[440px] lg:flex-row">
            <button className="w-full  py-2 px-4 bg-black-500 rounded-lg flex gap-3 items-center">
              <Image
                src={playStoreLogo}
                alt="Baixe LarPró na PlayStore"
                className="w-[27px] h-[30px]"
              />
              <span className="flex flex-col text-[10px] lg:text-xs text-white text-left">
                Disponível na
                <p className="text-xs lg:text-xl text-white font-bold">
                  Google Play
                </p>
              </span>
            </button>

            <button className="w-full  py-2 px-4 bg-black-500 rounded-lg flex gap-3 items-center">
              <AppStoreLogo />
              <span className="flex flex-col text-[10px] lg:text-xs text-white text-left">
                Disponível na
                <p className="text-xs lg:text-xl text-white font-bold">
                  App Store
                </p>
              </span>
            </button>
          </div>

          <hr className="my-14" />

          <div className="w-full flex flex-col lg:items-center lg:justify-center">
            <p className="text-black-500 text-sm">
              2024 LarPró. Todos os direitos reservados.
            </p>
            <ul className="flex gap-4 underline mt-6 text-sm">
              <li className="text-black-500 hover:text-primary underline">
                Privacidade
              </li>
              <li className="text-black-500 hover:text-primary underline">
                Termos
              </li>
              <li className="text-black-500 hover:text-primary underline">
                Cookies
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
