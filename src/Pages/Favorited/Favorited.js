import { StyleSheet, View, Button } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { clearAll, removeFromFavs } from '../../features/app/favsSlicer';
import JobCard from '../../Components/JobCard';


const Favorited = ({navigation}) => {
  const dispatch = useDispatch();
  const handleRemove = (jobData) => {
    dispatch(removeFromFavs(jobData.id));
  }

  const render = ({item}) => {
    return(
      <JobCard item={item} handleJob={handleRemove} />
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

const styles = StyleSheet.create({})