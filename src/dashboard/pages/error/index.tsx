import Button from '../../../components/Button';
import Page from '../../components/Page';
import { getCookie } from '../../../helpers';
import { Redirect } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	button: {
		padding: '10px',
	},
});

export default function Error(): JSX.Element {
	const styles = useStyles();

	const error = getCookie('error');
	if (!error) return <Redirect to="/dashboard" />;

	document.cookie =
		'error=; expires=Thu, 01 Jan 1970 00:00:00 UTC; max-age=0; path=/;';
	let humanError;

	switch (error) {
		case 'access_denied':
			humanError = 'It looks like you clicked cancel.';
	}
	return (
		<Page>
			<h1>An error happened during the authorization process.</h1>
			<p>{humanError}</p>
			<Button className={styles.button} to="/">
				Go back Home
			</Button>
		</Page>
	);
}
