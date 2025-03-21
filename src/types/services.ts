export interface DefaultListResponse<T> {
	page: number;
	results: T[];
	total_pages: number;
	total_results: number;
}

export interface DefaultListParams {
	include_adult?: boolean;
	include_video?: boolean;
	page?: number;
}

export interface MovieItem {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

export interface Genre {
	id: number;
	name: string;
}

export interface SerieItem {
	backdrop_path: string;
	id: number;
	name: string;
	original_name: string;
	overview: string;
	poster_path: string;
	media_type: string;
	adult: boolean;
	original_language: string;
	genre_ids: number[];
	popularity: number;
	first_air_date: string;
	vote_average: number;
	vote_count: number;
	origin_country: string[];
}

export interface MediaItem extends Partial<MovieItem>, Partial<SerieItem> {
	id: number;
	backdrop_path: string;
	overview: string;
	poster_path: string;
	vote_average: number;
	vote_count: number;
	original_language: string;
	genre_ids: number[];
	popularity: number;
	adult: boolean;
}
