import React from 'react';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { Footer, Header } from '@/components';

const HomePage = async (): Promise<React.JSX.Element> => {
	const session = await getServerSession();

	if (!session?.user) {
		redirect('/signIn');
	}

	return (
		<div
			id="root-container"
			className="flex flex-col w-screen h-screen font-poppins overflow-y-auto scrollbar-dark"
		>
			<Header />
			<main className="flex flex-col justify-between flex-grow" />
			<Footer />
		</div>
	);
};

export default HomePage;
