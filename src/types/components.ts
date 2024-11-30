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
