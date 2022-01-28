import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { StatusBar } from 'expo-status-bar'

import Button from './src/components/Button'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
