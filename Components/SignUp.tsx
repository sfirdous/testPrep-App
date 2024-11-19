import React, { useState } from 'react'
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,


} from 'react-native';

import CheckBox from 'react-native-check-box'
import Background from './Background';
import HeaderView from './HeaderView';
import OrOptions from './OrOptions';
import InputForm from './InputForm';
import InputField from './InputField';
import ButtonClick from './ButtonClick';
import { useTranslation } from 'react-i18next';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;


function SignUp({ navigation }: { navigation: any }) {
  const [isChecked, setIsChecked] = useState(false);
  const { t } = useTranslation();

  return (
    
      <Background>
        <View style={styles.imageView}>
          <HeaderView headertext={t('welcome_sign_up')} headerDescription={''} />
        </View>

        <InputForm>
          <InputField iType='fa6' iName='user-tie' placeH={t('first_name')} />
          <InputField iType='fa6' iName='user-tie' placeH={t('last_name')} />
          <InputField iType='ant' iName='mobile1' placeH={t('enter_mobile_number')} />
          <InputField iType='fa' iName='lock' placeH={t('password_hint')} password='true' />
        </InputForm>

        <View style={styles.footerView}>
          <ButtonClick label={t('sign_up')} onPress={() => {}} />
          <View style={styles.termsCondition}>
            <CheckBox
              style={{ width: '60%' }}
              isChecked={isChecked}
              onClick={() => setIsChecked(!isChecked)}
              rightText={t('terms_and_conditions')}
              rightTextStyle={{ color: isChecked ? '#35a481' : '#becbd0' }}
              checkedCheckBoxColor='#35a481'
              uncheckedCheckBoxColor='#becbd0'
            />
            <TouchableOpacity style={{ width: '40%' }} onPress={() => navigation.navigate('SignIn')}>
              <Text style={{ color: '#becbd0', textAlign: 'right' }}>{t('have_account')}</Text>
            </TouchableOpacity>
          </View>
          <OrOptions />
        </View>
      </Background>
  
  );
}

const styles = StyleSheet.create({
  imageView: {

    height: deviceHeight / 8.5,
    // backgroundColor : 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    // padding : '3%',

  },
  image: {
    height: '70%',
    width: '50%'
  },
  footerView: {

    height: deviceHeight / 5,
    // backgroundColor : 'yellow',
    alignItems: 'center',
    // justifyContent: 'space-evenly',


  },
  termsCondition: {
    justifyContent: 'space-between',
    alignItems: 'center',
    // padding: '1%',
    width: deviceWidth / 1.2,
    flexDirection: 'row',
    height: 45,
  }
})

export default SignUp