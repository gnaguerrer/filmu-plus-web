import { MediaItem } from './services';

export interface IPoster {
	id: number;
	title: string;
	image: string;
	rating: number;
}

export interface IAvatar {
	src?: string;
	hover?: boolean;
}

export interface IPosterList {
	data: MediaItem[];
	isLoading?: boolean;
	title?: string;
}

export interface IFeaturedPost {
	image: string;
	name: string;
	average: number;
	date?: string;
	overview: string;
}
