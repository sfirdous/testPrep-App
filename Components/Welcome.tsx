import React from 'react';
import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native';
import { useTranslation } from 'react-i18next';
import Background from './Background';
import HeaderIcon from './HeaderIcon';
import Icon from './Icon';
import HeaderView from './HeaderView';
import ButtonClick from './ButtonClick';
import OrOptions from './OrOptions';

const Welcome = ({ navigation }: { navigation: any }) => {
  const deviceHeight = useWindowDimensions().height;
  const { t } = useTranslation();

  const styles = StyleSheet.create({
    imageView: {
      height: deviceHeight / 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      height: '100%',
      width: '100%'
    },
    footerView: {
      height: deviceHeight / 4,
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
  });

  return (
    <Background>
      <HeaderIcon  bwidth={1}>
        <Icon type="faes" name="language" color='#35a481' size={35} />
      </HeaderIcon>
      <HeaderView headertext={t('welcome')} headerDescription="" />
      <View style={styles.imageView}>
        <Image style={styles.image} source={require('../assests/image4.png')} />
      </View>
      <View style={styles.footerView}>
        <Text style={styles.footerText}>{t('login_and_register_free')}</Text>
        <ButtonClick label={t('continue_with_mobile')} onPress={() => navigation.navigate("SignIn")} />
        <OrOptions />
      </View>
    </Background>
  );
};

export default Welcome;

