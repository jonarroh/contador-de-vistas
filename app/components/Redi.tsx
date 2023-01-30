'use client';

import { useEffect } from 'react';

export default function page({ url }: { url: string }) {
	useEffect(() => {
		window.location.href = url;
	}, []);

	return <div>Redirecting...</div>;
}
