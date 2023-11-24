import { Box, Container, HStack, VStack } from '@chakra-ui/react'
import Header from '../header/Header'
import { ReactNode } from 'react'
import Navigation from '../navigation/Navigation'

type LayoutProps = {
	children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Header />
			<Container
				minW="1384px"
			>
				<HStack>
					<Navigation />
					{children}
				</HStack>
			</Container>
		</>
	)
}