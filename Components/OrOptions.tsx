import React from 'react'
import {
    Dimensions,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
  
  } from 'react-native';
  import { useTranslation } from 'react-i18next';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

function OrOptions() {

  const { t } = useTranslation();
  return (

    <View>
    <Text style={styles.footerText}>{t('or')}</Text>

    <View style={styles.logoContainer}>
      <TouchableOpacity onPress={() => { }}>
        <Image style={styles.logoView} source={require('../assests/google.png')}></Image>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { }}>
        <Image style={styles.logoView} source={require('../assests/facebook.png')}></Image>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { }}>
        <Image style={styles.logoView} source={require('../assests/instagram.png')}></Image>
      </TouchableOpacity>

    </View>
  </View>
    

  )
}

const styles = StyleSheet.create({

  footerView: {

    height: deviceHeight / 4,
    // backgroundColor : 'yellow',
    alignItems: 'center',
    justifyContent: 'space-evenly',


  },
    footerText: {
        fontSize: 15,
        color: '#becbd0',
        fontWeight: '600',
        letterSpacing: 0.6,
        textAlign: 'center',
      },
    
      logoContainer: {
        // backgroundColor : 'grey',
        flexDirection: 'row',
        width: deviceWidth / 1.2,
        justifyContent: 'space-evenly',
        padding: '3%',

      },
    logoView: {
        height: 35,
        width: 35,
        borderColor: '#becbd0',
        // borderWidth :1,
  
  
      }
}
)

export default OrOptions