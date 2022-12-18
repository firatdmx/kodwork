import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import React from 'react'
import RenderHTML from 'react-native-render-html'
import { useWindowDimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import { addToFavs } from '../../features/app/favsSlicer';

const Details = (jobData) => {
    //console.log(jobData.route.params.contents)
    const job = jobData.route.params
    const { width } = useWindowDimensions();
    const source = jobData.route.params.contents

    const favs = useSelector(s => s.jobs.favoritedJobs)
    const dispatch = useDispatch();

    const handleFavoriteJob = () => {
    if (favs.some(item => item.id === job.id)) {
        return Alert.alert(
        'Error',
        'This item is already added ' + job.id,
        );
    }
    dispatch(addToFavs(job));
    Alert.alert("Info", "Job has been added to favourites!")
    };


  return (
    <View style={{flex:1}}>
      <View style={{height:'auto',backgroundColor:'#efefef'}}>
        <Text style={{color:'black'}}>{job.name}</Text>
        <Text style={{color:'black'}}>Location: {job.locations[0].name}</Text>
        <Text style={{color:'black'}}>Job Level: {job.levels[0].name}</Text>
        <Text style={{color:'black',textAlign:'center',fontWeight:'bold',fontSize:23}}>Job Detail</Text>
      </View>
      <View style={{flex:1,padding:10,backgroundColor:'white',color:'black'}}>
        <ScrollView >
            <RenderHTML contentWidth={width} source={{ html: job.contents }} 
            tagsStyles={{
              p:{color:'black'}, 
            li:{color:'black'},
            b:{color:'black'},
            ul:{color:'black'},
            body:{color:'black'},
          }}  />
        </ScrollView>
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-around', padding:10,}}>
        <Button title='HEY YO MAN WHATSAP' />
        <Button title='ADD TO FAVOURITES'onPress={handleFavoriteJob} />

      </View>
    </View>
  );
}

export default Details

const styles = StyleSheet.create({})