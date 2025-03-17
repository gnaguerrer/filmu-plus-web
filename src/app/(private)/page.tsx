'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import first from 'lodash/first';
import { FeaturedPost, PosterList } from '@/components';
import { getPopularMovies, getPopularSeriesTV, getTrending } from '@/services';

const HomePage = (): React.JSX.Element => {
	const { data: trendingData, isLoading: isLoadingTrending } = useQuery({
		queryKey: ['TRENDING_DAY'],
		queryFn: () => getTrending('day'),
	});

	const { data: popularMovies, isLoading: isLoadingMovies } = useQuery({
		queryKey: ['POPULAR_MOVIES'],
		queryFn: () => getPopularMovies(),
	});

	const { data: popularTV, isLoading: isLoadingTV } = useQuery({
		queryKey: ['POPULAR_TV_SERIES'],
		queryFn: () => getPopularSeriesTV(),
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
				data={popularMovies?.results ?? []}
				isLoading={isLoadingMovies}
				title="Popular Movies"
			/>
			<PosterList
				data={popularTV?.results ?? []}
				isLoading={isLoadingTV}
				title="Popular TV Series"
			/>
		</main>
	);
};

export default HomePage;
