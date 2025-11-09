import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
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
        'cursive': ['EB Garamond', 'serif'],
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
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-subtle': 'var(--gradient-subtle)',
      },
      boxShadow: {
        'soft': 'var(--shadow-soft)',
        'medium': 'var(--shadow-medium)',
      },
      transitionTimingFunction: {
        'smooth': 'var(--transition-smooth)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "gradient": {
          "0%, 100%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0px) translateX(0px)",
          },
          "50%": {
            transform: "translateY(-20px) translateX(10px)",
          },
        },
        "float-delayed": {
          "0%, 100%": {
            transform: "translateY(0px) translateX(0px)",
          },
          "50%": {
            transform: "translateY(20px) translateX(-10px)",
          },
        },
        "pulse-slow": {
          "0%, 100%": {
            opacity: "0.3",
            transform: "translate(-50%, -50%) scale(1)",
          },
          "50%": {
            opacity: "0.5",
            transform: "translate(-50%, -50%) scale(1.05)",
          },
        },
        "pulse-slower": {
          "0%, 100%": {
            opacity: "0.2",
            transform: "translate(-50%, -50%) scale(1)",
          },
          "50%": {
            opacity: "0.4",
            transform: "translate(-50%, -50%) scale(1.08)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "voice-wave-1": {
          "0%, 100%": {
            height: "12px",
          },
          "50%": {
            height: "8px",
          },
        },
        "voice-wave-2": {
          "0%, 100%": {
            height: "16px",
          },
          "50%": {
            height: "24px",
          },
        },
        "voice-wave-3": {
          "0%, 100%": {
            height: "20px",
          },
          "50%": {
            height: "28px",
          },
        },
        "waveform": {
          "0%, 100%": {
            d: "path('M0,12 Q5,3 10,12 T20,12 Q25,21 30,12 T40,12 Q45,3 50,12 T60,12 Q65,21 70,12 T80,12 Q85,3 90,12 T100,12')",
          },
          "50%": {
            d: "path('M0,12 Q5,21 10,12 T20,12 Q25,3 30,12 T40,12 Q45,21 50,12 T60,12 Q65,3 70,12 T80,12 Q85,21 90,12 T100,12')",
          },
        },
        "breathing": {
          "0%, 100%": {
            opacity: "0.4",
            transform: "scaleX(0.8)",
          },
          "50%": {
            opacity: "0.8",
            transform: "scaleX(1.2)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "gradient": "gradient 8s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float-delayed 7s ease-in-out infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
        "pulse-slower": "pulse-slower 5s ease-in-out infinite",
        "fade-in": "fade-in 0.8s ease-out forwards",
        "voice-wave-1": "voice-wave-1 0.8s ease-in-out infinite",
        "voice-wave-2": "voice-wave-2 0.8s ease-in-out infinite 0.1s",
        "voice-wave-3": "voice-wave-3 0.8s ease-in-out infinite 0.2s",
        "waveform": "waveform 2s ease-in-out infinite",
        "breathing": "breathing 4.5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
