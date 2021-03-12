import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		flex: 1,
	},
	'@keyframes spin': {
		to: {
			transform: 'rotate(360deg)',
		},
	},
	spinner: {
		width: '50px',
		height: '50px',
		border: '3px solid rgba(255, 255, 255, .3)',
		borderRadius: '50%',
		borderTopColor: ' #fff',
		animation: '$spin 800ms ease-in-out infinite',
	},
});

export default function Spinner(): JSX.Element {
	const styles = useStyles();

	return (
		<div className={styles.container}>
			<div className={styles.spinner} />
		</div>
	);
}
