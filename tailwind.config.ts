import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          primary: "#861040",
          secondary:  "#E73980",
          neutral: "#FFFFFF",
          basic:"#646464",
          border: "#E7E7E7",
          buttonMarked: "#D18000"
        },
      },
    },
  },
  plugins: [],
}
export default config
