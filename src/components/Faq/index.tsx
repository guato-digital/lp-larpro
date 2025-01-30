"use client";

import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import faq0 from "@/assets/man-phone.png";
import faq1 from "@/assets/faq/1.png";
import faq2 from "@/assets/faq/2.png";
import faq3 from "@/assets/faq/3.png";
import faq4 from "@/assets/faq/4.png";
import faq5 from "@/assets/faq/5.png";
import Image from "next/image";

export function Faq() {
  const [faqSelected, setFaqSelected] = useState(0);

  const faqImages = [faq0, faq1, faq2, faq3, faq4, faq5];

  return (
    <div className="w-full max-w-screen-xl flex flex-col lg:flex-row lg:items-center justify-center items-center">
      <div className="w-full max-w-screen-xl flex flex-col lg:flex-row lg:items-center lg:gap-20">
        <div className="w-full flex flex-col items-center lg:items-start">
          <span className="bg-primary/10 text-primary font-bold text-sm rounded-[100px] px-6 py-3 tracking-[2px]">
            FAQS
          </span>

          <div className="w-full flex flex-col mt-6 items-center lg:items-start">
            <h1 className="text-xl font-bold text-black-500 text-center lg:text-[44px]">
              Dúvidas Frequentes
            </h1>
          </div>

          <div className="w-full mt-8">
            <Accordion
              type="single"
              collapsible
              className="w-full flex flex-col gap-4"
            >
              <AccordionItem value="item-1" onClick={() => setFaqSelected(1)}>
                <AccordionTrigger className="text-left font-semibold">
                  O LarPro é realmente gratuito?
                </AccordionTrigger>
                <AccordionContent>
                Sim, nosso aplicativo é 100% gratuito! Tanto clientes quanto prestadores de serviços podem se cadastrar sem custos, criar seus perfis e começar a usar a plataforma imediatamente. Não cobramos taxas para que você encontre profissionais qualificados, nem para que os prestadores divulguem seus serviços
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" onClick={() => setFaqSelected(2)}>
                <AccordionTrigger className="text-left font-semibold">
                  Como posso encontrar prestadores perto de mim?
                </AccordionTrigger>
                <AccordionContent>
                É simples! No app LarPro, você pode buscar prestadores pela sua localidade, garantindo praticidade e agilidade no atendimento.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" onClick={() => setFaqSelected(3)}>
                <AccordionTrigger className="text-left font-semibold">
                  Como faço para avaliar um prestador de serviço?
                </AccordionTrigger>
                <AccordionContent>
                Após o serviço concluído, você poderá deixar uma avaliação, ajudando outros usuários e reconhecendo o bom trabalho do prestador.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" onClick={() => setFaqSelected(4)}>
                <AccordionTrigger className="text-left font-semibold">
                  Preciso de uma ferramenta específica para usar o chat em tempo
                  real?
                </AccordionTrigger>
                <AccordionContent>
                  Não, o chat em tempo real está integrado ao aplicativo. Basta abrir o LarPro, selecionar o serviço desejado e começar a conversa diretamente com o prestador.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" onClick={() => setFaqSelected(5)}>
                <AccordionTrigger className="text-left font-semibold">
                  Sou prestador. Como os clientes me encontram?
                </AccordionTrigger>
                <AccordionContent>
                Ao se cadastrar no LarPro Prestadores, seu perfil estará visível para todos os clientes da sua região. É uma ótima maneira de conseguir mais visibilidade e aumentar sua clientela.
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
  );
}
