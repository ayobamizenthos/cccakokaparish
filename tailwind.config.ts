import type { Config } from "tailwindcss";

export default {
  darkMode: false, // Disabled - single premium theme only
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        heading: ['Cinzel', 'serif'],
        body: ['Montserrat', 'sans-serif'],
      },
      letterSpacing: {
        'luxury': '0.15em',
        'editorial': '0.05em',
        'wide': '0.1em',
      },
      lineHeight: {
        'luxury': '1.8',
        'tight': '1.2',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Extended Premium Colors
        gold: {
          DEFAULT: "hsl(43 74% 49%)",
          light: "hsl(43 74% 60%)",
          dark: "hsl(43 74% 40%)",
        },
        celestial: {
          blue: "hsl(215 80% 55%)",
          purple: "hsl(280 70% 50%)",
          teal: "hsl(180 70% 45%)",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      fontSize: {
        '2xs': '0.65rem',
        '10xl': '10rem',
        '11xl': '12rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23d4af37" fill-opacity="0.03"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      },
      boxShadow: {
        "glow": "0 0 60px hsl(43 74% 49% / 0.3)",
        "glow-soft": "0 0 100px hsl(43 74% 49% / 0.15)",
        "elegant": "0 25px 80px -20px hsl(222 47% 3% / 0.8)",
        "lift": "0 10px 40px -10px hsl(222 47% 3% / 0.6)",
        "glass": "0 8px 32px 0 hsl(222 47% 3% / 0.4)",
        "inner-glow": "inset 0 0 30px hsl(43 74% 49% / 0.1)",
      },
      backdropBlur: {
        'xs': '2px',
        'luxury': '20px',
        '3xl': '64px',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--radix-accordion-content-height)", opacity: "1" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
          to: { height: "0", opacity: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(100px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(100px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-100px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 30px hsl(43 74% 49% / 0.3)" },
          "50%": { boxShadow: "0 0 60px hsl(43 74% 49% / 0.5)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "float-subtle": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "text-reveal": {
          "0%": { 
            opacity: "0",
            transform: "translateY(100%)",
            clipPath: "inset(100% 0 0 0)"
          },
          "100%": { 
            opacity: "1",
            transform: "translateY(0)",
            clipPath: "inset(0 0 0 0)"
          },
        },
        "border-glow": {
          "0%, 100%": { borderColor: "hsl(43 74% 49% / 0.3)" },
          "50%": { borderColor: "hsl(43 74% 49% / 0.8)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "accordion-up": "accordion-up 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "fade-in": "fade-in 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "fade-in-up": "fade-in-up 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "slide-up": "slide-up 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "slide-in-right": "slide-in-right 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "slide-in-left": "slide-in-left 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "scale-in": "scale-in 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "float-subtle": "float-subtle 4s ease-in-out infinite",
        "rotate-slow": "rotate-slow 20s linear infinite",
        "text-reveal": "text-reveal 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "border-glow": "border-glow 2s ease-in-out infinite",
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '2000': '2000ms',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
