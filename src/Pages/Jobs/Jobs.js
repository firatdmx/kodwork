import { Text, View, FlatList, ActivityIndicator, Alert, Button } from 'react-native'
import useFetch from '../../hooks/useFetch/useFetch';
import { addToFavs } from '../../features/app/favsSlicer';
import { useDispatch, useSelector } from 'react-redux';
import JobCard from '../../Components/JobCard';
import { useState } from 'react';


const Jobs = ({navigation}) => {
  const URL = "https://www.themuse.com/api/public/jobs?page=2"
  const {loading, datax, error} = useFetch(URL)

  //const dispatch = useDispatch();
  
  //const favs = useSelector(s => s.jobs.favoritedJobs)

  // const handleFavoriteJob = (jobData) => {
  //   if (favs.some(item => item.id === jobData.id)) {
  //     return Alert.alert("Error", "This item is already added " + jobData.id.toString())
  //   }
  //   dispatch(addToFavs(jobData));
  // }

  const handleFavoriteJob = (jobData) => {
    //console.log(jobData)
    navigation.navigate('Details', jobData)
  }
  
  function render({item}) {
  return (
    <View>
      <JobCard item={item} handleJob={handleFavoriteJob} />
    </View>
    );
  }

  if(loading) {
    return(
      <ActivityIndicator size={'large'} />
      )
    }

  if (error){
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontWeight:'bold',color:'red'}}> Something went wrong!!!</Text>
        <ActivityIndicator size={'large'} />
      </View>
    )
}

  return (
    <View>
      <FlatList data={datax} renderItem={render} />
    </View>
  )
}

export default Jobs;


