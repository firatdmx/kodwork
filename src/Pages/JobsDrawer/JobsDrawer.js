import { StyleSheet } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import JobsScreen from '../Jobs'
import FavoritedScreen from '../Favorited'

const Drawer = createDrawerNavigator();

const Jobs = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown:false}}>
        <Drawer.Screen name="Jobs" component={JobsScreen}/>
        <Drawer.Screen name="Favorited" component={FavoritedScreen} />
    </Drawer.Navigator>
  )
}

export default Jobs

const styles = StyleSheet.create({})