// src/components/input/input.variants.ts
import { cva } from "class-variance-authority";

export const inputVariants = cva(
  "ai4ui-input w-full flex h-10 rounded-md border-2 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        outline: "bg-transparent",
        underline: "!rounded-none border-transparent bg-transparent border-b-2 focus-visible:ring-0 focus-visible:ring-offset-0",
        ghost: "border-transparent bg-transparent",
        filled: "border-transparent",
      },
      color: {
        default: "text-input placeholder:text-input/75",
        primary: "text-primary placeholder:text-primary/75",
        secondary: "text-secondary placeholder:text-secondary/75",
        warning: "text-warning placeholder:text-warning/75",
        destructive: "text-destructive placeholder:text-destructive/75",
      },
      size: {
        sm: "h-9 px-3 text-xs",
        md: "h-10 px-3 py-2",
        lg: "h-11 px-4 text-base",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
      error: {
        true: "",
        false: "",
      }
    },
    compoundVariants: [
      // Outline variants
      {
        variant: "outline",
        color: "default",
        error: false,
        className: "border-input/50 focus-visible:border-input",
      },
      {
        variant: "outline",
        color: "primary",
        error: false,
        className: "border-primary/50 focus-visible:border-primary",
      },
      {
        variant: "outline",
        color: "secondary",
        error: false,
        className: "border-secondary/50 focus-visible:border-secondary",
      },
      {
        variant: "outline",
        color: "warning",
        error: false,
        className: "border-warning/50 focus-visible:border-warning",
      },
      {
        variant: "outline",
        color: "destructive",
        error: false,
        className: "border-destructive/50 focus-visible:border-destructive",
      },

      // Underline variants
      {
        variant: "underline",
        color: "default",
        error: false,
        className: "border-b-input/30 focus-visible:border-b-input/70",
      },
      {
        variant: "underline",
        color: "primary",
        error: false,
        className: "border-b-primary/30 focus-visible:border-b-primary/70",
      },
      {
        variant: "underline",
        color: "secondary",
        error: false,
        className: "border-b-secondary/30 focus-visible:border-b-secondary/70",
      },
      {
        variant: "underline",
        color: "warning",
        error: false,
        className: "border-b-warning/30 focus-visible:border-b-warning/70",
      },
      {
        variant: "underline",
        color: "destructive",
        error: false,
        className: "border-b-destructive/30 focus-visible:border-b-destructive/70",
      },

      // Ghost variants
      {
        variant: "ghost",
        color: "default",
        error: false,
        className: "hover:bg-input/10 focus-visible:bg-input/20",
      },
      {
        variant: "ghost",
        color: "primary",
        error: false,
        className: "hover:bg-primary/10 focus-visible:bg-primary/20",
      },
      {
        variant: "ghost",
        color: "secondary",
        error: false,
        className: "hover:bg-secondary/10 focus-visible:bg-secondary/20",
      },
      {
        variant: "ghost",
        color: "warning",
        error: false,
        className: "hover:bg-warning/10 focus-visible:bg-warning/20",
      },
      {
        variant: "ghost",
        color: "destructive",
        error: false,
        className: "hover:bg-destructive/10 focus-visible:bg-destructive/20",
      },

      // Filled variants
      {
        variant: "filled",
        color: "default",
        error: false,
        className: "bg-input/10 focus-visible:bg-input/20",
      },
      {
        variant: "filled",
        color: "primary",
        error: false,
        className: "bg-primary/10 focus-visible:bg-primary/20",
      },
      {
        variant: "filled",
        color: "secondary",
        error: false,
        className: "bg-secondary/10 focus-visible:bg-secondary/20",
      },
      {
        variant: "filled",
        color: "warning",
        error: false,
        className: "bg-warning/10 focus-visible:bg-warning/20",
      },
      {
        variant: "filled",
        color: "destructive",
        error: false,
        className: "bg-destructive/10 focus-visible:bg-destructive/20",
      },

      // Error states for each variant
      {
        variant: "outline",
        error: true,
        className: "border-destructive focus-visible:border-destructive",
      },
      {
        variant: "underline",
        error: true,
        className: "border-b-destructive focus-visible:border-b-destructive",
      },
      {
        variant: "ghost",
        error: true,
        className: "hover:bg-destructive/10 focus-visible:bg-destructive/20",
      },
      {
        variant: "filled",
        error: true,
        className: "bg-destructive/10 focus-visible:bg-destructive/20",
      },
    ],
    defaultVariants: {
      variant: "filled",
      color: "default",
      size: "md",
      radius: "md",
      error: false,
    },
  }
);