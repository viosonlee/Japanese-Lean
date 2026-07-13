/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './App.tsx',
    './components/**/*.{ts,tsx}',
    './hooks/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1989fa',
        success: '#07c160',
        warning: '#ff976a',
        danger: '#ee0a24',
        surface: '#f7f8fa'
      }
    }
  },
  plugins: []
};
