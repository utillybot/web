import useGuildContext from '../../components/useGuildContext';
import useProtectedFetch from '../../../../../../hooks/useProtectedFetch';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	container: {
		display: 'flex',
	},
});

export interface GuildSettings {
	prefix: string[];
}

export default function Settings(): JSX.Element {
	const guild = useGuildContext().guild;
	const fetchResult = useProtectedFetch<GuildSettings>(
		`/api/dashboard/guilds/${guild.id}/settings`,
		true
	);
	const styles = useStyles();

	if (!fetchResult[0]) return fetchResult[1];

	const settings = fetchResult[1];

	return (
		<div className={styles.container}>
			<h2>Prefixes:</h2>
			<ul>
				{settings.prefix.map(prefix => {
					return <li key={prefix}>{prefix}</li>;
				})}
			</ul>
		</div>
	);
}
