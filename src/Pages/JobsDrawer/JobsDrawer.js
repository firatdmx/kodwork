import { StyleSheet } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import JobsScreen from '../Jobs'
import FavoritedScreen from '../Favorited'
import DetailsScreen from '../Details'

const Drawer = createDrawerNavigator();

//height 0 hides the label from drawer.

const Jobs = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown:false}}>
        <Drawer.Screen name="Jobs" component={JobsScreen}/>
        <Drawer.Screen name="Favorited" component={FavoritedScreen} />
        <Drawer.Screen name="Details" component={DetailsScreen} options={{drawerItemStyle:{height:0}}} />
    </Drawer.Navigator>
  )
}

export default Jobs

const styles = StyleSheet.create({})