"use client";

import { List } from "@phosphor-icons/react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { useEffect, useState } from "react";
import { X } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export function MobileNavbar() {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger onClick={() => setIsOpened(!isOpened)}>
        <List size={24} className="text-white lg:hidden" />
      </SheetTrigger>
      <SheetContent
        className="p-0 w-full flex flex-col max-w-64 bg-primary border-none"
        side="right"
      >
        <div className="h-full flex flex-col items-end">
          <SheetTrigger
            onClick={() => {
              setIsOpened(!isOpened);
            }}
          >
            <div className="w-full flex justify-end pt-6 pr-7">
              <X color="#fff" size={24} />
            </div>
          </SheetTrigger>

          <ul className="flex flex-col items-end gap-6 text-lg px-10 mt-14">
            <li className="text-white hover:text-zinc-200 font-semibold">
              <SheetClose asChild>
                <Link href="#home">Home</Link>
              </SheetClose>
            </li>
            <li className="text-white hover:text-zinc-200 font-semibold">
              <SheetClose asChild>
                <Link href="#servicos">Serviços</Link>
              </SheetClose>
            </li>
            <li className="text-white hover:text-zinc-200 font-semibold">
              <SheetClose asChild>
                <Link href="#beneficios">Benefícios</Link>
              </SheetClose>
            </li>
            <li className="text-white hover:text-zinc-200 font-semibold">
              <SheetClose asChild>
                <Link href="#faqs">FAQs</Link>
              </SheetClose>
            </li>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}
