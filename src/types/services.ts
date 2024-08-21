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

export enum TimeWindow {
	day = 'day',
	week = 'week',
}
