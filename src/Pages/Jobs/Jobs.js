import { Text, View, FlatList, ActivityIndicator } from 'react-native'
import useFetch from '../../hooks/useFetch/useFetch';
import JobCard from '../../Components/JobCard';

const Jobs = ({navigation}) => {
  const URL = "https://www.themuse.com/api/public/jobs?page=2"
  const {loading, datax, error} = useFetch(URL)

  const handleFavoriteJob = (jobData) => {
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


