import Image from "next/image";
import {
  ChatCircleDots,
  CheckCircle,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  NavigationArrow,
  Star,
} from "@phosphor-icons/react/dist/ssr";

import { AppStoreLogo } from "@/components/AppStoreLogo";
import { PlayStoreLogo } from "@/components/PlayStoreLogo";
import { CardIcon } from "@/components/CardIcon";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import phoneImage from "@/assets/phone-mockup.png";
import phoneCircle from "@/assets/phone-circle.png";
import phoneCirclePink from "@/assets/phone-circle-pink.png";
import manPhone from "@/assets/man-phone.png";
import phone from "@/assets/phone.png";
import logo from "@/assets/logo-purple.png";
import { BulletsCarousel } from "@/components/BulletsCarousel";

export default function Home() {
  return (
    <>
      <main className="pt-20 lg:pt-32">
        <section className="px-6 lg:px-0 pt-10">
          <div>
            <span className="bg-primary/10 text-primary font-bold text-sm rounded-[100px] px-6 py-3 tracking-[2px]">
              LARPRÓ
            </span>
            <div className="flex flex-col gap-4 mt-4">
              <h1 className="text-[32px] font-bold text-black-500 w-full max-w-80 leading-[38px]">
                Soluções para o seu dia a dia,{" "}
                <span className="text-primary">a um toque</span>!
              </h1>
              <p className="text-black-150 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>
              <div className="mt-4 w-full flex justify-between gap-5">
                <button className="w-full max-w-48 py-2 px-4 bg-black-500 rounded-lg flex gap-3 items-center">
                  <PlayStoreLogo />
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
          <div className="w-full mt-8 lg:mt-0">
            <Image src={phoneImage} alt="LarPró - Celular" />
          </div>
        </section>

        <div className="w-full h-14 bg-black-500"></div>

        <section className="w-full flex justify-center px-6 lg:px-0 pt-10">
          <div className="w-full max-w-[1440px]">
            <span className="bg-primary/10 text-primary font-bold text-sm rounded-[100px] px-6 py-3 tracking-[2px]">
              SERVIÇOS
            </span>
            <div className="flex flex-col gap-4 mt-4">
              <h1 className="text-2xl font-bold text-black-500 w-full max-w-80 leading-[38px]">
                Precisa de ajuda em casa?
              </h1>
              <p className="text-black-150 text-base border-l-[2px] border-primary pl-3">
                O LarPró conecta você aos melhores prestadores de serviços para
                tudo o que você precisa:
              </p>
            </div>
          </div>
        </section>

        <section className="w-full mt-10">
          <BulletsCarousel />
        </section>

        <section className="w-full flex justify-center px-6 lg:px-0 pt-10">
          <div className="w-full max-w-[1440px]">
            <h1 className="text-xl font-bold text-black-500 w-full max-w-80 leading-8">
              Tudo em um só lugar, fácil, rápido e seguro.
            </h1>
            <p className="text-black-150 text-base mt-3">
              Com o LarPro, você acessa uma rede confiável de prestadores
              avaliados por outros clientes e pode escolher pela sua localidade.
            </p>

            <div className="w-full flex flex-col gap-4 mt-14">
              <div className="w-full">
                <span className="bg-primary/10 text-primary font-bold text-sm rounded-[100px] px-6 py-3 tracking-[2px]">
                  BENEFÍCIOS
                </span>
                <h1 className="text-2xl font-bold text-black-500 w-full max-w-80 leading-8 mt-6">
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
                        <h2 className="text-black-500 text-xl font-bold">
                          Facilidade e Praticidade
                        </h2>
                        <p className="text-black-150 text-base">
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
                        <h2 className="text-black-500 text-xl font-bold">
                          Chat em Tempo Real
                        </h2>
                        <p className="text-black-150 text-base">
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
                        <h2 className="text-black-500 text-xl font-bold">
                          Escolha de Localidade
                        </h2>
                        <p className="text-black-150 text-base">
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
                        <h2 className="text-black-500 text-xl font-bold">
                          Avaliações Reais
                        </h2>
                        <p className="text-black-150 text-base">
                          Escolha prestadores com base nas avaliações de outros
                          usuários.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full">
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
              <h1 className="text-2xl font-bold text-black-500 text-center">
                LarPro Prestadores
              </h1>
              <p className="text-black-150 text-center text-base mt-4">
                Se você é um prestador de serviços, o LarPro Prestadores é a
                plataforma ideal para impulsionar seu negócio! <br />
                <strong>
                  Cadastre-se gratuitamente, ofereça seus serviços e conquiste
                  clientes perto de você.
                </strong>
              </p>
              <div className="flex flex-col w-full gap-8 mt-8">
                <CardIcon
                  Icon={Star}
                  title="Avaliações que valorizam o seu trabalho"
                  description="Destaque sua qualidade com avaliações reais que atraem mais
                    oportunidades de negócios."
                />

                <CardIcon
                  Icon={Star}
                  title="Mais visibilidade e demanda"
                  description="Amplie sua presença no mercado e conquiste novos clientes que precisam dos seus serviços."
                />

                <CardIcon
                  Icon={Star}
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

        <section className="w-full flex flex-col justify-center px-6 lg:px-0 pt-10">
          <div className="w-full max-w-[1440px] flex flex-col justify-center items-center">
            <span className="bg-primary/10 text-primary font-bold text-sm rounded-[100px] px-6 py-3 tracking-[2px]">
              FAQS
            </span>

            <div className="w-full flex flex-col mt-6 items-center">
              <h1 className="text-2xl font-bold text-black-500 text-center">
                Dúvidas Frequentes
              </h1>
            </div>

            <div className="w-full mt-8">
              <Accordion
                type="single"
                collapsible
                className="w-full flex flex-col gap-4"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    O LarPro é realmente gratuito?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    Como posso encontrar prestadores perto de mim?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    Como faço para avaliar um prestador de serviço?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. Animated by default, but you can disable it if you
                    prefer.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    Preciso de uma ferramenta específica para usar o chat em
                    tempo real?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. Animated by default, but you can disable it if you
                    prefer.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
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

            <div className="w-full">
              <Image
                src={manPhone}
                alt="LarPro - Baixe o LarPro"
                className="w-full"
              />
            </div>
          </div>

          <div className="w-full max-w-desk mt-8">
            <h1 className="text-black-500 text-2xl font-bold">
              Tem mais dúvidas
            </h1>
            <p className="text-base text-black-150">
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
                    <PlayStoreLogo />
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
                    <PlayStoreLogo />
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
                    <PlayStoreLogo />
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
                    <PlayStoreLogo />
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

      <footer className="w-full px-6 py-14 mt-14">
        <div className="w-full max-w-desk flex flex-col">
          <Image src={logo} alt="LarPró" className="w-[70px] h-[90px]" />
          <p className="text-black-150 text-xl">
            Soluções para seu dia a dia, a um toque!
          </p>

          <ul className="flex flex-col gap-6 text-xl my-8">
            <li className=" text-black-500 hover:text-primary">Home</li>
            <li className=" text-black-500 hover:text-primary">Serviços</li>
            <li className=" text-black-500 hover:text-primary">Benefícios</li>
            <li className=" text-black-500 hover:text-primary">
              Dúvidas Frequentes
            </li>
          </ul>

          <div className="flex gap-4">
            <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <InstagramLogo className="text-white" size={24} />
            </span>
            <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <FacebookLogo className="text-white" size={24} />
            </span>
            <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <LinkedinLogo className="text-white" size={24} />
            </span>
          </div>

          <div className="w-full max-w-44 mt-6 flex flex-col gap-5">
            <button className="w-full  py-2 px-4 bg-black-500 rounded-lg flex gap-3 items-center">
              <PlayStoreLogo />
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

          <div className="w-full flex-col">
            <p className="text-black-500 text-sm">
              2024 LarPró. Todos os direitos reservados.
            </p>
            <ul className="flex gap-4 underline mt-6">
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
