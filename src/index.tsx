import { Suspense, lazy, StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Spinner from './components/Spinner';
import { jss, ThemeProvider } from 'react-jss';
import { defaultTheme } from './Theme';
import './CSSRules';

const Main = lazy(() => import('./main'));
const Dashboard = lazy(() => import('./dashboard'));

jss.setup({ id: { minify: true } });

ReactDOM.render(
	<StrictMode>
		<Suspense fallback={<Spinner />}>
			<ThemeProvider theme={defaultTheme}>
				<BrowserRouter>
					<Switch>
						<Route path="/dashboard" component={Dashboard} />
						<Route path="/" component={Main} />
					</Switch>
				</BrowserRouter>
			</ThemeProvider>
		</Suspense>
	</StrictMode>,
	document.getElementById('root')
);
