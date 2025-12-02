module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Mode sombre
        'dark-primary': '#0D0D0D',
        'dark-text': '#F5F5F5',
        'dark-card': '#1C1C1C',
        'dark-border': '#2A2A2A',
        
        // Mode clair luxe
        'light-primary': '#FAF7F0',
        'light-text': '#2B2B2B',
        'light-card': '#E8E4DA',
        'light-border': '#D8D4CA',
        
        // Accents communs
        'gold': '#D4AF37',
        'teal': '#4ECDC4',
      },
    },
  },
  plugins: [],
};