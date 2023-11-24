import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'

type NavItemProps = {
	data: {
		name: string,
		icon: JSX.Element
		link: string
	}
}

export const NavItem = ({ data }: NavItemProps) => {
	const router = useRouter()
	return (
		<>
			<Button variant='nav' justifyContent="start" leftIcon={data.icon}
				bgGradient={router.pathname === data.link ? 'linear(to-b, #0E1980, #199AA3)' : 'none'
				}
				color={router.pathname === data.link ? 'white' : 'grey.light'}>
				{data.name}
			</Button>
		</>
	)
}
