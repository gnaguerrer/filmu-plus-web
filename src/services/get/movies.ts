import {
	DefaultListParams,
	DefaultListResponse,
	Genre,
	MovieItem,
} from '@/types';
import { axiosClient } from '..';

export const getMovies = async (
	params?: DefaultListParams
): Promise<DefaultListResponse<MovieItem>> => {
	try {
		const response = await axiosClient().get('/discover/movie', { params });

		if (response.status === 200) {
			return response.data as DefaultListResponse<MovieItem>;
		}
		throw new Error('No movies found');
	} catch (error) {
		console.error('Errot at getMovies', error);
		throw new Error('Unable to get movies');
	}
};

export const getPopularMovies = async (
	params?: DefaultListParams
): Promise<DefaultListResponse<MovieItem>> => {
	try {
		const response = await axiosClient().get('/movie/popular', { params });

		if (response.status === 200) {
			return response.data as DefaultListResponse<MovieItem>;
		}
		throw new Error('No popular movies found');
	} catch (error) {
		console.error('Errot at getPopularMovies', error);
		throw new Error('Unable to get popular movies');
	}
};

export const getUpcomingMovies = async (
	params?: DefaultListParams
): Promise<DefaultListResponse<MovieItem>> => {
	try {
		const response = await axiosClient().get('/movie/upcoming', { params });

		if (response.status === 200) {
			return response.data as DefaultListResponse<MovieItem>;
		}
		throw new Error('No upcoming movies found');
	} catch (error) {
		console.error('Errot at getUpcomingMovies', error);
		throw new Error('Unable to get upcoming movies');
	}
};

export const getTopRatedMovies = async (
	params?: DefaultListParams
): Promise<DefaultListResponse<MovieItem>> => {
	try {
		const response = await axiosClient().get('/movie/top_rated', { params });

		if (response.status === 200) {
			return response.data as DefaultListResponse<MovieItem>;
		}
		throw new Error('No top rated movies found');
	} catch (error) {
		console.error('Errot at getTopRatedMovies', error);
		throw new Error('Unable to get top rated movies');
	}
};

export const getMovieGenres = async (): Promise<{ genres: Genre[] }> => {
	try {
		const response = await axiosClient().get('/genre/movie/list');

		if (response.status === 200) {
			return response.data as { genres: Genre[] };
		}
		throw new Error('No movies genres found');
	} catch (error) {
		console.error('Errot at getMovieGenres', error);
		throw new Error('Unable to get movies genres');
	}
};
