import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	stat: {
		backgroundColor: '#404040',
		margin: '2.5%',
		padding: '2.5%',
		width: '25%',
	},
});

interface StatsProps {
	statName: string;
	statValue: string;
	units: string;
}

export default function Stat({
	statName,
	statValue,
	units,
}: StatsProps): JSX.Element {
	const styles = useStyles();

	return (
		<div className={styles.stat}>
			<h1>
				<b>{statName}</b>
			</h1>
			<h2>
				{statValue} {units}
			</h2>
		</div>
	);
}
