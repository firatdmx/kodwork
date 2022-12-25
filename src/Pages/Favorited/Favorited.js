import React from 'react'
import { View, Button, Alert, TouchableOpacity, FlatList, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { clearAll, removeFromFavs } from '../../features/app/favsSlicer';
import JobCard from '../../Components/JobCard';
import styles from './Favorited.styles'


const Favorited = ({navigation}) => {
  const dispatch = useDispatch();



  const handleRemove = (jobData) => {
    const options = [
      { text: "Remove", onPress: () =>  dispatch(removeFromFavs(jobData.id)) },
      { text: "Cancel"}, 
    ];

    Alert.alert("Warning", "The job will be removed from favourites", options)
  }

  const render = ({item}) => {
    return(
      <View>
        <JobCard item={item} handleJob={() => null} deleteStyle />
        <TouchableOpacity  activeOpacity={0.5} style={styles.delete} onPress={() => handleRemove(item)}>
          <Text style={styles.deltext}>REMOVE FROM FAVOURITES</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const clean = () => {
    dispatch(clearAll())
  }

  const data = useSelector(state => state.jobs.favoritedJobs)
  return (
    <View>
      <Button title="CLEAR ALL" onPress={clean} />
      <FlatList data={data} renderItem={render} />
    </View>
  )
}

export default Favorited;