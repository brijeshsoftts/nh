import { BedDouble } from "lucide-react";

export function Logo() {
  return (
    <div className="group flex cursor-pointer items-center gap-2.5">
      <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm transition-transform duration-200 group-hover:scale-105">
        <BedDouble size={20} strokeWidth={1.8} />
      </div>

      <div className="flex flex-col leading-none">
        <span className="text-md sm: font-semibold tracking-[-0.02em] text-foreground">
          Nivara
        </span>

        <span className="mt-1 text-[9px] font-medium tracking-[0.22em] text-muted-foreground uppercase">
          Stay • Book • Relax
        </span>
      </div>
    </div>
  );
}
