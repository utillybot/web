import { jss } from 'react-jss';

jss
	.createStyleSheet({
		'@global': {
			'@import':
				"url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap')",

			body: {
				fontFamily:
					"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
				WebkitFontSmoothing: 'antialiased',
				height: '100vh',
				margin: 0,
				MozOsxFontSmoothing: 'grayscale',
				color: 'white',
			},
			'::-webkit-scrollbar': {
				width: '15px',
			},

			'::-webkit-scrollbar-track': {
				background: '#282828',
			},

			/* Handle */
			'::-webkit-scrollbar-thumb': {
				background: '#404040',
			},

			/* Handle on hover */
			'::-webkit-scrollbar-thumb:hover': {
				background: '#606060',
			},

			'*': { boxSizing: 'border-box' },

			'#root': {
				backgroundColor: ' #282828',
				height: '100%',
				textAlign: 'center',
				display: 'flex',
				flexDirection: 'column',
			},
		},
	})
	.attach();
