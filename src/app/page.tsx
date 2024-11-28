import React from 'react';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { Footer, Header, PosterList } from '@/components';

const HomePage = async (): Promise<React.JSX.Element> => {
	const session = await getServerSession();

	if (!session?.user) {
		redirect('/signIn');
	}

	return (
		<div className="flex flex-col w-screen min-h-screen font-poppins">
			<Header />
			<main className="flex flex-col flex-grow mt-16 scrollbar-dark overflow-x-hidden max-w-full">
				<PosterList />
			</main>
			<Footer />
		</div>
	);
};

export default HomePage;
