import React from 'react';
import { Poppins } from 'next/font/google';
import type { Metadata } from 'next';
import { NextAuthProvider, QueryProvider } from '@/providers';
import '../styles/globals.css';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
	title: 'Filmu +',
	description: '',
};

const RootLayout = ({
	children,
}: {
	children: React.ReactNode;
}): React.JSX.Element => {
	return (
		<html lang="en">
			<NextAuthProvider>
				<QueryProvider>
					<body className={poppins.className}>{children}</body>
				</QueryProvider>
			</NextAuthProvider>
		</html>
	);
};

export default RootLayout;
