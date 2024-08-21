import React from 'react';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { NextAuthProvider, QueryProvider } from '@/providers';
import '../styles/globals.css';
import '../styles/posters.css';

const inter = Inter({ subsets: ['latin'] });

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
					<body className={inter.className}>{children}</body>
				</QueryProvider>
			</NextAuthProvider>
		</html>
	);
};

export default RootLayout;
