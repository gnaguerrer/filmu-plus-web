import { MovieItem } from './services';

export interface IPoster {
	id: number;
	title: string;
	overview: string;
	image: string;
	backdrop: string;
	rating: number;
	auldt?: boolean;
}

export interface IAvatar {
	src?: string;
	hover?: boolean;
}

export interface IPosterList {
	data: MovieItem[];
	isLoading?: boolean;
	title?: string;
}
