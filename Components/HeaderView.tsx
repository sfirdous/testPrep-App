import React from 'react'

import {
    Dimensions,
    StyleSheet,
    Text,
    View,
    Image,

} from 'react-native';
import { useTranslation } from 'react-i18next';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width



function HeaderView({headertext,headerDescription} : any) {

  const {t,i18n} = useTranslation()
    return (

        <View style={styles.headerView}>
            <Text style={styles.headerText}>{t(headertext)}</Text>
            <Text style={styles.headerDescription}>{headerDescription}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    headerView: {

        height: deviceHeight / 10,
        // backgroundColor : 'red',
        justifyContent: 'center',
        alignItems: 'center',
  
      },
  
      headerText: {
  
        fontSize: 30,
        fontWeight: '700',
        letterSpacing: 1,
        color: '#12282f',
        textAlign: 'center',
      },

      headerDescription :{

        fontSize: 15,
        color: '#becbd0',
        fontWeight: '600',
        letterSpacing: 0.6,
        textAlign: 'center',

      },
})

export default HeaderView