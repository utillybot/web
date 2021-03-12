import Button from '../../../components/Button';
import NavbarSection from './NavbarSection';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	back: {
		justifyContent: 'flex-start',
	},
	button: {
		padding: '10px 20px',
	},
});

export default function NavbarBack(): JSX.Element {
	const styles = useStyles();

	return (
		<NavbarSection className={styles.back}>
			<Button to="/" className={styles.button}>
				ᐸ Back to main site
			</Button>
		</NavbarSection>
	);
}
