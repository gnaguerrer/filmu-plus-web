'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { PosterList } from '@/components';
import { getMovies } from '@/services';

const HomePage = (): React.JSX.Element => {
	const { data, isLoading } = useQuery({
		queryKey: ['MOVIES'],
		queryFn: () => getMovies(),
	});

	return (
		<main className="flex flex-col flex-grow mt-16 scrollbar-dark overflow-x-hidden max-w-full gap-4">
			<PosterList
				data={data?.results ?? []}
				isLoading={isLoading}
				title="Estrenos"
			/>
			{/* <PosterList data={data?.results ?? []} isLoading={isLoading} /> */}
		</main>
	);
};

export default HomePage;
