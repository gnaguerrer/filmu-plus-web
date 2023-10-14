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
			className="w-screen h-screen font-poppins overflow-y-auto scrollbar-dark"
		>
			<Header />
			<main className="flex flex-col justify-between overflow-y-auto">
				<div className="flex flex-col">
					{Array.from(Array(10).keys()).map((item) => (
						<div key={item} className="mb-4 py-12 px-16">
							content
						</div>
					))}
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default HomePage;
