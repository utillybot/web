import { Route, Switch } from 'react-router-dom';
import type { RouteData } from './types';

interface RoutesProps {
	routes: RouteData[];
}

export default function Routes({ routes }: RoutesProps): JSX.Element {
	return (
		<Switch>
			{routes.map(({ exact, path, page }) => (
				<Route exact={exact} key={path} path={path} component={page} />
			))}
		</Switch>
	);
}
