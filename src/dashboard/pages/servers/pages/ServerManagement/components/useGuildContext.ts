import { useContext } from 'react';
import type { GuildContextValue } from './GuildContext';
import GuildContext from './GuildContext';

export default function useGuildContext(): GuildContextValue {
	const context = useContext(GuildContext);
	if (!context)
		throw new Error('useGuildContext hook used outside of GuildContext');
	return context;
}
