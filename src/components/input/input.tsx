import * as React from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { inputVariants } from "./input.variants";

// Interface for the classNames prop
export interface InputClassNames {
  root?: string;
  input?: string;
  leftSection?: string;
  rightSection?: string;
  wrapper?: string;
  error?: string;
}

type InputVariantProps = Omit<VariantProps<typeof inputVariants>, "error">;

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "color" | "size" | "onChange">, InputVariantProps {
  classNames?: InputClassNames;
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  error?: string | boolean;
  wrapperProps?: React.HTMLAttributes<HTMLDivElement>;
  inputRef?: React.Ref<HTMLInputElement>;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onValueChange?: (value: string) => void;
  // Additional handlers and props
  onBlurCapture?: React.FocusEventHandler<HTMLInputElement>;
  onFocusCapture?: React.FocusEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
  onPaste?: React.ClipboardEventHandler<HTMLInputElement>;
  onCopy?: React.ClipboardEventHandler<HTMLInputElement>;
  onCut?: React.ClipboardEventHandler<HTMLInputElement>;
  onCompositionStart?: React.CompositionEventHandler<HTMLInputElement>;
  onCompositionEnd?: React.CompositionEventHandler<HTMLInputElement>;
  loading?: boolean;
  clearable?: boolean;
  onClear?: () => void;
  autoFocus?: boolean;
}

const Input = React.forwardRef<HTMLDivElement, InputProps>(
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
      error,
      wrapperProps,
      inputRef,
      type = "text",
      disabled,
      value,
      onChange,
      onValueChange,
      // Additional handlers and props
      onBlurCapture,
      onFocusCapture,
      onKeyDown,
      onKeyUp,
      onKeyPress,
      onPaste,
      onCopy,
      onCut,
      onCompositionStart,
      onCompositionEnd,
      loading,
      clearable,
      onClear,
      autoFocus = false,
      ...props
    },
    ref
  ) => {
    const [focused, setFocused] = React.useState(false);
    const [innerValue, setInnerValue] = React.useState(value || "");
    const innerInputRef = React.useRef<HTMLInputElement>(null);
    const combinedInputRef = useCombinedRefs(inputRef, innerInputRef);

    React.useEffect(() => {
      if (value !== undefined) {
        setInnerValue(value);
      }
    }, [value]);

    React.useEffect(() => {
      if (autoFocus && innerInputRef.current) {
        innerInputRef.current.focus();
      }
    }, [autoFocus]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      if (value === undefined) {
        setInnerValue(newValue);
      }
      onChange?.(e);
      onValueChange?.(newValue);
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setFocused(true);
      props.onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setFocused(false);
      props.onBlur?.(e);
    };

    const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      if (innerInputRef.current) {
        const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")?.set;

        if (nativeInputValueSetter) {
          nativeInputValueSetter.call(innerInputRef.current, "");
          const event = new Event("input", { bubbles: true });
          innerInputRef.current.dispatchEvent(event);
        }

        innerInputRef.current.focus();
      }

      if (value === undefined) {
        setInnerValue("");
      }

      onClear?.();
      onValueChange?.("");
    };

    // Determine if we should show the clear button
    const showClearButton = clearable && !disabled && (value || innerValue) && value !== "";

    // Customize right section based on loading and clearable states
    let rightSectionContent = rightSection;

    if (loading) {
      rightSectionContent = <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />;
    } else if (showClearButton) {
      rightSectionContent = (
        <button
          type="button"
          className="cursor-pointer h-4 w-4 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded-full pointer-events-auto"
          onClick={handleClear}
          tabIndex={-1}
          aria-label="Clear input">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      );
    }

    return (
      <div ref={ref} className={cn("ai4ui-input-wrapper relative", { "text-destructive": !!error }, { "opacity-60": disabled }, classNames?.wrapper, className)} {...wrapperProps}>
        {leftSection && <div className={cn("absolute left-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none", classNames?.leftSection)}>{leftSection}</div>}

        <input
          type={type}
          ref={combinedInputRef}
          className={cn(
            inputVariants({
              variant,
              color,
              size,
              radius,
              error: !!error,
            }),
            {
              "pl-10": !!leftSection,
              "pr-10": !!rightSection || loading || showClearButton,
            },
            { "ring-1 ring-primary ring-offset-1": focused && !error && variant !== "underline" },
            classNames?.input
          )}
          disabled={disabled}
          value={value !== undefined ? value : innerValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onBlurCapture={onBlurCapture}
          onFocusCapture={onFocusCapture}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          onKeyPress={onKeyPress}
          onPaste={onPaste}
          onCopy={onCopy}
          onCut={onCut}
          onCompositionStart={onCompositionStart}
          onCompositionEnd={onCompositionEnd}
          autoFocus={autoFocus}
          {...props}
        />

        {(rightSectionContent || loading || showClearButton) && (
          <div className={cn("absolute right-3 top-1/2 -translate-y-1/2 flex items-center", { "pointer-events-none": !showClearButton && !loading }, classNames?.rightSection)}>
            {rightSectionContent}
          </div>
        )}

        {error && typeof error === "string" && <p className={cn("text-destructive text-xs mt-1", classNames?.error)}>{error}</p>}
      </div>
    );
  }
);

// Updated ref combining function without using MutableRefObject directly
function useCombinedRefs<T>(...refs: Array<React.Ref<T> | undefined>): React.RefCallback<T> {
  return React.useCallback(
    (element: T) => {
      refs.forEach((ref) => {
        if (!ref) return;

        if (typeof ref === "function") {
          ref(element);
        } else {
          (ref as React.RefObject<T> & { current: T }).current = element;
        }
      });
    },
    [refs]
  );
}

Input.displayName = "Input";

export { Input };
