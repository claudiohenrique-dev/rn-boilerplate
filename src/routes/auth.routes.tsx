import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Register from '@screens/Register'
import Login from '@screens/Login'

const { Navigator, Screen } = createNativeStackNavigator()

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='Register' component={Register} options={{ headerShown: true }} />
      <Screen name='Login' component={Login} options={{ headerShown: true }} />
    </Navigator>
  )
}
