import Navbar from './components/Navbar/Navbar';
import { routes } from './routes';
import { Suspense } from 'react';
import Spinner from '../components/Spinner';
import Routes from '../components/Routes';

export default function Main(): JSX.Element {
	return (
		<Suspense fallback={<Spinner />}>
			<Navbar />
			<Routes routes={routes} />
		</Suspense>
	);
}
