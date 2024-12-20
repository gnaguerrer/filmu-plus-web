import { DefaultListParams, DefaultListResponse, MovieItem } from '@/types';
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
		throw new Error('No movies found');
	} catch (error) {
		console.error('Errot at getMovies', error);
		throw new Error('Unable to get movies');
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
		throw new Error('No movies found');
	} catch (error) {
		console.error('Errot at getMovies', error);
		throw new Error('Unable to get movies');
	}
};
