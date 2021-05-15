import React from 'react'
import { Button, Text, View } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

function HomeScreen() {
  const navigation = useNavigation()

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>Hello, monorepo!</Text>
      <Button
        onPress={() => navigation.navigate('Details')}
        title="Go to details"
      />
    </View>
  )
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>Details...</Text>
    </View>
  )
}

const Stack = createStackNavigator()

export function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
