import Image from 'next/image';
import Link from 'next/link';
import { images } from '@/utils';

export const Footer = (): React.JSX.Element => {
	return (
		<footer className="flex items-center justify-center flex-col pt-4 pb-6">
			<Image
				className="w-20"
				src={images.filmuLogo}
				alt="filmu_plus_logo"
				width="0"
				height="0"
				sizes="100vw"
				placeholder="blur"
			/>
			<span className="mt-3 text-sm">
				Made with ❤️ by
				<Link
					className="ml-1 underline hover:text-slate-100"
					href="https://github.com/gnaguerrer"
					target="_blank"
				>
					Gina Guerrero
				</Link>
			</span>
		</footer>
	);
};
