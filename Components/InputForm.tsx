import React from 'react'
import {
    Dimensions,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
  
  } from 'react-native';


  const deviceHeight = Dimensions.get('window').height;


function InputForm({children} : any) {
  return (
    <View style = {styles.form}>
      {children}        
    </View>
  )
}

const styles = StyleSheet.create({
    form : {
        
      height: deviceHeight / 3,
      // backgroundColor : 'pink',
      justifyContent: 'center',
      gap : 20,
      alignItems: 'center',
      // padding : '3%',
    },
  
})

export default InputForm