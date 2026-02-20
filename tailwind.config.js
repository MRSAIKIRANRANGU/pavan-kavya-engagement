// D:\saikiran_personal\engagement-invitation\tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        royalGold: "#D4AF37",
        softCream: "#FFF9F0",
        pastelRose: "#FFF0E0",
        deepBrown: "#3E2723",
        sacredSaffron: "#FF9933",
        traditionalPink: "#B76E79",
        sandalwood: "#C4A484",
        pearlWhite: "#FFF5E7",
      },
      fontFamily: {
        heading: ["'Playfair Display'", "serif"],
        body: ["'Poppins'", "sans-serif"],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-gold': 'pulse-gold 2s ease-in-out infinite',
        'slide-up': 'slideUp 1s ease-out',
        'fade-in': 'fadeIn 2s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-gold': {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.8, transform: 'scale(1.05)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'rangoli': "url('/rangoli-pattern.png')",
      },
      boxShadow: {
        'elegant': '0 20px 40px -15px rgba(212, 175, 55, 0.2)',
        'divine': '0 30px 50px -20px rgba(183, 110, 121, 0.3)',
      },
    },
  },
  plugins: [],
};