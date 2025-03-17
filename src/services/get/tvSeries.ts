import { DefaultListParams, DefaultListResponse, MovieItem } from '@/types';
import { axiosClient } from '../axiosClient';

export const getPopularSeriesTV = async (
	params?: DefaultListParams
): Promise<DefaultListResponse<MovieItem>> => {
	try {
		const response = await axiosClient().get('/tv/popular', { params });

		if (response.status === 200) {
			return response.data as DefaultListResponse<MovieItem>;
		}
		throw new Error('No popular TV series found');
	} catch (error) {
		console.error('Errot at getPopularSeriesTV', error);
		throw new Error('Unable to get popular TV series');
	}
};
