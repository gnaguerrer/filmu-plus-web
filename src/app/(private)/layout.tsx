import React from 'react';
import { Footer, Header } from '@/components';
import '../../styles/globals.css';

const PrivateLayout = ({
	children,
}: {
	children: React.ReactNode;
}): React.JSX.Element => {
	return (
		<div className="flex flex-col w-screen min-h-screen">
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default PrivateLayout;
