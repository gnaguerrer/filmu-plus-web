'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { useSession } from 'next-auth/react';
import { FaCircleUser } from 'react-icons/fa6';
import { User } from '@/types';
import { images } from '@/utils';

const options = [
	{
		href: '#',
		label: 'Trending',
	},
	{
		href: '#',
		label: 'Movies',
	},
	{
		href: '#',
		label: 'TV Series',
	},
];

export const Header = (): React.JSX.Element => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [user, setUser] = useState<User | undefined>();
	const session = useSession();

	const handleScroll = (event: Event): void => {
		const { target } = event;
		if (target) {
			const { scrollHeight, scrollTop } = target as HTMLInputElement;
			if (scrollTop >= scrollHeight * 0.2) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		}
	};

	useEffect(() => {
		const rootContainer = document.getElementById('root-container');
		rootContainer?.addEventListener('scroll', handleScroll, false);
		return () => {
			rootContainer?.removeEventListener('scroll', handleScroll, false);
		};
	}, []);

	useEffect(() => {
		if (session?.data?.user && !user) {
			setUser(session.data.user as User);
		}

		return () => {};
	}, [session?.data]);

	return (
		<header
			className={clsx(
				'flex items-center justify-between  h-24 sticky top-0 z-50 transition-all duration-700',
				{
					'bg-filmu-black-main/90': isScrolled,
				}
			)}
		>
			<div className="flex items-center h-16 pl-10">
				{options.map((option) => (
					<Link
						key={option.label}
						className="px-4 mx-1 py-3 hover:text-slate-100 transition-opacity"
						href={option.href}
					>
						{option.label}
					</Link>
				))}
			</div>
			<Link className="absolute left-[48%]" href="/">
				<Image
					className="w-28"
					src={images.filmuLogo}
					alt="filmu_plus_logo"
					width="0"
					height="0"
					sizes="100vw"
					placeholder="blur"
				/>
			</Link>
			<button className="flex items-center pr-10">
				{user?.image ? (
					<Image
						className="w-10 rounded-full ring-2 ring-filmu-purple-main/70 hover:ring-filmu-purple-main"
						src={user.image}
						alt="profile_photo"
						width="0"
						height="0"
						sizes="100vw"
					/>
				) : (
					<span className="text-slate-100/70  hover:text-slate-100 transition-all duration-300">
						<FaCircleUser size={38} />
					</span>
				)}
			</button>
		</header>
	);
};
