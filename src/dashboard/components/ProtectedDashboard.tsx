import UserContext from './UserContext';
import Navbar from './Navbar/Navbar';
import { protectedRoutes } from '../routes';
import parseRoutes from '../../components/Routes';
import useProtectedFetch from '../hooks/useProtectedFetch';
import type { User } from '../types';

export default function ProtectedDashboard(): JSX.Element {
	const fetchResult = useProtectedFetch<User>('/api/dashboard/users');

	if (!fetchResult[0]) return fetchResult[1];

	const user = fetchResult[1];

	return (
		<UserContext.Provider value={user}>
			<Navbar />
			{parseRoutes(protectedRoutes)}
		</UserContext.Provider>
	);
}
