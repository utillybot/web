import type { LinkProps } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { mc } from '../helpers';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	button: {
		color: 'white',
		backgroundColor: '#404040',
		textDecoration: 'none',

		'&:hover': {
			backgroundColor: '#606060',
		},
	},
});

export default function Button(props: LinkProps): JSX.Element {
	const styles = useStyles();
	return <Link {...props} className={mc(props.className, styles.button)} />;
}
