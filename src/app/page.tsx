'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import first from 'lodash/first';
import { FeaturedPost, PosterList } from '@/components';
import { getPopularMovies, getTrending } from '@/services';

const HomePage = (): React.JSX.Element => {
	const { data: popular, isLoading: isLoadingPopular } = useQuery({
		queryKey: ['POPULAR_MOVIES'],
		queryFn: () => getPopularMovies(),
	});

	const { data: trendingData, isLoading: isLoadingTrending } = useQuery({
		queryKey: ['TRENDING_DAY'],
		queryFn: () => getTrending('day'),
	});

	const firstTrending = first(trendingData?.results);
	const trending = trendingData?.results?.slice(1) ?? [];

	return (
		<main className="flex flex-col flex-grow mt-16 scrollbar-dark overflow-x-hidden max-w-full gap-4 pt-5">
			{firstTrending && (
				<FeaturedPost
					image={firstTrending.backdrop_path}
					name={firstTrending?.name ?? firstTrending?.title ?? ''}
					average={firstTrending.vote_average}
					date={firstTrending?.release_date}
					overview={firstTrending.overview}
				/>
			)}
			<PosterList
				data={trending ?? []}
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
