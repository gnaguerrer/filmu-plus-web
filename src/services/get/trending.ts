import { DefaultListParams, DefaultListResponse, MovieItem } from '@/types';
import { axiosClient } from '../axiosClient';

export const getTrending = async (
	time_window: 'day' | 'week',
	params?: DefaultListParams
): Promise<DefaultListResponse<MovieItem>> => {
	try {
		const response = await axiosClient().get(`/trending/all/${time_window}`, {
			params,
		});

		if (response.status === 200) {
			return response.data as DefaultListResponse<MovieItem>;
		}
		throw new Error('No trendings found');
	} catch (error) {
		console.error('Errot at getTrending', error);
		throw new Error('Unable to get trending');
	}
};
