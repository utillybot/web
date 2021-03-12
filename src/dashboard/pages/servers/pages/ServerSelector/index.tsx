import Page from '../../../../components/Page';
import Spinner from '../../../../../components/Spinner';
import useGuildsContext from '../../components/useUserContext';
import { createUseStyles } from 'react-jss';
import type { PartialGuild } from '../../../../types';
import Button from '../../../../../components/Button';
import { mc } from '../../../../../helpers';
import { getGuildIcon } from '../../../../helpers';

const useStyles = createUseStyles({
	page: {
		backgroundColor: '#282828',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',

		paddingLeft: '10%',
		paddingRight: '10%',

		textAlign: 'center',
	},

	servers: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
	},
});

export default function ServerSelector(): JSX.Element {
	const result = useGuildsContext();
	const styles = useStyles();

	if (!result) return <Spinner />;

	return (
		<Page className={styles.page}>
			<h1>Click on a server to manage it</h1>
			<h3>
				Note: The servers shown are the ones that you are the owner of or have
				administrator privileges in.
			</h3>
			<div className={styles.servers}>
				{result.present.map(guild => (
					<ServerTile key={guild.id} guild={guild} />
				))}
				{result.notPresent.map(guild => (
					<ServerTile key={guild.id} guild={guild} inactive />
				))}
			</div>
		</Page>
	);
}

const useServerTileStyles = createUseStyles({
	inactive: {
		filter: 'brightness(50%)',
	},

	tile: {
		width: '148px',
		margin: '10px',
		padding: ' 10px',
		backgroundColor: '#404040',
		cursor: 'pointer',
		'& img': {
			borderRadius: '50%',
			borderColor: 'white',
			width: '128px',
			height: '128px',
		},

		'&:hover': {
			backgroundColor: '#606060',
		},
	},
});

interface ServerTileProps {
	guild: PartialGuild;
	inactive?: boolean;
}

function ServerTile({ guild, inactive }: ServerTileProps): JSX.Element {
	const styles = useServerTileStyles();

	return (
		<Button
			className={mc(styles.tile, { [styles.inactive]: inactive })}
			to={`/dashboard/servers/${guild.id}`}
		>
			<img src={getGuildIcon(guild.id, guild.icon)} alt="Guild Icon" />
			<p>{guild.name}</p>
		</Button>
	);
}
