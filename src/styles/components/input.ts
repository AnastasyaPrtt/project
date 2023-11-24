import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(inputAnatomy.keys)

const pill = definePartsStyle({
	field: {
		borderBottom: '1px solid',
		bg: 'white',
		borderColor: 'gray.200',
		borderRadius: 'none',
		_focus: {
			borderColor: 'orange.500'
		}
	},
})

const search = definePartsStyle({
	field: {
		borderRadius: 'md',
		bg: 'bg',
		_focus: {
			border: '1px solid',
			borderColor: 'orange.500',
		}
	}
})

const auth = definePartsStyle({
	field: {
		bg: 'bg.dark',
		color: 'grey.light',
		p: '20px'
	}
})

export const inputTheme = defineMultiStyleConfig({
	variants: { pill, search, auth },
})
