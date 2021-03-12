import { mc } from '../../../helpers';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	container: {
		flex: 1,
		display: 'flex',
		alignItems: 'center',
	},
});

export default function NavbarContainer(
	props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
): JSX.Element {
	const styles = useStyles();
	return <div {...props} className={mc(props.className, styles.container)} />;
}
