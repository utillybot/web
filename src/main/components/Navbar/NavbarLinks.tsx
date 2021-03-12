import NavbarLink from './NavbarLink';
import NavbarContainer from './NavbarContainer';
import type { NavbarRouteData } from '../../../components/types';
import { createUseStyles } from 'react-jss';

interface NavbarLinksProps {
	links: Array<NavbarRouteData & { selected: boolean }>;
}

const useStyles = createUseStyles({
	links: {
		justifyContent: 'flex-start',
		flexDirection: 'column',

		'@media screen and (min-width: 768px)': {
			flexDirection: 'row',
		},
	},
	selected: {
		color: '#b3b3b3',
	},
});

export default function NavbarLinks({ links }: NavbarLinksProps): JSX.Element {
	const styles = useStyles();

	return (
		<NavbarContainer className={styles.links}>
			{links.map(pageRoute => (
				<NavbarLink
					key={pageRoute.name}
					to={pageRoute.path}
					className={pageRoute.selected ? styles.selected : ''}
				>
					{pageRoute.name}
				</NavbarLink>
			))}
		</NavbarContainer>
	);
}
