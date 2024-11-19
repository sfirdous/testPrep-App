import React, { useState } from 'react'
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,

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


function SignIn({ navigation }: { navigation: any }) {
  const { t } = useTranslation()

  const [isChecked, setIsChecked] = useState(false)
  return (
    
      <Background>

        <View style={styles.imageView}>
          <Image style={styles.image} source={require('../assests/image9.png')} />
          <HeaderView headertext={t('welcome_back')} headerDescription={t('sign_in_to_continue')} />
        </View>

        <InputForm>

          <InputField iType='ant' iName='mobile1' placeH={t('please_enter_your_mobile_number')} />
          <InputField iType='fa' iName='lock' placeH={t('password')} password='true' />

        </InputForm>

        <View style={styles.footerView}>

          <ButtonClick label={t('sign_in')} onPress={() => navigation.navigate("AboutTab")} />
          <View style={styles.termsCondition}>

            <CheckBox style={{ width: '60%' }} isChecked={isChecked} onClick={() => setIsChecked(!isChecked)} rightText={t('remember_me')} rightTextStyle={{ color: isChecked ? '#35a481' : '#becbd0' }}

              checkedCheckBoxColor='#35a481'
              uncheckedCheckBoxColor='#becbd0'

            />
            <TouchableOpacity style={{ width: '40%', }} onPress={() => navigation.navigate("SignUp")}><Text style={{ color: '#becbd0', textAlign: 'right' }}>{t('sign_up')}</Text></TouchableOpacity>

          </View>
          <OrOptions />
        </View>
      </Background>
   

  )
}

const styles = StyleSheet.create({
  imageView: {

    height: deviceHeight / 3,
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

    height: deviceHeight / 4,
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

export default SignIn