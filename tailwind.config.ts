import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['sans-serif'],
			},
			backgroundImage: {
				projector: 'var(--projector-background)',
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-dark-purple': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				'filmu-purple': {
					main: '#6100c2',
					light: '#7900C2',
				},
				'purple-heart': {
					'50': '#f5f0ff',
					'100': '#ede4ff',
					'200': '#ddccff',
					'300': '#c4a4ff',
					'400': '#a970ff',
					'500': '#9337ff',
					'600': '#8b0fff',
					'700': '#8000ff',
					'800': '#6b00da',
					'900': '#6100c2',
					'950': '#35007a',
				},
				'filmu-black': {
					main: '#1E1E1E',
					900: '#3d3d3d',
					800: '#454545',
					700: '#4f4f4f',
					600: '#5d5d5d',
					500: '#6d6d6d',
					400: '#888888',
				},
			},
		},
	},
	plugins: [],
};
export default config;
