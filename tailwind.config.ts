import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        heroImage:
          "linear-gradient(270deg, rgba(0,0,0,0) 10%, rgba(0,0,0,0.8) 80%), url('/hero_image.jpg')",
        cityView:
          "radial-gradient(circle, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%), url('/city_view.png')",
        simpleHome:
          'linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,1) 100%), url("/home.jpg")',
        familyBg:
          "radial-gradient(circle, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%), url('/family.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
