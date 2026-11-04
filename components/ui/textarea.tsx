import type { ComponentProps } from "react";
import { cn } from "cn";

function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input placeholder:text-muted-foreground dark:bg-input/30 flex min-h-20 w-full rounded-lg border bg-white px-3 py-2 text-sm shadow-xs outline-none transition-[color,box-shadow] aria-invalid:border-red-500 aria-invalid:ring-2 aria-invalid:ring-red-500/15 focus-visible:border-[#0D9488] focus-visible:ring-2 focus-visible:ring-[#0D9488]/15 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
