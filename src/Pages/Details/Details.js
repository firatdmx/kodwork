import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import React from 'react'
import RenderHTML from 'react-native-render-html'
import { useWindowDimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import { addToFavs, signUP } from '../../features/app/favsSlicer';
import MyButton from '../../Components/Button'
import styles from './Details.styles'

const Details = (jobData) => {
    //console.log(jobData.route.params.contents)
    const job = jobData.route.params
    const { width } = useWindowDimensions();
    const dispatch = useDispatch();

    const handleFavoriteJob = () => {
      dispatch(addToFavs(job));
    };

    const handleSignup = () => {
      dispatch(signUP(job));
    };

    let addtoFavDisabled = false
    let signupDisabled = false

    //Check if favorited
    const favlist = useSelector(s => s.jobs.favoritedJobs)
    favlist.filter(t => {
      if (t.id == jobData.route.params.id) {
        addtoFavDisabled = true
      }
    })

    //Check if signed up
    const signlist = useSelector(s => s.jobs.signedUP)
    signlist.filter(t => {
      if (t.id == jobData.route.params.id) {
        signupDisabled = true
      }
    })


  return (
    <View style={styles.mainView}>
      <View style={styles.topBar}>
        <Text style={styles.jobName}>{job.name}</Text>
        <View style={styles.locationView}><Text style={styles.locationTitle}>Location: </Text><Text style={styles.location}>{job.locations[0].name}</Text></View>
        <View style={styles.jobLevelView}><Text style={styles.jobLevelTitle}>Job Level: </Text><Text style={styles.jobLevel}>{job.levels[0].name}</Text></View>
        <Text style={styles.jobDetailTitle}>Job Detail</Text>
      </View>
      <View style={styles.htmlSource}>
        <ScrollView >
            <RenderHTML contentWidth={width} source={{ html: job.contents }} 
            tagsStyles={styles.htmlTagStyles}  />
        </ScrollView>
      </View>
      <View style={styles.bottomBar}>
        <MyButton style={signupDisabled ? styles.disabledSignupButton : styles.signupButton} text="Submit" icon={"file-send"}  onPress={handleSignup} disabled={signupDisabled} />
        <MyButton style={addtoFavDisabled ? styles.disabledAddFavsButton : styles.addFavsButton} text="Favorite Job" icon={"heart"} onPress={handleFavoriteJob} disabled={addtoFavDisabled}/>
      </View>
    </View>
  );
}

export default Details