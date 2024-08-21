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
				poppins: ['Poppins', 'sans-serif'],
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
			keyframes: {
				'scale-pulse': {
					'0%, 100%': { transform: 'scale(0.95)' },
					'50%': { transform: 'scale(1.2)' },
				},
			},
			animation: {
				'scale-pulse': 'scale-pulse 1.9s ease infinite',
			},
		},
	},
	plugins: [],
};
export default config;
