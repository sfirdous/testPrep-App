// LanguageChangeButton.js
import React from 'react';
import { View, TouchableOpacity, Text,StyleSheet, useWindowDimensions } from 'react-native';
import { useTranslation } from 'react-i18next';

const LanguageChangeButton = ({ children } : any) => {
  const { t, i18n } = useTranslation();
  const deviceWidth = useWindowDimensions().width;

  const changelanguage = () => {
    if (i18n.language === 'en') {
      i18n.changeLanguage('hi');
    } else if (i18n.language === 'hi') {
      i18n.changeLanguage('ma');
    } else {
      i18n.changeLanguage('en');
    }
  };

  return (
    <View style={{ width: deviceWidth / 2 }}>
      <TouchableOpacity style ={styles.lanButtonView} onPress={changelanguage}>
        {children}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  lanButtonView: {
    padding: 10,
    backgroundColor: '#35a481',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
});

export default LanguageChangeButton;
