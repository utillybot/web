import { useLocation } from 'react-router-dom';
import type { Location } from 'history';
import { routes } from '../../routes';
import NavbarHeader from './NavbarHeader';
import NavbarLinks from './NavbarLinks';
import NavbarDashboard from './NavbarDashboard';
import useMatchMedia from '../../../hooks/useMatchMedia';
import CollapsableContent from '../../../components/Collapsable/CollapsableContent';
import Collapsable from '../../../components/Collapsable/Collapsable';
import { cmq } from '../../../helpers';
import type { NavbarRouteData } from '../../../components/types';
import { createUseStyles } from 'react-jss';

const matchPage = (pageRoute: NavbarRouteData, location: Location) => {
	return pageRoute.exact == undefined || pageRoute.exact
		? location.pathname === pageRoute.path
		: location.pathname.startsWith(pageRoute.path);
};

const useStyles = createUseStyles({
	navbar: {
		position: 'fixed',
		flexDirection: 'column',
		width: '100%',
		zIndex: 1,
		padding: '1%',
		display: 'flex',
		backdropFilter: 'blur(30px)',

		'@media screen and (min-width: 768px)': {
			flexDirection: 'row',
		},
	},
});

export default function Navbar(): JSX.Element {
	const isDesktop = useMatchMedia(cmq(['min-width', [768, 'px']]));
	const location = useLocation();
	const styles = useStyles();

	const linksData: Array<NavbarRouteData & { selected: boolean }> = [];
	let currentPage;

	for (const pageRoute of routes) {
		const selected = matchPage(pageRoute, location);
		if (selected) currentPage = pageRoute;
		linksData.push(Object.assign({ selected }, pageRoute));
	}
	const links = <NavbarLinks links={linksData} />;
	const header = <NavbarHeader currentPage={currentPage} />;
	const dashboard = <NavbarDashboard />;

	const mobileNav = (
		<>
			{header}
			<Collapsable>
				{links}
				{dashboard}
			</Collapsable>
		</>
	);

	const desktopNav = (
		<>
			{links}
			{header}
			{dashboard}
		</>
	);

	return (
		<CollapsableContent>
			<nav className={styles.navbar}>{isDesktop ? desktopNav : mobileNav}</nav>
		</CollapsableContent>
	);
}
