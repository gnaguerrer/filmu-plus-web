'use client';

import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { useWindowSize } from '@/hook';
import { IPosterList } from '@/types';
import { Poster } from './poster';

const POSTER_SIZE = 210;
const ITEMS_GAP = 10;

export const PosterList = (props: IPosterList): React.JSX.Element => {
	const { data, isLoading, title } = props;
	const windowSize = useWindowSize();
	const scrollRef = useRef<HTMLDivElement>(null);

	const totalPosts = data?.length ?? 0;
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

	const handlePrev = (): void => {
		if (scrollRef?.current) {
			if (currentIdx === 0) {
				setCurrentIdx(0);
			} else {
				setCurrentIdx((prev) => prev - 1);
			}
		}
	};

	return (
		<div className="relative w-screen scrollbar-hide flex justify-center flex-col">
			{title && <h2 className="ml-12 mt-5 text-2xl">{title}</h2>}
			<div className="h-72 start-0 w-12 absolute bg-gradient-to-r from-filmu-black-main/80 to-filmu-black-main/0 z-[1] mt-11">
				<button
					className={clsx(
						'h-[93.5%] start-0 top-0 w-12 absolute opacity-0 hover:opacity-100 z-10',
						{ '!opacity-0': currentIdx === 0 }
					)}
					type="button"
					onClick={handlePrev}
					disabled={currentIdx === 0}
				>
					<GoChevronLeft color="#fff" size={40} />
				</button>
			</div>
			<div
				ref={scrollRef}
				className={clsx(
					'w-full px-12 flex gap-5 scrollbar-hide overflow-x-auto pt-3 scroll-smooth',
					{ 'overflow-x-hidden': isLoading }
				)}
			>
				{isLoading
					? [0, 1, 2, 3, 4, 5, 6].map((item) => (
							<div
								key={item}
								className="h-72 w-52 bg-neutral-700 rounded-lg animate-pulse"
							/>
						))
					: data?.map((poster) => (
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
			<div className="h-72 end-0 w-12 absolute bg-gradient-to-r from-filmu-black-main/0 to-filmu-black-main/80 mt-11">
				<button
					className={clsx(
						'h-full end-0 top-0 w-12 absolute opacity-0 hover:opacity-100 ',
						{ 'opacity-0': currentIdx >= maxIdx }
					)}
					type="button"
					onClick={handleNext}
				>
					<GoChevronRight color="#fff" size={40} />
				</button>
			</div>
		</div>
	);
};
