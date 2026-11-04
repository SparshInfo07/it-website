import React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import RollingText from "@/components/Atoms/RollingText";

export const buttonVariants = cva(
  "group inline-flex items-center justify-center gap-1.5 rounded-full font-semibold transition-all duration-300 active:scale-95 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 disabled:pointer-events-none disabled:opacity-50 text-decoration-none",
  {
    variants: {
      variant: {
        primary:
          "btn-primary bg-white text-[#061826] border-0 hover:bg-[#0D9488] hover:text-white shadow-none",
        secondary:
          "btn-secondary bg-transparent text-white border border-white/80 hover:bg-[#0D9488] hover:border-[#0D9488] hover:text-white shadow-none",
      },
      size: {
        default: "px-[16px] py-[14px] text-[15px] leading-[1.25]",
        sm: "px-3.5 py-2 text-xs",
        lg: "px-6 py-4 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  rollingText?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export default function Button({
  href,
  variant = "primary",
  size = "default",
  rollingText = true,
  icon,
  children,
  className,
  target,
  rel,
  type = "button",
  disabled,
  onClick,
  ...props
}: ButtonProps) {
  const content = (
    <>
      {typeof children === "string" && rollingText ? (
        <RollingText text={children} />
      ) : (
        children
      )}
      {icon}
    </>
  );

  const combinedClassName = cn(buttonVariants({ variant, size, className }));

  if (href) {
    return (
      <Link
        href={href}
        className={combinedClassName}
        target={target}
        rel={rel}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        {...props}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={combinedClassName}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}
