import React from 'react'

import Button from '@components/Button'

import { Container, Title } from './styles'

export default function Login({ navigation }) {
  return (
    <Container>
      <Title>Login</Title>
      <Button text='Go back' onPress={() => navigation.goBack()} />
    </Container>
  )
}
