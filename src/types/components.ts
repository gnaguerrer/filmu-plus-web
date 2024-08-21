export interface IPoster {
	id: number;
	title: string;
	overview: string;
	image: string;
	backdrop: string;
	rating: number;
	auldt?: boolean;
}

export interface IPosterList {
	data: IPoster[];
	totalPosts: number;
	title?: string;
}
