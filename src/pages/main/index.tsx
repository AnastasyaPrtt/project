
import { Layout } from '@/components/layout/Layout'
import { Body } from '@/components/pages/main/Body'
import Calendar from '@/components/pages/main/Calendar'
import { Box, HStack, VStack } from '@chakra-ui/react'
import React from 'react'

const MainPage = () => {
	return (
		<Layout>
			<HStack w="100%" align="start">
				<Body />
				<Calendar />
			</HStack>
		</Layout>
	)
}

export default MainPage