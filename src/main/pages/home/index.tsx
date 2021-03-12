import logo from '../../../../assets/logo.png';
import Page from '../../components/Page';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	page: {
		fontSize: '2em',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',

		'& img': {
			borderRadius: '100%',
			height: ' 7em',
		},
	},
});

export default function Home(): JSX.Element {
	const styles = useStyles();

	return (
		<Page className={styles.page}>
			<img src={logo} alt="Utilly Logo" />
			<h1>Utilly</h1>
			<h2>The tool for the job</h2>
		</Page>
	);
}
