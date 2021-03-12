import { useParams, useRouteMatch } from 'react-router-dom';
import Button from '../../../../components/Button';
import useCommandResource from '../components/useCommandResource';
import { createUseStyles } from 'react-jss';
import type { Command } from '../../../API';

const useStyles = createUseStyles({
	container: {
		display: 'grid',
		margin: '0 10%',
		gridTemplateRows: '1fr min-content',
		gridTemplateColumns: ' 1fr 1fr',
		gridRowGap: '20px',
		textAlign: 'center',

		'@media screen and (min-width: 768px)': {
			gridTemplateColumns: ' 1fr 1fr 1fr',
			gridRowGap: '50px',
		},
	},
	header: {
		textAlign: 'center',
		display: 'flex',
	},
	back: {
		padding: '20px 30px',
	},

	text: {
		flex: 1,
		marginRight: 'calc(100% / 3)',
	},

	button: {
		flex: 1,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default function CommandModule(): JSX.Element {
	const params = useParams<{ module?: string }>();
	const resource = useCommandResource();
	const styles = useStyles();

	const module = resource
		.read()
		.commandModules.find(
			mod => mod.name.toLowerCase() == params.module?.toLowerCase()
		);

	return (
		<>
			<div className={styles.header}>
				<div className={styles.button}>
					<Button to="/commands" className={styles.back}>
						ᐸ Back
					</Button>
				</div>
				<div className={styles.text}>
					{module ? <h1>{module.name} Module</h1> : ''}
				</div>
			</div>
			<div className={styles.container}>
				{module ? (
					module.commands.map(cmd => (
						<CommandTile key={cmd.name} command={cmd} />
					))
				) : (
					<h1>Command Module not found</h1>
				)}
			</div>
		</>
	);
}

const useCommandTileStyles = createUseStyles({
	command: {
		height: 'calc(100% - 30px)',
		padding: '5px',
		margin: '10px',
	},
});

interface CommandTileProps {
	command: Command;
}

function CommandTile({ command }: CommandTileProps): JSX.Element {
	const styles = useCommandTileStyles();

	const match = useRouteMatch();
	return (
		<Button
			to={`${match.url}/${command.name.toLowerCase()}`}
			className={styles.command}
		>
			<h1>u!{command.name.toLowerCase()}</h1>
			<p>{command.description}</p>
		</Button>
	);
}
