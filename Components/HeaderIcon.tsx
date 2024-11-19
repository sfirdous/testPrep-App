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

function HeaderIcon({ bcolor, bwidth, children }: any) {


  const { t, i18n } = useTranslation();


  const changelanguage = () => {
    if (i18n.language === 'en') {
      i18n.changeLanguage('hi');
    } else if (i18n.language === 'hi') {
      i18n.changeLanguage('ma');
    } else {
      i18n.changeLanguage('en');
    }
  };
  const styles = StyleSheet.create({
    lanButtonView: {
      borderColor: bcolor,
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2%',
      width: '20%',
      borderRadius: 5,



    },
  })
  return (
    <View style={{ width: deviceWidth / 2, }}>
      <TouchableOpacity style={styles.lanButtonView} onPress={changelanguage}>
        {children}
      </TouchableOpacity>
    </View>
  )
}



export default HeaderIcon