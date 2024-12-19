import React from 'react';
import type { Metadata } from 'next';
import { Footer, Header } from '@/components';
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
					<body>
						<div className="flex flex-col w-screen min-h-screen font-poppins">
							<Header />
							{children}
							<Footer />
						</div>
					</body>
				</QueryProvider>
			</NextAuthProvider>
		</html>
	);
};

export default RootLayout;
