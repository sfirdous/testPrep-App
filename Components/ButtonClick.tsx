import React from 'react'

import {
  useWindowDimensions,
  StyleSheet,
  Text,
  TouchableOpacity,

} from 'react-native';





export default function ButtonClick({ label, onPress }: any) {

  
  const deviceWidth = useWindowDimensions().width;


const styles = StyleSheet.create({

  button: {

    backgroundColor: '#35a481',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '3%',
    width: deviceWidth/1.2,
    borderRadius : 10,
    elevation: 7,


  },

  butttonText: {
    color: 'white',
    fontSize : 18,
    fontWeight : '500',
    letterSpacing : 1,
  }

})
return (

  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.butttonText}>{label}</Text>
  </TouchableOpacity>

);

}
