"use client";

import { useState } from "react";
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
import { BulletsCarousel } from "@/components/BulletsCarousel";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import phoneImage from "@/assets/phone-mockup.png";
import phoneCircle from "@/assets/phone-circle.png";
import phoneCirclePink from "@/assets/phone-circle-pink.png";
import phone from "@/assets/phone.png";
import logo from "@/assets/logo-purple.png";

import faq0 from "@/assets/man-phone.png";
import faq1 from "@/assets/faq/1.png";
import faq2 from "@/assets/faq/2.png";
import faq3 from "@/assets/faq/3.png";
import faq4 from "@/assets/faq/4.png";
import faq5 from "@/assets/faq/5.png";

import playStoreLogo from "@/assets/playstore-logo.png";
import { FacebookLogo } from "@/components/FacebookLogo";
import { LinkedinLogo } from "@/components/LinkedinLogo";

export default function Home() {
  const [faqSelected, setFaqSelected] = useState(0);

  const faqImages = [faq0, faq1, faq2, faq3, faq4, faq5];

  return (
    <>
      <main className="pt-20 lg:pt-32">
        <section className="w-full flex justify-center px-6 lg:px-0 pt-10 bg-header bg-center bg-cover">
          <div className="w-full max-w-desk flex flex-col lg:flex-row">
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
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
          className="w-full flex justify-center px-6 lg:px-0 pt-10 mt-14 lg:mt-28"
          id="servicos"
        >
          <div className="w-full max-w-[1440px]">
            <span className="bg-primary/10 text-primary font-bold text-sm rounded-[100px] px-6 py-3 tracking-[2px]">
              SERVIÇOS
            </span>
            <div className="flex flex-col gap-4 mt-4 lg:flex-row lg:mt-6">
              <h1 className="text-2xl font-bold text-black-500 w-full max-w-80 leading-[38px] lg:w-1/2 lg:max-w-full lg:text-[40px]">
                Precisa de ajuda em casa?
              </h1>
              <p className="text-black-150 text-base border-l-[2px] border-primary pl-3 lg:w-1/2 lg:max-w-full lg:text-xl">
                O LarPró conecta você aos melhores prestadores de serviços para
                tudo o que você precisa:
              </p>
            </div>

            <div className="hidden lg:flex gap-4 mt-12">
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
          </div>
        </section>

        <section className="w-full mt-10">
          <BulletsCarousel />
        </section>

        <section
          className="w-full flex justify-center px-6 lg:px-0 pt-10 bg-benefits bg-cover bg-center bg-no-repeat"
          id="beneficios"
        >
          <div className="w-full max-w-[1440px] lg:flex lg:flex-col lg:items-center">
            <h1 className="text-xl font-semibold text-black-500 w-full max-w-80 leading-8 lg:text-center lg:text-[32px] lg:max-w-full">
              Tudo em um só lugar, fácil, rápido e seguro.
            </h1>
            <p className="text-black-150 text-base mt-3 lg:text-center lg:text-xl lg:max-w-[900px]">
              Com o LarPro, você acessa uma rede confiável de prestadores
              avaliados por outros clientes e pode escolher pela sua localidade.
            </p>

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
                          <ChatCircleDots size={20} className="text-primary" />
                        </span>
                        <span className="border border-primary border-dashed h-16" />
                      </div>
                      <div>
                        <h2 className="text-black-500 text-xl font-semibold lg:text-2xl">
                          Chat em Tempo Real
                        </h2>
                        <p className="text-black-150 text-base lg:text-xl">
                          Fale diretamente com os prestadores para tirar dúvidas
                          e negociar detalhes.
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
                          Escolha prestadores com base nas avaliações de outros
                          usuários.
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
          </div>
        </section>

        <section className="w-full flex justify-center px-6 lg:px-0 pt-10">
          <div className="w-full max-w-[1440px] flex flex-col justify-center items-center">
            <span className="bg-primary/10 text-primary font-bold text-sm rounded-[100px] px-6 py-3 tracking-[2px]">
              PARA PRESTADORES
            </span>

            <div className="w-full flex flex-col mt-6 items-center">
              {" "}
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
              <div className="hidden lg:flex lg:flex-row w-full mt-24">
                <div className="w-full max-w-96 flex flex-col justify-between py-32">
                  <CardIcon
                    Icon={Star}
                    title="Avaliações que valorizam o seu trabalho"
                    description="Destaque sua qualidade com avaliações reais que atraem mais
                    oportunidades de negócios."
                  />

                  <p className="border-l-2 border-primary pl-4 text-black-500 text-2xl font-bold">
                    Baixe o LarPro e o LarPro Prestadores agora mesmo e faça
                    parte dessa revolução no mercado de serviços!
                  </p>
                </div>

                <div className="w-full">
                  <Image
                    src={phoneCirclePink}
                    className="w-full"
                    alt="LarPro - Baixe o LarPro"
                  />
                </div>

                <div className="w-full max-w-96 flex flex-col justify-between py-32">
                  <CardIcon
                    Icon={ThumbsUp}
                    title="Mais visibilidade e demanda"
                    description="Amplie sua presença no mercado e conquiste novos clientes que precisam dos seus serviços."
                  />

                  <CardIcon
                    Icon={ChatTeardropText}
                    title="Comunicação direta com clientes via chat"
                    description="Tire dúvidas e negocie detalhes facilmente com seus clientes em tempo real."
                  />
                </div>
              </div>
              <div className="flex lg:hidden flex-col w-full gap-8 mt-8">
                <CardIcon
                  Icon={Star}
                  title="Avaliações que valorizam o seu trabalho"
                  description="Destaque sua qualidade com avaliações reais que atraem mais
                    oportunidades de negócios."
                />

                <CardIcon
                  Icon={ThumbsUp}
                  title="Mais visibilidade e demanda"
                  description="Amplie sua presença no mercado e conquiste novos clientes que precisam dos seus serviços."
                />

                <CardIcon
                  Icon={ChatTeardropText}
                  title="Comunicação direta com clientes via chat"
                  description="Tire dúvidas e negocie detalhes facilmente com seus clientes em tempo real."
                />

                <p className="border-l-2 border-primary pl-4 text-black-500 text-xl font-bold">
                  Baixe o LarPro e o LarPro Prestadores agora mesmo e faça parte
                  dessa revolução no mercado de serviços!
                </p>

                <Image
                  src={phoneCirclePink}
                  className="w-full"
                  alt="LarPro - Baixe o LarPro"
                />
              </div>
            </div>

            <div></div>
          </div>
        </section>

        <section
          className="w-full flex flex-col justify-center lg:items-center px-6 lg:px-0 pt-10 lg:mt-40"
          id="faqs"
        >
          <div className="w-full max-w-[1440px] flex flex-col lg:flex-row lg:items-center justify-center items-center">
            <div className="w-full max-w-desk flex flex-col lg:flex-row lg:items-center lg:gap-20">
              <div className="w-full flex flex-col items-center lg:items-start">
                <span className="bg-primary/10 text-primary font-bold text-sm rounded-[100px] px-6 py-3 tracking-[2px]">
                  FAQS
                </span>

                <div className="w-full flex flex-col mt-6 items-center lg:items-start">
                  <h1 className="text-2xl font-bold text-black-500 text-center lg:text-[44px]">
                    Dúvidas Frequentes
                  </h1>
                </div>

                <div className="w-full mt-8">
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full flex flex-col gap-4"
                  >
                    <AccordionItem
                      value="item-1"
                      onClick={() => setFaqSelected(1)}
                    >
                      <AccordionTrigger className="text-left">
                        O LarPro é realmente gratuito?
                      </AccordionTrigger>
                      <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                      value="item-2"
                      onClick={() => setFaqSelected(2)}
                    >
                      <AccordionTrigger className="text-left">
                        Como posso encontrar prestadores perto de mim?
                      </AccordionTrigger>
                      <AccordionContent>
                        Yes. It comes with default styles that matches the other
                        components&apos; aesthetic.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                      value="item-3"
                      onClick={() => setFaqSelected(3)}
                    >
                      <AccordionTrigger className="text-left">
                        Como faço para avaliar um prestador de serviço?
                      </AccordionTrigger>
                      <AccordionContent>
                        Yes. Animated by default, but you can disable it if you
                        prefer.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                      value="item-4"
                      onClick={() => setFaqSelected(4)}
                    >
                      <AccordionTrigger className="text-left">
                        Preciso de uma ferramenta específica para usar o chat em
                        tempo real?
                      </AccordionTrigger>
                      <AccordionContent>
                        Yes. Animated by default, but you can disable it if you
                        prefer.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                      value="item-5"
                      onClick={() => setFaqSelected(5)}
                    >
                      <AccordionTrigger className="text-left">
                        Sou prestador. Como os clientes me encontram?
                      </AccordionTrigger>
                      <AccordionContent>
                        Yes. Animated by default, but you can disable it if you
                        prefer.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>

              <div className="w-full">
                <Image
                  src={faqImages[faqSelected]}
                  alt="LarPro - Baixe o LarPro"
                  className="w-full "
                />
              </div>
            </div>
          </div>

          <div className="w-full max-w-desk mt-8 lg:mt-12">
            <h1 className="text-black-500 text-2xl font-bold lg:text-[32px]">
              Tem mais dúvidas?
            </h1>
            <p className="text-base text-black-150 lg:text-xl">
              Entre em contato pelo suporte do app! Estamos prontos para ajudar.
            </p>
          </div>
        </section>

        <section className="hidden lg:flex justify-center mt-44">
          <div className="w-full max-w-[1440px] h-[445px] bg-cta rounded-[40px] flex items-center justify-between px-20">
            <div className="w-full max-w-[674px]">
              <h1 className="font-bold text-white text-4xl">
                Baixe o LarPro e o LarPro Prestadores
              </h1>
              <p className="text-white text-base mt-3">
                Disponível para Android e iOS. Baixe agora e descubra como é
                fácil resolver suas necessidades do dia a dia com apenas alguns
                cliques.
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
              alt="Iklaim"
              className="w-[531px] h-[585px] mt-[-140px]"
              src={phone}
            />
          </div>
        </section>

        <section className="flex lg:hidden justify-center mt-14 mx-7">
          <div className="w-full bg-primary rounded-[40px] flex flex-col items-center justify-center px-8 pt-9">
            <div className="w-full max-w-[674px]">
              <h1 className="font-bold text-white text-2xl mt-4">
                Baixe o LarPro e o LarPro Prestadores
              </h1>
              <p className="text-white text-sm mt-3">
                Disponível para Android e iOS. Baixe agora e descubra como é
                fácil resolver suas necessidades do dia a dia com apenas alguns
                cliques.
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
              alt="Iklaim"
              className="w-[306px] h-[379px] mt-[72px]"
              src={phone}
            />
          </div>
        </section>
      </main>

      <footer className="w-full px-6 py-14 mt-14 lg:flex lg:flex-col lg:items-center">
        <div className="w-full max-w-desk flex flex-col lg:items-center">
          <div className="lg:w-full lg:flex lg:justify-between">
            <div className="flex flex-col lg:max-w-[272px]">
              <Image src={logo} alt="LarPró" className="w-[70px] h-[90px]" />
              <p className="text-black-150 text-xl">
                Soluções para seu dia a dia, a um toque!
              </p>
            </div>

            <div className="lg:flex lg:flex-col lg:items-center">
              <ul className="flex flex-col gap-6 text-xl my-8 lg:flex-row">
                <li className=" text-black-500 hover:text-primary">Home</li>
                <li className=" text-black-500 hover:text-primary">Serviços</li>
                <li className=" text-black-500 hover:text-primary">
                  Benefícios
                </li>
                <li className=" text-black-500 hover:text-primary">
                  Dúvidas Frequentes
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
