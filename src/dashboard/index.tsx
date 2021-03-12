import ProtectedDashboard from './components/ProtectedDashboard';
import { Switch, Route } from 'react-router-dom';
import CacheStorageContext from './components/CacheStorageContext';
import { useRef } from 'react';
import Routes from '../components/Routes';
import { staticRoutes } from './routes';

export default function Dashboard(): JSX.Element {
	const cacheRef = useRef({});

	return (
		<Switch>
			<CacheStorageContext.Provider value={cacheRef.current}>
				<Routes routes={staticRoutes} />
				<Route component={ProtectedDashboard} />
			</CacheStorageContext.Provider>
		</Switch>
	);
}
