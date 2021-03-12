import Button from '../../../components/Button';
import Spinner from '../../../components/Spinner';
import { getUserAvatar } from '../../helpers';
import Page from '../../components/Page';
import useUserContext from '../../hooks/useUserContext';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	button: {
		padding: '10px',
	},

	avatar: {
		height: '256px',
		width: '256px',
		borderRadius: '50%',
	},
});

export default function Home(): JSX.Element {
	const user = useUserContext();
	const styles = useStyles();
	if (!user) return <Spinner />;

	return (
		<Page>
			<img
				alt="Avatar"
				src={getUserAvatar(user.id, user.avatar, user.discriminator)}
				className={styles.avatar}
			/>
			<h1>
				Welcome to your dashboard {user.username}#{user.discriminator}
			</h1>
			<Button className={styles.button} to="/dashboard/servers">
				Go to Servers
			</Button>
		</Page>
	);
}
