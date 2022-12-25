import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux'
import {store} from './features/app/store'
import JobsScreen from './Pages/JobsDrawer'
import DetailsScreen from './Pages/Details'

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="JobsDrawer"
            component={JobsScreen}
            options={{headerTitle: 'Find Jobs!', headerTitleAlign: 'center'}}
          />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={{
              headerTitle: 'Product Details',
              headerTitleAlign: 'center',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default Router

const styles = StyleSheet.create({})