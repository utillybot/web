import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import { mc } from '../../helpers';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	page: {
		width: '100%',
		marginTop: 'calc(100% - (98% - 40px))',
		flex: 1,
		overflowY: 'auto',
	},
});

export default function Page(
	props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
): JSX.Element {
	const styles = useStyles();
	return <div {...props} className={mc(props.className, styles.page)} />;
}
