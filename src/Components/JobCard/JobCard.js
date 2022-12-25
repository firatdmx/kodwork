import React from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import styles from './JobCard.styles';

function JobCard({item, handleJob,deleteStyle}) {
    return (
      <View style={deleteStyle ? styles.deleteRenderView : styles.renderView}>
        <TouchableWithoutFeedback onPress={() => handleJob(item)}>
          <View>
            <Text style={styles.textTitle}>{item.name}</Text>
            <Text style={styles.company}>{item.company.name}</Text>
            <View style={styles.locationView}>
              <Text style={styles.locationText}>{item.locations[0].name}</Text>
            </View>
            <Text style={styles.level}>{item.levels[0].name}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
}

export default JobCard;