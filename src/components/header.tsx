'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import clsx from 'clsx';
import { signOut, useSession } from 'next-auth/react';
import { IoMenu } from 'react-icons/io5';
import { PiSignOutBold } from 'react-icons/pi';
import { User } from '@/types';
import { images } from '@/utils';
import { Avatar } from './avatar';

const options = [
	{
		href: '/',
		label: 'Home',
	},
	// {
	// 	href: '/trending',
	// 	label: 'Trending',
	// },
	{
		href: '/movies',
		label: 'Movies',
	},
	{
		href: '/tv-series',
		label: 'TV Series',
	},
];

export const Header = (): React.JSX.Element => {
	const session = useSession();
	const pathname = usePathname();
	const [isScrolled, setIsScrolled] = useState(false);
	const [user, setUser] = useState<User | undefined>();

	const handleScroll = (): void => {
		if (window.scrollY > window.innerHeight * 0.1) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
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
				'w-full flex items-center justify-between h-24 fixed top-0 z-10 transition-all duration-700',
				{
					'bg-filmu-black-main/90': isScrolled,
				}
			)}
		>
			<div className="flex items-center h-16 pl-10">
				<Link href="/">
					<Image
						className="w-28"
						src={images.filmuLogo}
						alt="filmu_plus_logo"
						width="0"
						height="0"
						sizes="100vw"
					/>
				</Link>
				<div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-4">
					{options.map((option) => (
						<Link
							key={option.label}
							href={option.href}
							aria-current={option.href === pathname ? 'page' : undefined}
							className={clsx(
								'transition-all inline-flex items-center border-b-2 px-1 pt-1 pb-1 hover:[text-shadow:_1px_1px_8px_rgba(237,228,255,0.5)]',
								option.href === pathname
									? 'border-purple-200 text-purple-200 hover:text-purple-200'
									: 'border-transparent  hover:border-slate-100/60 hover:text-slate-100'
							)}
						>
							{option.label}
						</Link>
					))}
				</div>
			</div>
			<Popover className="relative">
				<PopoverButton className="mr-6 hidden sm:flex outline-none">
					<Avatar hover src={user?.image} />
				</PopoverButton>
				<PopoverPanel
					anchor="bottom"
					className={clsx(
						'bg-filmu-black-800 min-w-[11rem] mt-2 rounded-lg shadow-lg px-1 pt-1 pb-1.5 z-[12]'
					)}
				>
					<div className={clsx('w-full flex flex-col bg-filmu-black-800 px-1')}>
						<p className="border-b border-slate-100/40 pb-1 pt-1.5 mb-1">
							{user?.name}
						</p>
						<button
							className="w-full text-left px-1 py-1.5 hover:text-white flex items-center hover:bg-slate-50/10 rounded-lg"
							onClick={() => signOut()}
						>
							<PiSignOutBold size={20} className="mr-1.5" />
							Log Out
						</button>
					</div>
				</PopoverPanel>
			</Popover>
			<Popover className="relative flex sm:hidden ">
				<PopoverButton className="mr-6 flex sm:hidden outline-none  ">
					<IoMenu size={24} className=" transition-all hover:text-slate-50  " />
				</PopoverButton>
				<PopoverPanel
					anchor="bottom"
					className="flex flex-col bg-filmu-black-800 min-w-[11rem] mt-2 rounded-lg shadow-lg px-1 py-1.5 z-[12]"
				>
					<div className="flex flex-col gap-1 border-b border-slate-100/40 pb-1 pt-1.5 mb-1">
						{options.map((option) => (
							<Link
								key={option.label}
								href={option.href}
								aria-current={option.href === pathname ? 'page' : undefined}
								className={clsx(
									'w-full text-left px-1.5 py-1.5 hover:text-white rounded-lg hover:bg-slate-50/10',
									option.href === pathname
										? 'border-l-2 border-slate-100 text-white bg-slate-100/10'
										: 'hover:bg-slate-50/10'
								)}
							>
								{option.label}
							</Link>
						))}
					</div>
					<div className="pt-2 px-1.5">
						<div className="flex gap-2 items-center">
							<Avatar hover src={user?.image} />
							<p>{user?.name}</p>
						</div>
						<button
							className="w-full text-left px-1 py-1.5 hover:text-white flex items-center hover:bg-slate-50/10 rounded-lg mt-2"
							onClick={() => signOut()}
						>
							<PiSignOutBold size={20} className="mr-1.5" />
							Log Out
						</button>
					</div>
				</PopoverPanel>
			</Popover>
		</header>
	);
};
