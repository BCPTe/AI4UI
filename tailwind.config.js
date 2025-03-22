/** @type {import('tailwindcss').Config} */
export default {
  // prefix: "ai4ui-", // This automatically adds the prefix to all utility classes
  content: [
    "./src/**/*.{ts,tsx}", // Adjust paths based on your project structure
  ],
  theme: {
    extend: {
      ringColor: {
        ring: "currentColor",
      },
      colors: {
        primary: {
          DEFAULT: "rgba(var(--color-primary-rgb))",
          foreground: "rgba(var(--color-primary-foreground-rgb))",
        },
        secondary: {
          DEFAULT: "rgba(var(--color-secondary-rgb))",
          foreground: "rgba(var(--color-secondary-foreground-rgb))",
        },
        destructive: {
          DEFAULT: "rgba(var(--color-destructive-rgb))",
          foreground: "rgba(var(--color-destructive-foreground-rgb))",
        },
        warning: {
          DEFAULT: "rgba(var(--color-warning-rgb))",
          foreground: "rgba(var(--color-warning-foreground-rgb))",
        },
        // success: {
        //   DEFAULT: "rgba(var(--color-success-rgb))",
        //   foreground: "rgba(var(--color-success-foreground-rgb))",
        // },
        accent: {
          DEFAULT: "rgba(var(--color-accent-rgb))",
          foreground: "rgba(var(--color-accent-foreground-rgb))",
        },
        input: {
          DEFAULT: "rgba(var(--color-input-rgb))",
          foreground: "rgba(var(--color-input-foreground-rgb))",
        },
        background: "rgba(var(--color-background-rgb))",
        text: "rgba(var(--color-text-rgb))",
        // input: "rgba(var(--color-input-rgb))",
      },
      fontWeight: {
        100: 100,
        200: 200,
        300: 300,
        400: 400,
        500: 500,
        600: 600,
        700: 700,
        800: 800,
        900: 900,
      },
      borderRadius: {
        none: "0",
        sm: "0.35rem",
        DEFAULT: "0.5rem",
        md: "0.5rem",
        lg: "0.75rem",
        full: "9999px",
      },
      animation: {
        ripple: "ripple 300ms linear",
      },
      keyframes: {
        ripple: {
          "0%": { transform: "scale(0)", opacity: "0.1" },
          "100%": { transform: "scale(1)", opacity: "0.2" },
        },
      },
      transitionDuration: {
        DEFAULT: "400ms",
      },
    },
  },
  plugins: [],
};
