import React from 'react'
import {View, StyleSheet,Dimensions} from 'react-native'

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const Background = ( {children} : any) =>{
  return (
   
    <View style={styles.mainView}>
      
        {children}
     
    </View>
   
  )
}

const styles = StyleSheet.create({
  
  mainView: {
    height: deviceHeight,
    width: deviceWidth,
    // backgroundColor : 'red',
    justifyContent : 'space-evenly',
    position : 'absolute',
    backgroundColor : 'white',
    

    paddingHorizontal: deviceWidth / 30,
    paddingVertical: deviceHeight / 30,

  }
})
export default Background