import { get } from '../../API';
import Page from '../../components/Page';
import ErrorBoundary from './components/ErrorBoundary';
import CommandResourceContext from './components/CommandResourceContext';
import type { RouteData } from '../../../components/types';
import CommandModules from './pages/CommandModules';
import CommandModule from './pages/CommandModule';
import CommandPage from './pages/CommandPage';
import { createUseStyles } from 'react-jss';
import Routes from '../../../components/Routes';

const useStyles = createUseStyles({
	page: {
		textAlign: 'center',
		backgroundColor: '#282828',
		display: 'flex',
		flexDirection: 'column',

		'& header': {
			width: '100%',
		},
	},
});
const routes: RouteData[] = [
	{
		path: '/commands',
		page: CommandModules,
		exact: true,
	},
	{
		path: '/commands/:module',
		page: CommandModule,
		exact: true,
	},
	{
		path: '/commands/:module/:command',
		page: CommandPage,
		exact: true,
	},
];

const commandResource = get().commands;

export default function Commands(): JSX.Element {
	const styles = useStyles();

	return (
		<Page className={styles.page}>
			<ErrorBoundary>
				<CommandResourceContext.Provider value={commandResource}>
					<header>
						<h2>View all the commands for Utilly!</h2>
					</header>
					<Routes routes={routes} />
				</CommandResourceContext.Provider>
			</ErrorBoundary>
		</Page>
	);
}
