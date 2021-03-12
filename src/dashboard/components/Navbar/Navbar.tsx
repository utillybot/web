import NavbarBack from './NavbarBack';
import NavbarLinks from './NavbarLinks';
import NavbarProfile from './NavbarProfile';
import CollapsableContent from '../../../components/Collapsable/CollapsableContent';
import useMatchMedia from '../../../hooks/useMatchMedia';
import { cmq } from '../../../helpers';
import Collapsable from '../../../components/Collapsable/Collapsable';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	navbar: {
		'--navbar-height': '60px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: '8px',
		zIndex: 1,

		'@media screen and (min-width: 768px)': {
			flexDirection: 'row',
			height: 'var(--navbar-height)',
		},
	},

	collapsing: {
		position: 'absolute',
		width: '100%',
		top: '60px',
		backdropFilter: 'blur(30px)',
	},
});

export default function Navbar(): JSX.Element {
	const isDesktop = useMatchMedia(cmq(['min-width', [768, 'px']]));
	const styles = useStyles();

	const back = <NavbarBack />;
	const links = <NavbarLinks />;
	const profile = <NavbarProfile />;
	return (
		<div className={styles.navbar}>
			<CollapsableContent>
				{isDesktop ? (
					<>
						{back}
						{links}
						{profile}
					</>
				) : (
					<>
						{profile}
						<Collapsable className={styles.collapsing}>
							{links}
							{back}
						</Collapsable>
					</>
				)}
			</CollapsableContent>
		</div>
	);
}
