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
              <AccordionItem value="item-1" onClick={() => setFaqSelected(1)}>
                <AccordionTrigger className="text-left font-semibold">
                  O LarPro é realmente gratuito?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" onClick={() => setFaqSelected(2)}>
                <AccordionTrigger className="text-left font-semibold">
                  Como posso encontrar prestadores perto de mim?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" onClick={() => setFaqSelected(3)}>
                <AccordionTrigger className="text-left font-semibold">
                  Como faço para avaliar um prestador de serviço?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. Animated by default, but you can disable it if you
                  prefer.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" onClick={() => setFaqSelected(4)}>
                <AccordionTrigger className="text-left font-semibold">
                  Preciso de uma ferramenta específica para usar o chat em tempo
                  real?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. Animated by default, but you can disable it if you
                  prefer.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" onClick={() => setFaqSelected(5)}>
                <AccordionTrigger className="text-left font-semibold">
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
  );
}
