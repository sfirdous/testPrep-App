import React from 'react'
import {View,ImageBackground} from 'react-native'
const PlainBackground = ( {children} : any) =>{
  return (
   <View style = {{justifyContent : 'flex-end'}}>
    <ImageBackground source={require('../assests/colorkit.png')} style = {{height : '100%',opacity: 0.89}}/>
    <View style = {{position : 'absolute',width : '100%'}}>
        {children}
    </View>
   </View>
  )
}

export default PlainBackground