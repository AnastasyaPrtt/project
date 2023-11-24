import React, { useRef } from 'react'
import { Flex, Heading, Input, Button } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import AuthInput from '@/components/pages/auth/AuthInput'

const LoginPage = () => {
	const emailRef = useRef<HTMLInputElement>(null)
	const passwordRef = useRef<HTMLInputElement>(null)


	return (
		<>
			<Flex align="center" justify="center" h="100%">
				<Flex w="50%" border="1px solid black" p="60px" justify="center" direction="column">
					<Heading size={"xl"} mb={14} textAlign="center">
						Авторизация
					</Heading>
					<AuthInput inputRef={emailRef} type={'email'} />
					<AuthInput inputRef={passwordRef} type={'password'} />
					<Input variant="auth" type='email' placeholder='Пароль' />
					<Link href='#'>Забыл пароль?</Link>
					<Button bgGradient='linear(to-b, #2161DC , #199AA3 )' color="white">Войти</Button>
				</Flex>

			</Flex>
		</>
	)
}

export default LoginPage