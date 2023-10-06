'use client';

import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

export const NextAuthProvider = ({
	children,
}: {
	children: ReactNode;
}): React.JSX.Element => {
	return <SessionProvider>{children}</SessionProvider>;
};
