import { useContext } from 'react';
import CommandResourceContext from './CommandResourceContext';
import type { CommandsResponse, Resource } from '../../../API';

export default function useCommandResource(): Resource<CommandsResponse> {
	const context = useContext(CommandResourceContext);
	if (!context)
		throw new Error(
			'useCommandResource hook used outside of CommandResourceContext'
		);
	return context;
}
