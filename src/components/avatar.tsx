import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { FaCircleUser } from 'react-icons/fa6';
import { IAvatar } from '@/types';

export const Avatar = (props: IAvatar): React.JSX.Element => {
	const { src, hover } = props;
	return src ? (
		<Image
			className={clsx(
				'w-10 h-10 rounded-full ring-2 ring-filmu-purple-main/70 shadow-3xl shadow-filmu-purple-main transition-all',
				{ 'hover:ring-filmu-purple-main ': hover }
			)}
			src={src}
			alt="profile_photo"
			width="0"
			height="0"
			sizes="100vw"
		/>
	) : (
		<span className="text-slate-100/70  hover:text-slate-100 transition-all duration-300">
			<FaCircleUser size={38} />
		</span>
	);
};
