'use client';

import React from 'react';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
import { images } from '@/utils';

const SignInPage = (): React.JSX.Element => {
	const session = useSession();

	if (session) {
		redirect('/');
	}

	return (
		<main className="w-screen h-screen bg-projector bg-center font-poppins">
			<div className="flex h-full  bg-gradient-to-bl  from-[#191817] via-[#6100C2]/40 to-[#6100C2]/60">
				<div className="w-full h-full flex flex-col items-center justify-center">
					<Image
						className="w-32 ml-2.5"
						src={images.filmuLogo}
						alt="filmu_plus_logo"
						width="0"
						height="0"
						sizes="100vw"
						placeholder="blur"
					/>
					<span className="mt-5 text-gray-50/90">Enjoy watching</span>
					<button
						className="button-contained mt-4 flex items-center"
						onClick={() => signIn('google')}
					>
						<span className="bg-white flex items-center justify-center rounded-full p-1 mr-2">
							<FcGoogle />
						</span>
						Sign in with Google
					</button>
				</div>
			</div>
		</main>
	);
};

export default SignInPage;
