import type { Header } from "@/types/shared.types";

export function Header({ eyebrow, title, description, rightContent }: Header) {
  return (
    <section className="flex flex-col gap-2">
      {eyebrow && (
        <div className="flex items-center gap-2">
          <p className="text-[11px] font-semibold tracking-[0.12em] text-primary uppercase">
            {eyebrow}
          </p>
        </div>
      )}

      <div className="flex flex-col gap-y-4 sm:flex-row sm:justify-between">
        <div className="min-w-0">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {title}
          </h1>

          {description && (
            <p className="mt-1 max-w-2xl text-sm leading-6 text-muted-foreground">
              {description}
            </p>
          )}
        </div>

        {rightContent && (
          <div className="flex shrink-0 items-center gap-2">{rightContent}</div>
        )}
      </div>
    </section>
  );
}
