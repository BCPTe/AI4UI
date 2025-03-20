/** @type {import('tailwindcss').Config} */
export default {
  // prefix: "ai4ui-", // This automatically adds the prefix to all utility classes
  content: [
    "./src/**/*.{ts,tsx}", // Adjust paths based on your project structure
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0070f3",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#f5f5f5",
          foreground: "#333333",
        },
        destructive: {
          DEFAULT: "#ff4d4f",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#f0f0f0",
          foreground: "#333333",
        },
        background: "#ffffff",
        input: "#e2e8f0",
        ring: "#0070f3",
      },
    },
  },
  plugins: [],
};
