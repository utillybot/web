import { protectedRoutes } from '../../routes';
import { NavLink } from 'react-router-dom';
import useCollapsed from '../../../components/Collapsable/useCollapsed';
import NavbarSection from './NavbarSection';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	links: {
		justifyContent: 'center',
	},
	item: {
		color: 'white',
		textDecoration: 'none',
		padding: '10px 20px',

		'&:hover': {
			color: '#b3b3b3',
		},
	},

	active: {
		color: '#b3b3b3',
	},
});

export default function NavbarLinks(): JSX.Element {
	const { setCollapsed } = useCollapsed();
	const styles = useStyles();
	return (
		<NavbarSection className={styles.links}>
			{protectedRoutes.map(
				({ path, name, exact, displayInNavbar }) =>
					(displayInNavbar ?? true) && (
						<NavLink
							exact={exact ?? true}
							className={styles.item}
							activeClassName={styles.active}
							key={name}
							to={path}
							onClick={() => setCollapsed(true)}
						>
							{name}
						</NavLink>
					)
			)}
		</NavbarSection>
	);
}
