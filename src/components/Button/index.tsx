import React from 'react'

import { Props } from './types'

import { Container, Text } from './styles'

export default function Button({ text, onPress }: Props) {
  return (
    <Container onPress={onPress}>
      <Text>{text}</Text>
    </Container>
  )
}
