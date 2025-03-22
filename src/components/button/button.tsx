import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "ai4ui-button relative overflow-hidden inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:translate-y-px active:shadow-inner disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        solid: "",
        outline: "border-2",
        ghost: "",
        soft: "",
        link: "underline-offset-4 hover:underline active:shadow-none active:transform-none",
      },
      color: {
        primary: "",
        secondary: "",
        warning: "",
        destructive: "",
      },
      size: {
        sm: "h-9 px-4 rounded-md text-xs",
        md: "h-10 px-5 py-2",
        lg: "h-11 px-8 rounded-md text-base",
      },
    },
    compoundVariants: [
      // Solid variants
      {
        variant: "solid",
        color: "primary",
        className: "bg-primary text-primary-foreground hover:bg-primary/80",
      },
      {
        variant: "solid",
        color: "secondary",
        className: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      },
      {
        variant: "solid",
        color: "warning",
        className: "bg-warning text-warning-foreground hover:bg-warning/80",
      },
      {
        variant: "solid",
        color: "destructive",
        className: "bg-destructive text-destructive-foreground hover:bg-destructive/80",
      },

      // Outline variants
      {
        variant: "outline",
        color: "primary",
        className: "border-primary/50 text-primary bg-transparent hover:bg-primary/20",
      },
      {
        variant: "outline",
        color: "secondary",
        className: "border-secondary/50 text-secondary bg-transparent hover:bg-secondary/20",
      },
      {
        variant: "outline",
        color: "warning",
        className: "border-warning/50 text-warning bg-transparent hover:bg-warning/20",
      },
      {
        variant: "outline",
        color: "destructive",
        className: "border-destructive/50 text-destructive bg-transparent hover:bg-destructive/20",
      },

      // Ghost variants
      {
        variant: "ghost",
        color: "primary",
        className: "text-primary hover:bg-primary/30 bg-transparent",
      },
      {
        variant: "ghost",
        color: "secondary",
        className: "text-secondary hover:bg-secondary/30 bg-transparent",
      },
      {
        variant: "ghost",
        color: "warning",
        className: "text-warning hover:bg-warning/30 hover:text-warning-foreground bg-transparent",
      },
      {
        variant: "ghost",
        color: "destructive",
        className: "text-destructive hover:bg-destructive/30 bg-transparent",
      },

      // Soft variants
      {
        variant: "soft",
        color: "primary",
        className: "bg-primary/20 text-primary hover:bg-primary/10",
      },
      {
        variant: "soft",
        color: "secondary",
        className: "bg-secondary/20 text-secondary hover:bg-secondary/10",
      },
      {
        variant: "soft",
        color: "warning",
        className: "bg-warning/20 text-warning hover:bg-warning/10",
      },
      {
        variant: "soft",
        color: "destructive",
        className: "bg-destructive/20 text-destructive hover:bg-destructive/10",
      },

      // Link variants
      {
        variant: "link",
        color: "primary",
        className: "text-primary bg-transparent",
      },
      {
        variant: "link",
        color: "secondary",
        className: "text-secondary bg-transparent",
      },
      {
        variant: "link",
        color: "warning",
        className: "text-warning bg-transparent",
      },
      {
        variant: "link",
        color: "destructive",
        className: "text-destructive bg-transparent",
      },
    ],
    defaultVariants: {
      variant: "solid",
      color: "primary",
      size: "md",
    },
  }
);

// Interface for the classNames prop
export interface ButtonClassNames {
  root?: string;
  leftSection?: string;
  rightSection?: string;
  content?: string;
  ripple?: string;
  spinner?: string;
}

// Using Omit to handle the color attribute conflict
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">, VariantProps<typeof buttonVariants> {
  classNames?: ButtonClassNames;
  isLoading?: boolean;
  spinnerPosition?: "left" | "right";
  isIconOnly?: boolean;
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      classNames,
      variant,
      color,
      size,
      leftSection,
      rightSection,
      children,
      isLoading = false,
      spinnerPosition = "left",
      isIconOnly = false,
      type = "button",
      "aria-label": ariaLabel,
      ...props
    },
    ref
  ) => {
    const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (variant === "link") return;

      // Get the button's bounding rectangle
      const rect = e.currentTarget.getBoundingClientRect();

      // Calculate the click position relative to the button's top-left corner
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Create a <span> for the ripple
      const ripple = document.createElement("span");
      ripple.className = cn("bg-current ripple", classNames?.ripple); // Apply custom ripple class if provided
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";

      // Append it to the button itself
      e.currentTarget.appendChild(ripple);

      // Remove it after the animation ends (or a fixed time)
      setTimeout(() => {
        ripple.remove();
      }, 300); // 300ms matches our CSS animation below
    };

    return (
      <button
        ref={ref}
        type={type}
        className={cn(buttonVariants({ variant, color, size }), classNames?.root, { "aspect-square px-0": isIconOnly }, className)}
        onMouseDown={handleMouseDown}
        {...(isIconOnly && ariaLabel ? { "aria-label": ariaLabel, title: ariaLabel } : {})}
        {...props}>
        {leftSection && <span className={cn("mr-2", classNames?.leftSection)}>{leftSection}</span>}
        {isLoading && spinnerPosition === "left" && <span className={cn("spinner text-base mr-2", classNames?.spinner)}></span>}
        {children && <span className={cn(classNames?.content)}>{children}</span>}
        {isLoading && spinnerPosition === "right" && <span className={cn("spinner text-base ml-2", classNames?.spinner)}></span>}
        {rightSection && <span className={cn("ml-2", classNames?.rightSection)}>{rightSection}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
