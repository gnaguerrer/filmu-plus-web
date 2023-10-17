import axios, { AxiosResponse } from 'axios';

interface AxiosClientValues {
	get: <R, P>(
		path: string,
		params?: P | undefined
	) => Promise<AxiosResponse<R, any>>;
	post: <B, R, P>(
		path: string,
		body: B,
		params?: P | undefined
	) => Promise<AxiosResponse<R, any>>;
	put<B, R, P>(
		path: string,
		body: B,
		params?: P
	): Promise<AxiosResponse<R, any>>;
	patch<B, R, P>(
		path: string,
		body: B,
		params?: P
	): Promise<AxiosResponse<R, any>>;
	delete<R, P>(path: string, params?: P): Promise<AxiosResponse<R, any>>;
}

axios.defaults.validateStatus = () => true;

export const axiosClient = (url?: string): AxiosClientValues => {
	const baseURL = url ?? process.env.NEXT_PUBLIC_TMDB_API_URL;
	const axiosInstance = axios.create({
		baseURL,
	});

	axiosInstance.interceptors.request.use(
		async (config) => {
			const configuration = config;

			if (configuration.headers) {
				configuration.headers.Authorization = `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`;
			}
			return configuration;
		},
		(error) => {
			return Promise.reject(error);
		}
	);

	const get = async <R, P>(
		path: string,
		params?: P
	): Promise<AxiosResponse<R, any>> => {
		const response: AxiosResponse<R> = await axiosInstance.get(path, {
			...params,
		});
		return response;
	};

	const post = async <B, R, P>(
		path: string,
		body: B,
		params?: P
	): Promise<AxiosResponse<R, any>> => {
		const response: AxiosResponse<R> = await axiosInstance.post(path, body, {
			...params,
		});
		return response;
	};

	const put = async <B, R, P>(
		path: string,
		body: B,
		params?: P
	): Promise<AxiosResponse<R, any>> => {
		const response: AxiosResponse<R> = await axiosInstance.put(path, body, {
			...params,
		});
		return response;
	};

	const patch = async <B, R, P>(
		path: string,
		body: B,
		params?: P
	): Promise<AxiosResponse<R, any>> => {
		const response: AxiosResponse<R> = await axiosInstance.patch(path, body, {
			...params,
		});
		return response;
	};

	const axiosDelete = async <R, P>(
		path: string,
		params?: P
	): Promise<AxiosResponse<R, any>> => {
		const response: AxiosResponse<R> = await axiosInstance.delete(path, {
			...params,
		});
		return response;
	};

	return {
		get,
		post,
		put,
		patch,
		delete: axiosDelete,
	};
};
