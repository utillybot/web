import type { ReactNode } from 'react';
import { Component } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	error: {
		flex: 1,
		display: 'flex',
		alignContent: 'center',
		justifyContent: 'center',

		'& h1': {
			display: 'block',
			textAlign: 'center',
			alignContent: 'center',
		},
	},
});

interface CommandsErrorBoundaryState {
	hasError: boolean;
}
class ErrorBoundary extends Component<unknown, CommandsErrorBoundaryState> {
	public state = { hasError: false };

	static getDerivedStateFromError(): CommandsErrorBoundaryState {
		return { hasError: true };
	}

	render(): JSX.Element | ReactNode {
		if (this.state.hasError) {
			return (
				<Styles>
					{styles => (
						<div className={styles.error}>
							<h1>Something went wrong when loading the commands.</h1>
						</div>
					)}
				</Styles>
			);
		}

		return this.props.children;
	}
}

const Styles = ({
	children,
}: {
	children: (styles: ReturnType<typeof useStyles>) => JSX.Element;
}) => {
	const styles = useStyles();
	return children(styles);
};

export default ErrorBoundary;
