import { Checkbox, HStack, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const MainPageTask = () => {
	return (
		<>
			<HStack align="start">
				<Checkbox></Checkbox>
				<VStack align="start">
					<Heading as='h6' size='sm'>Лабораторная работа №3</Heading>
					<Text color="grey.light">
						Внедрение, сопровождение, настройка и эксплуатация информационных систем
					</Text>
					<Text color="grey.100">
						Сделать до 12:00
					</Text>
				</VStack>
			</HStack>
		</>
	)
}

export default MainPageTask