import { useEffect, useState } from 'react';
import { fetchStats } from '../../API';
import Stat from './Stat';
import Page from '../../components/Page';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	page: {
		textAlign: 'center',
		backgroundColor: '#282828',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',

		'& header': {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			height: '35%',
		},
	},
	stats: {
		width: '100%',
		textAlign: 'center',
	},
	container: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default function About(): JSX.Element {
	const [guilds, setGuilds] = useState<number>();
	const [users, setUsers] = useState<number>();
	const styles = useStyles();

	const tick = async () => {
		const stats = await fetchStats();
		if (stats) {
			setGuilds(stats.guilds);
			setUsers(stats.users);
		}
	};

	useEffect(() => {
		tick();
		const timerID = setInterval(tick, 15 * 1000);
		return () => clearInterval(timerID);
	}, []);

	return (
		<Page className={styles.page}>
			<header>
				<h1>
					Utilly is a modular bot that contains many tools for server owners,
					while also being customizable.
				</h1>
			</header>
			<div className={styles.stats}>
				<div>
					<h1>Statistics</h1>
					<h4>These statistics update every 30 seconds</h4>
				</div>
				<div className={styles.container}>
					<Stat
						statName="Guilds"
						statValue={guilds ? guilds.toString() : 'Loading stat'}
						units="guilds"
					/>
					<Stat
						statName="Users"
						statValue={users ? users.toString() : 'Loading stat'}
						units="users"
					/>
				</div>
			</div>
		</Page>
	);
}
