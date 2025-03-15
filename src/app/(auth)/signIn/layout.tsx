import React from 'react';

const SigninLayout = ({
	children,
}: {
	children: React.ReactNode;
}): React.JSX.Element => {
	return <body>{children}</body>;
};

export default SigninLayout;
