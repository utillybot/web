import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import { mc } from '../../../helpers';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	section: {
		display: 'flex',
		flexDirection: 'column',
		flex: 1,

		'@media screen and (min-width: 768px)': {
			flexDirection: 'row',
		},
	},
});

export default function NavbarSection(
	props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
): JSX.Element {
	const styles = useStyles();

	return <div {...props} className={mc(props.className, styles.section)} />;
}
