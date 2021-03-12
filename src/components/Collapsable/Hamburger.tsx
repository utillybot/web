import { mc } from '../../helpers';
import useCollapsed from './useCollapsed';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	hamburger: {
		display: 'block',
		backgroundColor: 'rgba(0, 0, 0, 0)',
		border: 'none',
		cursor: 'pointer',
		overflow: 'hidden',
		outline: 'none',

		'&:hover': {
			backgroundColor: 'rgba(0, 0, 0, 0.5)',
		},
	},

	line: {
		transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',

		stroke: '#fff',
		strokeWidth: 1,
		strokeLinecap: 'round',
	},

	open: {
		'&$line:nth-child(1)': {
			transform: 'translateY(0) translateX(3px) rotate(45deg)',
		},
		'&$line:nth-child(2)': {
			opacity: 0,
		},
		'&$line:nth-child(3)': {
			transform: 'translateY(3px) translateX(-4px) rotate(-45deg)',
		},
	},

	collapsed: {
		'&$line:nth-child(1)': {
			transform: 'translateY(0px) translateX(0px) rotate(0deg)',
		},

		'&$line:nth-child(2)': {
			opacity: 1,
		},

		'&$line:nth-child(3)': {
			transform: 'translateY(0px) translateX(0px) rotate(0deg)',
		},
	},
});

const generateSVG = (
	x: number,
	y: number,
	l: number,
	collapsed: boolean,
	styles: ReturnType<typeof useStyles>
): JSX.Element => {
	return (
		<path
			key={`${x},${y} ${l}`}
			className={mc(styles.line, {
				[styles.collapsed]: collapsed,
				[styles.open]: !collapsed,
			})}
			d={`M ${x},${y} h${l}`}
		/>
	);
};

export default function Hamburger(): JSX.Element {
	const { collapsed, setCollapsed } = useCollapsed();
	const styles = useStyles();

	return (
		<button
			className={styles.hamburger}
			aria-label="Toggle Collapsable"
			onClick={() => setCollapsed(prevState => !prevState)}
		>
			<svg viewBox="0 0 10 10" width="30" height="30">
				{[
					[1, 2, 8],
					[1, 5, 8],
					[1, 8, 8],
				].map(i => generateSVG(i[0], i[1], i[2], collapsed, styles))}
			</svg>
		</button>
	);
}
