import { useEffect, useState } from 'react';

export default function useMatchMedia(mediaQuery: string): boolean {
	const [isMatched, setIsMatched] = useState(
		window.matchMedia(mediaQuery).matches
	);

	useEffect(() => {
		const updateMedia = (e: MediaQueryListEvent) => setIsMatched(e.matches);
		const matched = window.matchMedia(mediaQuery);
		matched.addEventListener('change', updateMedia);
		return () => matched.removeEventListener('change', updateMedia);
	}, [mediaQuery]);

	return isMatched;
}
