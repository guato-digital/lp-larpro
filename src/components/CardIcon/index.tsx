import { cn } from "@/lib/utils";
import { type Icon as IconType } from "@phosphor-icons/react";

export interface CardIconProps {
  Icon: IconType;
  title: string;
  description: string;
  slide?: boolean;
}

export function CardIcon({ Icon, title, description, slide }: CardIconProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-xl border border-[#e1e1e1] p-5 flex flex-col",
        slide && "w-[352px]"
      )}
    >
      <span className="w-10 h-10 rounded-full bg-[#6659FE14] flex items-center justify-center">
        <Icon size={20} className="text-primary" />
      </span>
      <div className="flex flex-col gap-2 mt-4">
        <h2 className="text-black-400 font-bold text-base">{title}</h2>
        <p className="text-black-150 text-sm">{description}</p>
      </div>
    </div>
  );
}
