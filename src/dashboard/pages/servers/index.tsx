import ServerSelector from './pages/ServerSelector';
import ServerManagement from './pages/ServerManagement';
import type { RouteData } from '../../../components/types';
import useProtectedFetch from '../../hooks/useProtectedFetch';
import GuildsContext from './components/GuildsContext';
import type { GuildsContextValue } from './components/GuildsContext';
import Routes from '../../../components/Routes';

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
			<Routes routes={routes} />
		</GuildsContext.Provider>
	);
}
