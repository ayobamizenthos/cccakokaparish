import type { Config } from "tailwindcss";

export default {
  darkMode: false,
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
        cormorant: ['Cormorant Garamond', 'serif'],
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
        background: {
          DEFAULT: "hsl(var(--background))",
          warm: "hsl(var(--background-warm))",
          cream: "hsl(var(--background-cream))",
        },
        foreground: {
          DEFAULT: "hsl(var(--foreground))",
          muted: "hsl(var(--foreground-muted))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          light: "hsl(var(--primary-light))",
          dark: "hsl(var(--primary-dark))",
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
          light: "hsl(var(--accent-light))",
          dark: "hsl(var(--accent-dark))",
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
        // Gold Spectrum
        gold: {
          DEFAULT: "hsl(var(--gold))",
          light: "hsl(var(--gold-light))",
          dark: "hsl(var(--gold-dark))",
          muted: "hsl(var(--gold-muted))",
        },
        // Celestial Blue
        celestial: {
          DEFAULT: "hsl(var(--celestial-blue))",
          light: "hsl(var(--celestial-blue-light))",
          dark: "hsl(var(--celestial-blue-dark))",
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
      },
      boxShadow: {
        'xs': 'var(--shadow-xs)',
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'xl': 'var(--shadow-xl)',
        'gold-sm': 'var(--shadow-gold-sm)',
        'gold-md': 'var(--shadow-gold-md)',
        'gold-lg': 'var(--shadow-gold-lg)',
        'blue-sm': 'var(--shadow-blue-sm)',
        'blue-md': 'var(--shadow-blue-md)',
        'card': 'var(--shadow-card)',
        'card-hover': 'var(--shadow-card-hover)',
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
          "0%, 100%": { boxShadow: "0 0 30px hsl(43 90% 52% / 0.2)" },
          "50%": { boxShadow: "0 0 60px hsl(43 90% 52% / 0.4)" },
        },
        "divine-pulse": {
          "0%, 100%": { boxShadow: "0 0 30px hsl(210 70% 48% / 0.15)" },
          "50%": { boxShadow: "0 0 60px hsl(210 70% 48% / 0.3)" },
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
        "pulse-gold": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(43 90% 52% / 0.3)" },
          "50%": { boxShadow: "0 0 50px hsl(43 90% 52% / 0.5)" },
        },
        "divine-rays": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "cross-glow": {
          "0%, 100%": { filter: "drop-shadow(0 0 15px hsl(43 90% 52% / 0.4))" },
          "50%": { filter: "drop-shadow(0 0 35px hsl(43 90% 52% / 0.7))" },
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
        "divine-pulse": "divine-pulse 3s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "float-subtle": "float-subtle 4s ease-in-out infinite",
        "rotate-slow": "rotate-slow 20s linear infinite",
        "pulse-gold": "pulse-gold 3s ease-in-out infinite",
        "divine-rays": "divine-rays 60s linear infinite",
        "cross-glow": "cross-glow 3s ease-in-out infinite",
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
