import React from 'react'
import { View, StyleSheet, Dimensions, ImageBackground } from 'react-native'

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const MineralGreenBackground = ({ children }: any) => {
  return (

    <View style={styles.mainView}>
      <ImageBackground source = {require('../assests/beigeBackground.png')}>
        {children}
      </ImageBackground>

    </View>

  )
}

const styles = StyleSheet.create({

  mainView: {
    height: deviceHeight,
    width: deviceWidth,
    position: 'absolute',
  }
})
export default MineralGreenBackground