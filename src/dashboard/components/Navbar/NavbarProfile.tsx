import CollapsableContent from '../../../components/Collapsable/CollapsableContent';
import NavbarSection from './NavbarSection';
import useUserContext from '../useUserContext';
import type { RefObject } from 'react';
import { forwardRef, useRef } from 'react';
import useMatchMedia from '../../../hooks/useMatchMedia';
import { cmq } from '../../../helpers';
import Hamburger from '../../../components/Collapsable/Hamburger';
import { createUseStyles } from 'react-jss';
import useCollapsed from '../../../components/Collapsable/useCollapsed';
import { getUserAvatar } from '../../helpers';
import Collapsable from '../../../components/Collapsable/Collapsable';
import Button from '../../../components/Button';

export const useStyles = createUseStyles({
	profile: {
		justifyContent: 'flex-end',
		flexDirection: 'row',
		width: '100%',
	},

	button: {
		backgroundColor: 'rgba(0, 0, 0, 0)',
		display: 'flex',
		flexDirection: 'row',
		cursor: 'pointer',
		alignItems: 'center',

		'& p': {
			marginLeft: '10px',
		},

		'& img': {
			width: 'calc(var(--navbar-height) * 0.75)',
			height: 'calc(var(--navbar-height) * 0.75)',
			margin: '3.5px',
			borderRadius: '50%',

			'@media screen and (min-width: 768px)': {
				margin: '0 10px',
			},
		},

		'&:hover': {
			backgroundColor: 'rgba(0, 0, 0, 0.5)',
		},
	},

	hamburger: {
		display: 'flex',
		justifyContent: 'flex-start',
		flex: 1,

		'& button': {
			width: 'calc(var(--navbar-height) * 0.75)',
			height: 'calc(var(--navbar-height) * 0.75)',
		},
	},
});

export default function NavbarProfile(): JSX.Element {
	const user = useUserContext();
	const profileRef = useRef<HTMLDivElement>(null);
	const isDesktop = useMatchMedia(cmq(['min-width', [768, 'px']]));
	const styles = useStyles();
	if (!user) return <></>;

	return (
		<NavbarSection className={styles.profile}>
			{!isDesktop && (
				<div className={styles.hamburger}>
					<Hamburger />
				</div>
			)}
			<CollapsableContent>
				<NavbarProfileButton ref={profileRef} />
				<ProfileDropdown profileRef={profileRef} />
			</CollapsableContent>
		</NavbarSection>
	);
}

// eslint-disable-next-line react/display-name
const NavbarProfileButton = forwardRef<HTMLDivElement>((props, profileRef) => {
	const { setCollapsed } = useCollapsed();
	const isDesktop = useMatchMedia(cmq(['min-width', [768, 'px']]));
	const user = useUserContext();
	const styles = useStyles();

	if (!user) return <></>;

	return (
		<div
			ref={profileRef}
			className={styles.button}
			onClick={() => setCollapsed(prevState => !prevState)}
		>
			{isDesktop && (
				<p>
					{user.username}#{user.discriminator}
				</p>
			)}
			<img
				src={getUserAvatar(user.id, user.avatar, user.discriminator, 64)}
				alt="User Avatar"
			/>
		</div>
	);
});

const useProfileDropdownStyles = createUseStyles({
	dropdown: {
		zIndex: 3,
		position: 'absolute',
		top: 'var(--navbar-height)',
		display: 'flex',
		flexDirection: 'column',
		backdropFilter: 'blur(30px)',
		backgroundColor: 'rgba(0, 0, 0, 0.3)',

		'& a': {
			width: '100%',
			padding: '15px 0',
			backgroundColor: 'transparent',

			'&:hover': {
				backgroundColor: 'rgba(0, 0, 0, 0.7)',
			},
		},

		'@media screen and (max-width: 767px)': {
			width: '150px !important',
		},
	},
});

interface ProfileDropdownProps {
	profileRef: RefObject<HTMLDivElement>;
}

function ProfileDropdown({ profileRef }: ProfileDropdownProps): JSX.Element {
	const { setCollapsed } = useCollapsed();
	const styles = useProfileDropdownStyles();

	return (
		<>
			<Collapsable
				className={styles.dropdown}
				style={{ width: profileRef.current?.scrollWidth + 'px' }}
			>
				<Button to="/dashboard/servers" onClick={() => setCollapsed(true)}>
					My Servers
				</Button>
				<Button
					to="/api/dashboard/logout"
					onClick={() => document.location.assign('/api/dashboard/logout')}
				>
					Logout
				</Button>
			</Collapsable>
		</>
	);
}
