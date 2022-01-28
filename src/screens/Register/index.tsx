import React from 'react'

import Button from '@components/Button'

import { Container, Title } from './styles'

export default function Register({ navigation }) {
  return (
    <Container>
      <Title>Register</Title>
      <Button text='Go to Login screen' onPress={() => navigation.navigate('Login')} />
    </Container>
  )
}
