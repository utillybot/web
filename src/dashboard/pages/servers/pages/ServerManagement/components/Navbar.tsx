import { routes } from '../routes';
import { NavLink } from 'react-router-dom';
import useGuildContext from './useGuildContext';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	navbar: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		width: '100%',
		padding: '1%',
	},
	navbarItem: {
		color: 'white',
		textDecoration: 'none',
		padding: '8px',

		'&:hover': {
			color: '#b3b3b3',
		},
	},
	active: {
		color: '#b3b3b3',
	},
});

export default function Navbar(): JSX.Element {
	const guild = useGuildContext().guild;
	const styles = useStyles();

	return (
		<nav className={styles.navbar}>
			{routes.map(({ path, name, exact }) => (
				<NavLink
					exact={exact ?? true}
					className={styles.navbarItem}
					activeClassName={styles.active}
					key={name}
					to={path.replace(':id', guild.id)}
				>
					{name}
				</NavLink>
			))}
		</nav>
	);
}
