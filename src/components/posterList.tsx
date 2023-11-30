'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import clsx from 'clsx';
import { GoChevronRight } from 'react-icons/go';
// import { GoChevronLeft } from "react-icons/go";
import { useWindowSize } from '@/hook';
import { getMovies } from '@/services';
import { Poster } from './poster';

const POSTER_SIZE = 210;
const ITEMS_GAP = 10;
const CONTAINER_GAP = 48;

export const PosterList = (): React.JSX.Element => {
	const windowSize = useWindowSize();
	const scrollRef = useRef<HTMLDivElement>(null);
	const { data } = useQuery({
		queryKey: ['MOVIES'],
		queryFn: () => getMovies(),
	});
	const totalPosts = data?.results?.length ?? 0;
	const [currentIdx, setCurrentIdx] = useState(0);
	const [maxIdx, setMaxIdx] = useState(0);
	const [itemsPerScroll, setItemsPerScroll] = useState(1);

	const scrollWidthByItems = itemsPerScroll * (POSTER_SIZE + ITEMS_GAP);
	const nextScrollWidth = scrollWidthByItems * currentIdx;

	useEffect(() => {
		if (windowSize?.width) {
			const itemsByWidth = windowSize.width / (POSTER_SIZE + ITEMS_GAP);
			setItemsPerScroll(Math.floor(itemsByWidth));
		}
	}, [windowSize?.width]);

	useEffect(() => {
		if (itemsPerScroll) {
			setMaxIdx(Math.floor(totalPosts / itemsPerScroll));
		}
	}, [itemsPerScroll, totalPosts]);

	useEffect(() => {
		if (scrollRef?.current) {
			scrollRef.current.scrollLeft = nextScrollWidth;
		}
	}, [currentIdx]);

	const handleNext = (): void => {
		if (scrollRef?.current) {
			if (maxIdx === currentIdx) {
				setCurrentIdx(0);
			} else {
				setCurrentIdx((prev) => prev + 1);
			}
		}
	};

	return (
		<div className="relative w-screen scrollbar-hide">
			{!currentIdx && (
				<div className="h-[93.5%] w-12 absolute hover:bg-black/10 transition-colors duration-300" />
			)}
			<div
				ref={scrollRef}
				className="w-full px-12 flex gap-5 scrollbar-hide overflow-x-auto pt-5 scroll-smooth"
			>
				{data?.results.map((poster) => (
					<Poster
						id={poster.id}
						key={poster.id}
						title={poster.title}
						overview={poster.overview}
						image={poster.poster_path}
						backdrop={poster.poster_path}
						rating={poster.vote_average}
					/>
				))}
			</div>
			<div className="h-[93.5%] end-0 top-0 w-12 absolute bg-gradient-to-r from-filmu-black-main/0 to-filmu-black-main/80" />
			<button
				className={clsx(
					'h-[93.5%] end-0 top-0 w-12 absolute opacity-0 hover:opacity-100',
					{ 'opacity-0': currentIdx >= maxIdx }
				)}
				type="button"
				onClick={handleNext}
			>
				<GoChevronRight color="#fff" size={40} />
			</button>
		</div>
	);
};
