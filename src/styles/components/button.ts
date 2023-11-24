import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const auth = defineStyle({
	bg: 'none',
	_hover: {
		bgGradient: 'linear(to-b, #0E1980, #199AA3)',
	}
}
)
const nav = defineStyle({
	bg: 'none',
	w: '220px',
	justifyContent: "start",
	color: 'grey.light',
	_hover: {
		bgGradient: 'linear(to-b, #0E1980, #199AA3)',
		color: 'white'
	}
}
)

export const buttonTheme = defineStyleConfig({
	variants: { auth, nav },
})