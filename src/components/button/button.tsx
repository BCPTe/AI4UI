// button.tsx
import { type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/utils";
import { buttonVariants } from "./button.variants";

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
  // New props
  activeWhenGrouped?: boolean;
  fullWidth?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  withRipple?: boolean;
  leadingIcon?: React.ReactNode; // Alias for leftSection for better API compatibility
  trailingIcon?: React.ReactNode; // Alias for rightSection for better API compatibility
}

/**
 * Button component with various styles and features
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      classNames,
      variant,
      color,
      size,
      radius,
      leftSection,
      rightSection,
      leadingIcon,
      trailingIcon,
      children,
      isLoading = false,
      spinnerPosition = "left",
      isIconOnly = false,
      fullWidth = false,
      withRipple = true,
      href,
      target,
      rel,
      type = "button",
      "aria-label": ariaLabel,
      onClick,
      onMouseDown,
      onKeyDown,
      ...props
    },
    ref
  ) => {
    // Process aliases for better API compatibility
    const finalLeftSection = leftSection || leadingIcon;
    const finalRightSection = rightSection || trailingIcon;

    // Extract ripple creation logic for reuse
    const createRipple = (element: HTMLElement, x: number, y: number) => {
      if (variant === "link" || !withRipple) return;

      const ripple = document.createElement("span");

      // Improved ripple with animation customization
      ripple.className = cn("absolute inset-0 pointer-events-none opacity-30 bg-current rounded-full transform scale-0 animate-ripple", classNames?.ripple);

      // Calculate size to ensure the ripple covers the entire button
      const size = Math.max(element.offsetWidth, element.offsetHeight) * 2;
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x - size / 2}px`;
      ripple.style.top = `${y - size / 2}px`;

      element.appendChild(ripple);

      // Remove ripple after animation ends
      setTimeout(() => ripple.remove(), 600);
    };

    // Handle keyboard accessibility for ripple effect
    const handleInternalKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if ((e.key === "Enter" || e.key === " ") && variant !== "link" && withRipple) {
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();

        // Trigger ripple from the center of the button for keyboard events
        createRipple(button, rect.width / 2, rect.height / 2);
      }

      // Call the external onKeyDown handler if provided
      onKeyDown?.(e);
    };

    const handleInternalMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (variant === "link" || !withRipple) {
        // Still call external handler even if we don't create a ripple
        onMouseDown?.(e);
        return;
      }

      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      createRipple(e.currentTarget, x, y);

      // Call the external onMouseDown handler if provided
      onMouseDown?.(e);
    };

    // Custom click handler with loading state prevention
    const handleInternalClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (isLoading) {
        e.preventDefault();
        return;
      }

      onClick?.(e);
    };

    // Use anchor if href is provided
    const TagName: any = href ? "a" : "button";

    // Determine spinner appearance based on variant
    const spinnerColorClass = variant === "solid" ? "text-current" : `text-${color || "primary"}`;

    return (
      <TagName
        ref={ref}
        href={href}
        target={href ? target : undefined}
        rel={href && target === "_blank" ? "noopener noreferrer" : rel}
        type={!href ? type : undefined}
        className={cn(
          buttonVariants({ variant, color, size, radius }),
          classNames?.root,
          {
            "aspect-square px-0": isIconOnly,
            "w-full": fullWidth,
            "pointer-events-none": isLoading,
            "cursor-wait": isLoading,
          },
          className
        )}
        onMouseDown={handleInternalMouseDown}
        onKeyDown={handleInternalKeyDown}
        onClick={handleInternalClick}
        aria-disabled={isLoading || props.disabled}
        data-loading={isLoading ? "true" : undefined}
        {...(isIconOnly && ariaLabel ? { "aria-label": ariaLabel, title: ariaLabel } : {})}
        {...props}>
        {/* Left section (icon or custom content) */}
        {finalLeftSection && <span className={cn("mr-2 shrink-0", classNames?.leftSection)}>{finalLeftSection}</span>}

        {/* Left-positioned spinner */}
        {isLoading && spinnerPosition === "left" && (
          <span className={cn("inline-block animate-spin mr-2", { "mr-0": isLoading && isIconOnly }, spinnerColorClass, classNames?.spinner)} aria-hidden="true">
            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </span>
        )}

        {/* Main content */}
        {children && !(isLoading && isIconOnly) && <span className={cn("truncate", classNames?.content)}>{children}</span>}

        {/* Right-positioned spinner */}
        {isLoading && spinnerPosition === "right" && (
          <span className={cn("inline-block animate-spin ml-2", { "ml-0": isLoading && isIconOnly }, spinnerColorClass, classNames?.spinner)} aria-hidden="true">
            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </span>
        )}

        {/* Right section (icon or custom content) */}
        {finalRightSection && <span className={cn("ml-2 shrink-0", classNames?.rightSection)}>{finalRightSection}</span>}
      </TagName>
    );
  }
);

Button.displayName = "Button";

// Re-export the ButtonGroup component that offers better organization of button groups
export const ButtonGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    vertical?: boolean;
    attached?: boolean;
    size?: VariantProps<typeof buttonVariants>["size"];
    variant?: VariantProps<typeof buttonVariants>["variant"];
    color?: VariantProps<typeof buttonVariants>["color"];
    radius?: VariantProps<typeof buttonVariants>["radius"];
  }
>(({ className, vertical = false, attached = false, size, variant, color, radius, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex",
        vertical ? "flex-col" : "flex-row",
        attached && [
          vertical ? "divide-y divide-border" : "divide-x divide-border",
          radius === "none"
            ? "rounded-none"
            : radius === "full"
            ? vertical
              ? "rounded-full"
              : "rounded-full"
            : vertical
            ? `rounded-${radius || "md"}`
            : `rounded-${radius || "md"}`,
          "overflow-hidden",
        ],
        !attached && "gap-1",
        className
      )}
      data-variant={variant}
      data-color={color}
      data-button-group=""
      role="group"
      {...props}
    />
  );
});

ButtonGroup.displayName = "ButtonGroup";

export { Button };
