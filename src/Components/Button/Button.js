import { Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './Button.styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Button = ({onPress, disabled, text, style, icon}) => {
  return (
    <View style={style}>
      <TouchableOpacity disabled={disabled} onPress={onPress}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <MaterialCommunityIcons style={{marginRight:5}} name={icon} color={'white'} size={20} />
          <Text style={disabled ? styles.disabled : styles.enabled}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Button