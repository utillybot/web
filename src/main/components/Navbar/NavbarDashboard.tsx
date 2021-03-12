import NavbarLink from './NavbarLink';
import NavbarContainer from './NavbarContainer';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	dashboard: {
		justifyContent: 'flex-end',
	},

	item: {
		backgroundColor: '#4e5d94',
		borderRadius: '5%',
	},
});

export default function NavbarDashboard(): JSX.Element {
	const styles = useStyles();
	return (
		<NavbarContainer className={styles.dashboard}>
			<NavbarLink to="/dashboard" className={styles.item}>
				Dashboard
			</NavbarLink>
		</NavbarContainer>
	);
}
