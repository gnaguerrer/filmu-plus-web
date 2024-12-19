import { NextRequest } from 'next/server';
import { NextRequestWithAuth, withAuth } from 'next-auth/middleware';

export default async function middleware(req: NextRequest) {
	return withAuth(req as NextRequestWithAuth, {
		pages: {
			signIn: '/signIn',
		},
	});
}
