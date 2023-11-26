'use client';

import { useLayoutEffect, useState } from 'react';

interface WindowSize {
	width: number | null;
	height: number | null;
}

export const useWindowSize = (): WindowSize => {
	const [size, setSize] = useState<WindowSize>({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	const handleResize = (): void => {
		setSize({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	};

	useLayoutEffect(() => {
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return size;
};
