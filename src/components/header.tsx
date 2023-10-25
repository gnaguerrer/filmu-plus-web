'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { signOut, useSession } from 'next-auth/react';
import { FaCircleUser } from 'react-icons/fa6';
import { PiSignOutBold } from 'react-icons/pi';
import { TiArrowSortedUp } from 'react-icons/ti';
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
	const [openDropdown, setOpenDropdown] = useState(false);

	const handleScroll = (event: Event): void => {
		const { target } = event;
		if (target) {
			const { scrollHeight, scrollTop } = target as HTMLInputElement;
			if (scrollTop >= scrollHeight * 0.18) {
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
				'w-full flex items-center justify-between h-24 absolute top-0 z-50 transition-all duration-700',
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
			<button
				className="flex items-center pr-10"
				onClick={() => setOpenDropdown(true)}
			>
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
			<div
				className={clsx('absolute w-screen h-screen inset-0', {
					hidden: !openDropdown,
				})}
				onClick={() => setOpenDropdown(false)}
			>
				<TiArrowSortedUp className="absolute top-[67px] right-[53px]" />
				<div className="absolute top-20 right-10 w-44 rounded-lg shadow-lg bg-filmu-black-800  ring-1 ring-black ring-opacity-5 py-2 px-2">
					<ul>
						<li>
							<button
								className="w-full text-left px-1 hover:text-white flex items-center"
								onClick={() => signOut()}
							>
								<PiSignOutBold size={20} className="mr-1.5" />
								Log Out
							</button>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};
