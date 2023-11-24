import { extendTheme } from '@chakra-ui/react'
import { inputTheme } from './components/input'
import { buttonTheme } from './components/button'


export const theme = extendTheme({
	styles: {
		global: {
			'#__next': {
				height: '100vh',
			},
			body: {
				bg: 'bg.100',
				color: 'white',
				fontSize: '16px'
			},
			html: {
				h: '100%'
			},
			'#root': {
				w: '100%',
				h: '100%'
			},
		}
	},
	colors: {
		bg: {
			dark: '#151518',
			black: '#191A1D',
			100: '#1C1D24'
		},
		divider: '#29292E',
		grey: {
			dark: '#29292E',
			100: '#65656F',
			light: '#A3A49F'
		},
		white: '#E9EAE5',
		turquoise: '#1997A2',
		blue: {
			black: '#1997A2',
			oz: '#2161DC'
		},
		red: '#D62D30',
		yellow: '#D6A72D',
		green: '#18BC46',
	},
	components: {
		Input: inputTheme,
		Button: buttonTheme
	},
})