import { useContext } from 'react';
import type { GuildsContextValue } from './GuildsContext';
import GuildsContext from './GuildsContext';

export default function useGuildsContext(): GuildsContextValue | undefined {
	return useContext(GuildsContext);
}
