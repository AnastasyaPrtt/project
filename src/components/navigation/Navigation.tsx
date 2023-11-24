import { FaUserGraduate, FaCalendarDays } from "react-icons/fa6"
import { FaTasks } from "react-icons/fa"
import { IoLibrary } from "react-icons/io5"
import React from 'react'
import { Box, VStack } from '@chakra-ui/react'
import { NavItem } from './NavItem'


const menu = [
	{
		name: 'Главная',
		link: '/main',
		icon: <FaCalendarDays />,
	},
	{
		name: 'Задания',
		link: '/tasks',
		icon: <FaTasks />,
	},
	{
		name: 'Преподаватели',
		link: '/professor',
		icon: <FaUserGraduate />,
	},
	{
		name: 'Библиотека',
		link: '/library',
		icon: <IoLibrary />,
	}
]

const Navigation = () => {
	return (
		<>
			<Box pt={16}
				h="100%"
				borderRight="3px solid"
				borderColor="grey.dark"
			>
				<VStack >
					{menu.map(item => <NavItem key={item.name} data={item} />)}
				</VStack>
			</Box>
		</>
	)
}

export default Navigation