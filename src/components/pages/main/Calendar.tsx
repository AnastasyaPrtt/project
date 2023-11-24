import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { HStack, Heading, Table, TableContainer, Th, Thead, Tr, VStack } from '@chakra-ui/react'
import React from 'react'
import { weekday } from '../../../../utils/constant'

const Calendar = () => {
	return (
		<VStack>
			<HStack py={16} px={4} justify="space-between" w="420px">
				<Heading size="sm">Март 2023</Heading>
				<HStack >
					<ChevronLeftIcon />
					<ChevronRightIcon />
				</HStack>
			</HStack>
			<TableContainer>
				<Table >
					<Thead>
						<Tr>
							{weekday.map(day => <Th key={day}>{day.toUpperCase()}</Th>)}
						</Tr>
					</Thead>

				</Table>
			</TableContainer>

		</VStack>
	)
}

export default Calendar