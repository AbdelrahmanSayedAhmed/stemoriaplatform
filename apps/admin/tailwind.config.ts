import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'stemoria-blue': '#2563EB',
        'science-turquoise': '#06B6D4',
        'discovery-yellow': '#FACC15',
      },
    },
  },
  plugins: [],
}
export default config