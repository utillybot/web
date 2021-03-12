import { useParams } from 'react-router-dom';
import { routes } from './routes';
import GuildContext from './components/GuildContext';
import Navbar from './components/Navbar';
import { getGuildIcon } from '../../../../helpers';
import Page from '../../../../components/Page';
import useProtectedFetch from '../../../../hooks/useProtectedFetch';
import type { PartialGuild } from '../../../../types';
import { createUseStyles } from 'react-jss';
import Routes from '../../../../../components/Routes';

const useStyles = createUseStyles({
	page: {
		display: 'flex',
		flexDirection: 'column',

		'& header img': {
			borderRadius: '50%',
		},
	},
});

export default function ServerManagement(): JSX.Element {
	const params = useParams<{ id: string }>();
	const styles = useStyles();

	const fetchResult = useProtectedFetch<PartialGuild>(
		`/api/dashboard/guilds/${params.id}`,
		true
	);

	if (!fetchResult[0]) return fetchResult[1];

	const guild = fetchResult[1];

	return (
		<Page className={styles.page}>
			<GuildContext.Provider value={{ guild: guild }}>
				<header>
					<img src={getGuildIcon(guild.id, guild.icon)} alt="Guild Icon" />
					<h1>{guild.name}</h1>
				</header>
				<Navbar />
				<Routes routes={routes} />
			</GuildContext.Provider>
		</Page>
	);
}
