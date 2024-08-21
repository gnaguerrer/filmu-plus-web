import Image from 'next/image';
import { images } from '@/utils';

const Loading = (): React.JSX.Element => {
	return (
		<div className="h-screen w-screen centered-flex">
			<Image
				className="w-28 animate-scale-pulse"
				src={images.filmuLogo}
				alt="filmu_plus_logo"
				width="0"
				height="0"
				sizes="100vw"
			/>
		</div>
	);
};

export default Loading;
