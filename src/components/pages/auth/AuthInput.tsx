import { ViewOffIcon } from '@chakra-ui/icons'
import { FormControl, FormHelperText, FormLabel, Input, FormErrorMessage, InputGroup, InputRightElement, IconButton } from '@chakra-ui/react'
import { useState } from 'react'


const AuthInput = ({ inputRef, type }) => {
	const [input, setInput] = useState()



	return (
		<FormControl >
			<FormLabel>Email</FormLabel>
			<InputGroup>
				<Input variant="auth" ref={inputRef} type={type} value={input} />
				<InputRightElement>
					<IconButton aria-label='view password'>
						{type == 'password' ? <ViewOffIcon /> : <ViewOffIcon />}
					</IconButton>
				</InputRightElement>
			</InputGroup>


			{/* {!isError ? (
				<FormHelperText>
					Enter the email you'd like to receive the newsletter on.
				</FormHelperText>
			) : (
				<FormErrorMessage>Email is required.</FormErrorMessage>
			)} */}
		</FormControl>
	)
}

export default AuthInput