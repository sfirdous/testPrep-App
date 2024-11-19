import { Text, StyleSheet, View, Dimensions } from 'react-native'
import React from 'react'
import Background from './Background'
import Icon from './Icon';
import ButtonClick from './ButtonClick';
import { useTranslation } from 'react-i18next';

const deviceHeight = Dimensions.get('window').height;



export default function ResultScreen({ navigation, route }: any) {
  const { heading, time, question } = route.params;
  const { t } = useTranslation();

  const timeSet = () => {
    if (time !== '-') {
      return time;
    } else {
      return '-';
    }
  };

  const Time = timeSet();

  return (
    <Background>
      <View style={styles.header}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>{t(heading)}</Text>
        </View>
      </View>
      <View style={styles.resultCard}>
        <View style={styles.topView}>
          <Icon type='feather' name='check-circle' color='lightgreen' size={75} />
          <Text style={styles.smallTextLight}>{t("completed")}</Text>
          <Text style={styles.smallTextDark}>{t("test_completed")}</Text>
        </View>
        <View style={styles.resultInformationConatiner}>
          <View style={styles.commonContainer}>
            <Text style={styles.smallTextLight}>{t("number_of_questions")}</Text>
            <Text style={styles.smallTextDark}>{question}</Text>
          </View>
          <View style={styles.commonContainer}>
            <Text style={styles.smallTextLight}>{t("attempted_questions")}</Text>
            <Text style={styles.smallTextDark}>165</Text>
          </View>
          <View style={styles.commonContainer}>
            <Text style={styles.smallTextLight}>{t("skip_questions")}</Text>
            <Text style={styles.smallTextDark}>35</Text>
          </View>
          <View style={styles.commonContainer}>
            <Text style={styles.smallTextLight}>{t("correct_answers")}</Text>
            <Text style={styles.smallTextDark}>100</Text>
          </View>
          <View style={styles.commonContainer}>
            <Text style={styles.smallTextLight}>{t("time_taken")}</Text>
            <Text style={styles.smallTextDark}>{Time}</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <ButtonClick label={t("back_to_home")} onPress={() => { navigation.navigate("AboutTab") }} />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({

  header: {
    // backgroundColor : 'pink',
    height: deviceHeight / 10,
    justifyContent: 'center',
    alignItems: 'center'

  },
  headingContainer: {

    height: '50%',
    justifyContent: 'flex-start',
    // backgroundColor : 'yellow',
    width: '100%',
    alignItems: 'center'

  },
  topView: {
    // backgroundColor : 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: 5,

  },
  heading: {
    fontSize: 27,
    color: '#12282f',
    fontWeight: '600',
    letterSpacing: 0.6,
  },
  resultCard: {

    backgroundColor: 'white',
    height: deviceHeight / 1.38,
    width: '100%',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor : '#becbd0',
    borderWidth : 1,

  },
  bigText: {
    fontSize: 30,
    color: '#35a481',
    fontWeight: '600',
    letterSpacing: 0.6,
  },
  resultInformationConatiner: {
    borderTopColor: '#becbd0',
    borderTopWidth: 2,
    paddingTop: '2%',
    // backgroundColor : 'blue',
    width: '80%',
    height: '70%',
    justifyContent: 'space-between',
    alignItems: 'center',




  },
  commonContainer : {
    justifyContent: 'center',
    alignItems: 'center',
    gap : 2
  },

 smallTextLight: {

    fontSize: 15,
    color: '#becbd0',
    fontWeight: '500',
    letterSpacing: 0.6,


  },
  smallTextDark: {

    fontSize: 20,
    color: '#35a481',
    fontWeight: '400',
    letterSpacing: 0.6,
    paddingBottom: '3%'

  },
  footer: {

    // backgroundColor : 'blue',
    height: deviceHeight / 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'

  },
})