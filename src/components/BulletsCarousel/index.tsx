"use client";

import type React from "react";

import { useState } from "react";

import { CardIcon } from "@/components/CardIcon";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  Confetti,
  GearSix,
  Lightning,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr";

export const BulletsCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (api: CarouselApi) => {
    const index = api!.selectedScrollSnap();
    setActiveIndex(index);
  };

  const data = [
    {
      icon: GearSix,
      title: "Consertos e reparos",
      description:
        "Soluções rápidas e profissionais para consertar e manter tudo funcionando perfeitamente na sua casa ou empresa.",
    },
    {
      icon: Confetti,
      title: "Decoração e artigos para festas",
      description:
        "Transforme qualquer ocasião com especialistas em decoração e acessórios para eventos inesquecíveis.",
    },
    {
      icon: Lightning,
      title: "Pintura, elétrica, hidráulica e mecânica",
      description:
        "Serviços técnicos especializados para garantir segurança, funcionalidade e beleza ao seu espaço.",
    },
    {
      icon: Sparkle,
      title: "Limpeza, estética e muito mais",
      description:
        "Encontre serviços que cuidam do seu ambiente e do seu bem-estar com qualidade e confiança.",
    },
  ];

  return (
    <Carousel
      className="w-full lg:hidden block"
      setApi={(api) => {
        api?.on("select", () => {
          handleSlideChange(api);
        });
      }}
    >
      <CarouselContent>
        {data.map((item, index) => (
          <CarouselItem
            className={`flex justify-center ${
              index !== activeIndex && "ml-[-75px]"
            }`}
            key={index}
          >
            <CardIcon
              description={item.description}
              Icon={item.icon}
              title={item.title}
              slide
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
