import { useContext } from 'react';
import type { CollapsableContextValue } from './CollapsableContext';
import CollapsableContext from './CollapsableContext';

export default function useCollapsed(): CollapsableContextValue {
	const context = useContext(CollapsableContext);
	if (!context)
		throw new Error('useCollapsed hook used outside of CollapsableContext');
	return context;
}
