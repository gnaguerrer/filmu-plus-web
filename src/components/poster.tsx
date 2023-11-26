import React from 'react';
import Image from 'next/image';
import { IPoster } from '@/types';

export const Poster = (props: IPoster): React.JSX.Element => {
	const { title, image } = props;
	return (
		<button
			className="centered-flex flex-col flex-shrink-0 h-72 w-52 rounded-lg relative overflow-hidden mb-5 hover:ring-2 	
hover:ring-filmu-purple-main/70 hover:scale-105 transition-all"
		>
			<div className="full-item bg-black/20 absolute hover:bg-black/0 transition-colors duration-300" />
			<Image
				className="full-item"
				src={`${process.env.NEXT_PUBLIC_TMDB_IMAGES}/original/${image}`}
				alt={title}
				width="0"
				height="0"
				sizes="100vw"
			/>
		</button>
	);
};
