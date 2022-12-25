import { Text, View, FlatList, ActivityIndicator } from 'react-native'
import useFetch from '../../hooks/useFetch/useFetch';
import JobCard from '../../Components/JobCard';
import Config from 'react-native-config';
import styles from './Jobs.styles'

const Jobs = ({navigation}) => {
  const URL = Config.REACT_APP_API_URL
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
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}> Something went wrong!!!</Text>
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


