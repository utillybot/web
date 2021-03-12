import { useParams } from 'react-router-dom';
import type { Command, CommandModule } from '../../../API';
import Button from '../../../../components/Button';
import useCommandResource from '../components/useCommandResource';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	text: {
		display: 'flex',
		justifyContent: 'center',
	},

	header: {
		textAlign: 'center',
		display: 'flex',

		'& $text': {
			flex: 1,
			marginRight: 'calc(100% / 3)',
		},
	},

	back: {
		padding: '20px 30px',
	},

	button: {
		flex: 1,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default function CommandPage(): JSX.Element {
	const resource = useCommandResource();
	const params = useParams<{ module?: string; command?: string }>();
	const styles = useStyles();

	const moduleParam = params.module;
	const commandParam = params.command;

	let command: Command | undefined = undefined;
	let module: CommandModule | undefined = undefined;

	for (const mod of resource.read().commandModules) {
		if (moduleParam?.toLowerCase() == mod.name.toLowerCase()) {
			for (const cmd of mod.commands) {
				if (commandParam?.toLowerCase() == cmd.name.toLowerCase()) {
					command = cmd;
					module = mod;
				}
			}
		}
	}

	return (
		<>
			<div className={styles.header}>
				<div className={styles.button}>
					<Button
						to={`/commands${`/${module?.name?.toLowerCase()}` ?? ''}`}
						className={styles.back}
					>
						ᐸ Back
					</Button>
				</div>
				<div className={styles.text}>
					{module ? <h1>{command?.name ?? ''} Command</h1> : ''}
				</div>
			</div>
			<div className={styles.text}>
				{command ? (
					<CommandCard
						name={command.name}
						description={command.description}
						usage={command.usage}
						triggers={command.triggers}
					/>
				) : (
					<h1>Command not found</h1>
				)}
			</div>
		</>
	);
}

const useCommandCardStyles = createUseStyles({
	card: {
		margin: [[10, 'calc(10% + 10px)']],
		backgroundColor: '#404040',
		width: '100%',
		padding: '20px',
	},
});

function CommandCard({
	name,
	description,
	triggers,
	usage,
}: Command): JSX.Element {
	const styles = useCommandCardStyles();

	return (
		<div className={styles.card}>
			<h1>u!{name.toLowerCase()}</h1>
			<h3>{description}</h3>
			<h3>
				<b>Usage: </b>
				<code>
					u!{name.toLowerCase()} {usage}
				</code>
			</h3>
			{triggers.length > 0 && (
				<h3>
					<b>Aliases:</b>{' '}
					<code>{triggers.map(alias => `u!${alias}`).join(', ')}</code>
				</h3>
			)}
		</div>
	);
}
