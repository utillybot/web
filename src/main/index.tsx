import Navbar from './components/Navbar/Navbar';
import { routes } from './routes';
import PreloadLazyComponents from '../components/PreloadLazyComponents';
import { Suspense } from 'react';
import Spinner from '../components/Spinner';
import parseRoutes from '../components/Routes';

export default function Main(): JSX.Element {
	return (
		<Suspense fallback={<Spinner />}>
			<Navbar />
			<PreloadLazyComponents />
			{parseRoutes(routes)}
		</Suspense>
	);
}
