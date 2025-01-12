'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { PosterList } from '@/components';
import { getPopularMovies, getTrending } from '@/services';

const HomePage = (): React.JSX.Element => {
	const { data: popular, isLoading: isLoadingPopular } = useQuery({
		queryKey: ['POPULAR_MOVIES'],
		queryFn: () => getPopularMovies(),
	});

	const { data: trending, isLoading: isLoadingTrending } = useQuery({
		queryKey: ['TRENDING_DAY'],
		queryFn: () => getTrending('day'),
	});

	return (
		<main className="flex flex-col flex-grow mt-16 scrollbar-dark overflow-x-hidden max-w-full gap-4">
			<PosterList
				data={trending?.results ?? []}
				isLoading={isLoadingTrending}
				title="Trending Today"
			/>
			<PosterList
				data={popular?.results ?? []}
				isLoading={isLoadingPopular}
				title="Popular Movies"
			/>
		</main>
	);
};

export default HomePage;
