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
	const { data, totalPosts = 0, title } = props;
	const windowSize = useWindowSize();
	const scrollRef = useRef<HTMLDivElement>(null);

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
	const handlePrevious = (): void => {
		if (scrollRef?.current) {
			if (!currentIdx) {
				setCurrentIdx(0);
			} else {
				setCurrentIdx((prev) => prev - 1);
			}
		}
	};

	return (
		<div className="relative w-screen scrollbar-hide  ">
			<span className="ml-12">{title}</span>
			<div className="h-[93.5%] w-16 absolute bg-gradient-to-r from-filmu-black-main/80 to-filmu-black-main/0  transition-colors duration-300 z-10 centered-flex chevron-container">
				<button
					className={clsx('h-auto w-12 z-10 chevron-icon-list', {
						'opacity-0': currentIdx >= maxIdx,
					})}
					type="button"
					onClick={handlePrevious}
				>
					<GoChevronLeft color="#fff" size={40} />
				</button>
			</div>

			<div className="h-[93.5%] right-0 w-12 absolute bg-gradient-to-r from-filmu-black-main/0 to-filmu-black-main/80 centered-flex  z-10 chevron-container ">
				<button
					className={clsx(
						'h-auto w-12 opacity-0 hover:opacity-100 chevron-icon-list',
						{
							'opacity-0': currentIdx >= maxIdx,
						}
					)}
					type="button"
					onClick={handleNext}
				>
					<GoChevronRight color="#fff" size={40} />
				</button>
			</div>

			<div
				ref={scrollRef}
				className="w-full px-12 flex gap-5 scrollbar-hide overflow-x-auto pt-5 scroll-smooth"
			>
				{data?.map((poster) => (
					<Poster
						id={poster.id}
						key={poster.id}
						title={poster.title}
						overview={poster.overview}
						image={poster.image}
						backdrop={poster.backdrop}
						rating={poster.rating}
					/>
				))}
			</div>
		</div>
	);
};
