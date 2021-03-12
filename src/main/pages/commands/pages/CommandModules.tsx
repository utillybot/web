import useCommandResource from '../components/useCommandResource';
import { createUseStyles } from 'react-jss';
import type { CommandModule } from '../../../API';
import { useRouteMatch } from 'react-router-dom';
import Button from '../../../../components/Button';

const useStyles = createUseStyles({
	container: {
		display: 'grid',
		margin: '0 10%',
		gridTemplateColumns: '1fr 1fr',
		gridRowGap: '50px',
		textAlign: 'center',
	},
});

export default function CommandModules(): JSX.Element {
	const resource = useCommandResource();
	const response = resource.read();
	const styles = useStyles();

	return (
		<div className={styles.container}>
			{response.commandModules.map(module => (
				<CommandModuleTile key={module.name} commandModule={module} />
			))}
		</div>
	);
}

const useCommandModuleTileStyles = createUseStyles({
	module: {
		height: 'calc(100% - 30px)',
		backgroundColor: '#404040',
		padding: '5px',
		margin: '10px',
	},
});
interface CommandModuleTileProps {
	commandModule: CommandModule;
}

function CommandModuleTile({
	commandModule,
}: CommandModuleTileProps): JSX.Element {
	const match = useRouteMatch();
	const styles = useCommandModuleTileStyles();
	return (
		<Button
			to={`${match.url}/${commandModule.name.toLowerCase()}`}
			className={styles.module}
		>
			<h1>{commandModule.name}</h1>
			<p>{commandModule.description}</p>
		</Button>
	);
}
