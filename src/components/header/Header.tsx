import { Avatar, Box, Container, HStack, } from '@chakra-ui/react'
import Image from 'next/image'

const Header = () => {
	return (
		<>
			<Box
				w="100%"
				borderBottom="3px solid"
				borderColor="grey.dark">
				<Container
					minW="1384px">
					<HStack
						justify="space-between"
						py={3}
					>
						<Box>
							<Image
								src='/Logo.png'
								alt='logo'
								width={100}
								height={100} />
						</Box>
						<Avatar
							src='https://bit.ly/broken-link'
							w={10} h={10}
							borderRadius="revert" />
					</HStack>
				</Container>
			</Box>

		</>
	)
}

export default Header