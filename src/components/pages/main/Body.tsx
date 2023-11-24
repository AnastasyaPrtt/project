import { Box, Divider, Heading, Text } from '@chakra-ui/react'
import MainPageTask from './MainPageTask'


export const Body = () => {
	return (
		<>
			<Box py={16} px={4} w="100%">
				<Heading
					bgGradient='linear(to-b, #0E1980, #199AA3)'
					bgClip='text'
					mb={5}>
					Сегодня 23/03/2023
				</Heading>
				<Text
					borderBottom="3px solid"
					borderColor="grey.dark"
					pb={2}
					mb={5}>
					Задания
				</Text>
				<MainPageTask />
			</Box>
		</>
	)
}
