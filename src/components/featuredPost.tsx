import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { DateTime } from 'luxon';
import { FaStar } from 'react-icons/fa6';
import { IFeaturedPost } from '@/types';

export const FeaturedPost = (props: IFeaturedPost) => {
	const { image, name, average, date, overview } = props;

	const formatted = date
		? DateTime.fromISO(date).toFormat('MMM yyyy')
		: undefined;

	return (
		<div className="h-[28rem] relative bg-filmu-black-main ">
			<Image
				className="w-full h-[30rem] md:h-[32rem] absolute image-gradient opacity-75 object-cover object-top"
				src={`${process.env.NEXT_PUBLIC_TMDB_IMAGES}/original/${image}`}
				alt={name}
				width="0"
				height="0"
				sizes="100vw"
			/>
			<div
				className={clsx(
					'w-3/4 md:w-1/2 h-[30rem] md:h-[32rem] absolute flex flex-col justify-center px-12 gap-1.5',
					'bg-gradient-to-r from-filmu-black-main to-transparent'
				)}
			>
				<h1 className="text-xl font-semibold"># 1 Trending</h1>
				<h1 className="text-4xl md:text-6xl font-semibold">{name}</h1>
				{formatted && <span className="text-sm">{formatted}</span>}
				<div className="flex gap-1 items-center ">
					<FaStar className="h-5 w-5 text-yellow-600" />
					<span className="text-sm md:text-lg pt-0.5">
						{average.toFixed(1)}
					</span>
				</div>
				<span className="text-sm md:text-base max-w-sm py-1.5 ">
					{overview}
				</span>
			</div>
		</div>
	);
};
