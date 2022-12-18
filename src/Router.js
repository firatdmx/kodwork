import { StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux'
import {store} from './features/app/store'


const Stack = createNativeStackNavigator();


import HomeScreen from './Pages/Home'
import JobsScreen from './Pages/JobsDrawer'
import DetailsScreen from './Pages/Details'


const Router = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
            <Stack.Screen name="JobsDrawer" component={JobsScreen} options={{headerTitle:"Find Jobs!", headerTitleAlign:'center'}} />
            <Stack.Screen name="Details" component={DetailsScreen} options={{headerTitle:"Product Details", headerTitleAlign:'center'}} />
        </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

export default Router

const styles = StyleSheet.create({})