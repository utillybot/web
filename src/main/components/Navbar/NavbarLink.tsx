import type { LinkProps } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { mc } from '../../../helpers';
import useCollapsed from '../../../components/Collapsable/useCollapsed';
import { createUseStyles, useTheme } from 'react-jss';
import type { Theme } from '../../../Theme';

const useStyles = createUseStyles<Theme>(theme => ({
	link: {
		fontFamily: theme.font,
		textDecoration: 'none',
		color: 'white',
		padding: '8px',
		textAlign: 'center',
		width: '100%',

		'&:hover': {
			color: '#b3b3b3',
		},
		'@media screen and (min-width: 768px)': {
			width: 'auto',
		},
	},
}));

export default function NavbarLink(props: LinkProps): JSX.Element {
	const { setCollapsed } = useCollapsed();
	const theme = useTheme();
	const styles = useStyles(theme);

	return (
		<Link
			{...props}
			onClick={() => setCollapsed(true)}
			className={mc(props.className, styles.link)}
		/>
	);
}
