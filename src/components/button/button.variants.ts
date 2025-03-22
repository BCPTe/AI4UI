import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "ai4ui-button relative overflow-hidden inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:translate-y-px active:shadow-inner disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        solid: "",
        outline: "border-2",
        ghost: "",
        soft: "",
        link: "underline-offset-4 hover:underline focus-visible:underline focus-visible:ring-0 focus-visible:ring-offset-0 active:shadow-none active:transform-none",
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
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
    },
    compoundVariants: [
      // Solid variants
      {
        variant: "solid",
        color: "primary",
        className: "bg-primary text-primary-foreground hover:bg-primary/80 focus-visible:ring-primary",
      },
      {
        variant: "solid",
        color: "secondary",
        className: "bg-secondary text-secondary-foreground hover:bg-secondary/80 focus-visible:ring-secondary",
      },
      {
        variant: "solid",
        color: "warning",
        className: "bg-warning text-warning-foreground hover:bg-warning/80 focus-visible:ring-warning",
      },
      {
        variant: "solid",
        color: "destructive",
        className: "bg-destructive text-destructive-foreground hover:bg-destructive/80 focus-visible:ring-destructive",
      },

      // Outline variants
      {
        variant: "outline",
        color: "primary",
        className: "border-primary/50 text-primary bg-transparent hover:bg-primary/20 focus-visible:bg-primary/20 focus-visible:ring-primary",
      },
      {
        variant: "outline",
        color: "secondary",
        className: "border-secondary/50 text-secondary bg-transparent hover:bg-secondary/20 focus-visible:bg-secondary/20 focus-visible:ring-secondary",
      },
      {
        variant: "outline",
        color: "warning",
        className: "border-warning/50 text-warning bg-transparent hover:bg-warning/20 focus-visible:bg-warning/20 focus-visible:ring-warning",
      },
      {
        variant: "outline",
        color: "destructive",
        className: "border-destructive/50 text-destructive bg-transparent hover:bg-destructive/20 focus-visible:bg-destructive/20 focus-visible:ring-destructive",
      },

      // Ghost variants
      {
        variant: "ghost",
        color: "primary",
        className: "text-primary hover:bg-primary/30 focus-visible:bg-primary/30 bg-transparent focus-visible:ring-primary",
      },
      {
        variant: "ghost",
        color: "secondary",
        className: "text-secondary hover:bg-secondary/30 focus-visible:bg-secondary/30 bg-transparent focus-visible:ring-secondary",
      },
      {
        variant: "ghost",
        color: "warning",
        className: "text-warning hover:bg-warning/30 hover:text-warning-foreground focus-visible:bg-warning/30 focus-visible:text-warning-foreground bg-transparent focus-visible:ring-warning",
      },
      {
        variant: "ghost",
        color: "destructive",
        className: "text-destructive hover:bg-destructive/30 focus-visible:bg-destructive/30 bg-transparent focus-visible:ring-destructive",
      },

      // Soft variants
      {
        variant: "soft",
        color: "primary",
        className: "bg-primary/20 text-primary hover:bg-primary/10 focus-visible:ring-primary",
      },
      {
        variant: "soft",
        color: "secondary",
        className: "bg-secondary/20 text-secondary hover:bg-secondary/10 focus-visible:ring-secondary",
      },
      {
        variant: "soft",
        color: "warning",
        className: "bg-warning/20 text-warning hover:bg-warning/10 focus-visible:ring-warning",
      },
      {
        variant: "soft",
        color: "destructive",
        className: "bg-destructive/20 text-destructive hover:bg-destructive/10 focus-visible:ring-destructive",
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
      radius: "md",
    },
  }
);
