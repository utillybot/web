import NavbarContainer from './NavbarContainer';
import useMatchMedia from '../../../hooks/useMatchMedia';
import { cmq } from '../../../helpers';
import Hamburger from '../../../components/Collapsable/Hamburger';
import type { NavbarRouteData } from '../../../components/types';
import { createUseStyles, useTheme } from 'react-jss';
import type { Theme } from '../../../Theme';

const useStyles = createUseStyles<Theme>(theme => ({
	header: {
		minHeight: '40px',
		justifyContent: 'center',
		textAlign: 'center',

		'& h1': {
			fontSize: '2em',
			margin: 0,
			color: 'white',
			fontFamily: theme.font,
			flex: 1,
		},
		'&:before': {
			content: '""',
			flex: 1,
		},
		'@media screen and (min-width: 768px)': {
			flex: 'none',
		},
	},
	hamburger: {
		justifyContent: 'flex-end',
	},
}));

interface NavbarHeaderProps {
	currentPage?: NavbarRouteData;
}

export default function NavbarHeader({
	currentPage,
}: NavbarHeaderProps): JSX.Element {
	const isDesktop = useMatchMedia(cmq(['min-width', [768, 'px']]));
	const theme = useTheme();
	const styles = useStyles(theme);

	return (
		<NavbarContainer className={styles.header}>
			<h1>{currentPage?.name}</h1>
			{!isDesktop && (
				<NavbarContainer className={styles.hamburger}>
					<Hamburger />
				</NavbarContainer>
			)}
		</NavbarContainer>
	);
}
