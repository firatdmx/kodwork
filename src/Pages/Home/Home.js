import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View style={styles.mainView}>
      <TouchableOpacity style={styles.bigButt} onPress={() => navigation.navigate('JobsDrawer')}>
        <Text style={styles.buttText} >FIND JOBS!</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  mainView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  bigButt:{
    backgroundColor:'aqua',
    width:"50%",
    height:"20%",
    justifyContent:'center',
    alignItems:'center',
    borderRadius:15,
    borderBottomRightRadius:0,
    borderWidth:2,
    borderColor:'black'
  },
  buttText:{
    fontSize:30,
    fontWeight:'bold',
    color:'black'
  },
})