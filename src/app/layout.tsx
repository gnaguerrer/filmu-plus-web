import React from 'react';
import type { Metadata } from 'next';
import { NextAuthProvider, QueryProvider } from '@/providers';
import '../styles/globals.css';

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
					<body className="font-poppins">{children}</body>
				</QueryProvider>
			</NextAuthProvider>
		</html>
	);
};

export default RootLayout;
