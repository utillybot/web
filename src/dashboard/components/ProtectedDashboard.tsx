import UserContext from './UserContext';
import Navbar from './Navbar/Navbar';
import { protectedRoutes } from '../routes';
import useProtectedFetch from '../hooks/useProtectedFetch';
import type { User } from '../types';
import Routes from '../../components/Routes';

export default function ProtectedDashboard(): JSX.Element {
	const fetchResult = useProtectedFetch<User>('/api/dashboard/users');

	if (!fetchResult[0]) return fetchResult[1];

	const user = fetchResult[1];

	return (
		<UserContext.Provider value={user}>
			<Navbar />
			<Routes routes={protectedRoutes} />
		</UserContext.Provider>
	);
}
