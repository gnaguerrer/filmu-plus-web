import React from 'react';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { Footer, Header, PosterList } from '@/components';
import { getMovies } from '@/services';

const HomePage = async (): Promise<React.JSX.Element> => {
	const session = await getServerSession();
	const data = await getMovies();

	if (!session?.user) {
		redirect('/signIn');
	}

	return (
		<div
			id="root-container"
			className="flex flex-col w-screen h-screen font-poppins overflow-y-auto scrollbar-dark"
		>
			<Header />
			<main className="flex flex-col flex-grow mt-16">
				<PosterList
					title={'Week'}
					data={
						data?.results?.map((movie) => ({
							...movie,
							image: movie.poster_path,
							backdrop: movie.backdrop_path,
							rating: movie.vote_average,
						})) ?? []
					}
					totalPosts={data?.total_results}
				/>
			</main>
			<Footer />
		</div>
	);
};

export default HomePage;
