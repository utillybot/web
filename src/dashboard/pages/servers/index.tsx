import ServerSelector from './pages/ServerSelector';
import ServerManagement from './pages/ServerManagement';
import type { RouteData } from '../../../components/types';
import parseRoutes from '../../../components/Routes';
import useProtectedFetch from '../../hooks/useProtectedFetch';
import GuildsContext from './components/GuildsContext';
import type { GuildsContextValue } from './components/GuildsContext';

const routes: RouteData[] = [
	{
		path: '/dashboard/servers',
		page: ServerSelector,
		exact: true,
	},
	{
		path: '/dashboard/servers/:id',
		page: ServerManagement,
		exact: false,
	},
];

export default function Servers(): JSX.Element {
	const fetchResults = useProtectedFetch<GuildsContextValue>(
		'/api/dashboard/guilds',
		true
	);

	return (
		<GuildsContext.Provider
			value={fetchResults[0] ? fetchResults[1] : undefined}
		>
			{parseRoutes(routes)}
		</GuildsContext.Provider>
	);
}
