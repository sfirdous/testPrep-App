import { Text, StyleSheet, View, FlatList, Dimensions, Alert, } from 'react-native'
import React,{useState} from 'react'
import Background from './Background'
import CountDown from 'react-native-countdown-component'
import ButtonClick from './ButtonClick';
import QuestionCard from './QuestionCard';
import { questionpaper1, questionpaper2, questionpaper3, questionpaper4,oscillation,newtonianMechanics,electromagnetism,thermodynamics,chemicalBonding,calculus,cellBiology,chemicalReactions,acidsAndBases,algebra,atomicStructure,ecology,statistics,genetics,humanAnatomy,geometry} from './QuestionData'

import AwesomeAlert from 'react-native-awesome-alerts';
import { useTranslation } from 'react-i18next';

const deviceHeight = Dimensions.get('window').height;




export default function QuestionPapperScreen({ navigation, route }: any) {
  const { t } = useTranslation();
  const { heading, time, question } = route.params;
  const [showAlert, setShowAlert] = useState(false);
  const [showEnd, setShowEnd] = useState(false);

  console.log(question);

  function removeWhiteSpaces(str: string) {
    return str.replace(/\s+/g, '');
  }

  const selectedQuestion = removeWhiteSpaces(heading);

  interface QuestionData {
    [key: string]: { question: string; a: string; b: string; c: string; d: string }[];
  }

  const questionsData: QuestionData = {
    QuestionPaper1: questionpaper1,
    QuestionPaper2: questionpaper2,
    QuestionPaper3: questionpaper3,
    QuestionPaper4: questionpaper4,
    Oscillation: oscillation,
    NewtonianMechanics: newtonianMechanics,
    Thermodynamics: thermodynamics,
    Electromagnetism: electromagnetism,
    ChemicalReactions: chemicalReactions,
    AtomicStructure: atomicStructure,
    ChemicalBonding: chemicalBonding,
    AcidsAndBases: acidsAndBases,
    Algebra: algebra,
    Geometry: geometry,
    Calculus: calculus,
    Statistics: statistics,
    CellBiology: cellBiology,
    Genetics: genetics,
    Ecology: ecology,
    HumanAnatomy: humanAnatomy,
  };
  
  

  const convertTimeToSeconds = (time: string) => {
    let minutes = parseInt(time);
    let seconds = minutes * 60;
    return seconds;
  };

  const renderCountdown = () => {
    if (time !== '-') {
      const seconds = convertTimeToSeconds(time);
      console.log(seconds);
      return (
        <>
          <CountDown
            until={seconds}
            onFinish={() => setShowEnd(!showEnd)}
            size={15}
            digitStyle={{ marginTop: 0 }}
            digitTxtStyle={{ color: 'red' }}
            timeToShow={['H', 'M', 'S']}
            timeLabels={{ m: '', s: '' }}
            separatorStyle={{ color: 'red' }}
            showSeparator
          />
          <AwesomeAlert
            show={showEnd}
            title={t('time_up')}
            titleStyle={{ fontSize: 18, color: "#35a481" }}
            message={t('test_completed')}
            messageStyle={{
              borderBottomColor: '#becbd0',
              borderBottomWidth: 1,
              paddingBottom: '2%',
              color: "#becbd0",
              fontSize: 15,
              textAlign: 'center',
              fontWeight: '500'
            }}
            showCancelButton={true}
            cancelText="Ok"
            cancelButtonStyle={{ backgroundColor: 'white', alignItems: 'center', width: 70 }}
            cancelButtonTextStyle={{ color: '#35a481', fontSize: 15, fontWeight: '500' }}
            onCancelPressed={() => {
              navigation.navigate("Result", {
                heading: heading,
                time: time,
                question: question
              });
              setShowAlert(false);
            }}
          />
        </>
      );
    } else {
      return '-';
    }
  };

  const renderQuestionCard = ({ item }: any) => {
    return <QuestionCard question={item.question} a={item.a} b={item.b} c={item.c} d={item.d} />;
  };

  return (
    <Background>
      <View style={styles.header}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>{t(heading)}</Text>
        </View>
        <View style={styles.countConatiner}>
          <Text style={styles.coutText}>{t('remaining_time')}</Text>
          <View style={styles.countDown}>
            <Text>{renderCountdown()}</Text>
          </View>
        </View>
      </View>
      <View style={styles.questionPapperContainer}>
        <View>
          <FlatList
            data={questionsData[selectedQuestion]}
            renderItem={renderQuestionCard}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <ButtonClick label={t('finish')} onPress={() => setShowAlert(!showAlert)} />
        <AwesomeAlert
          show={showAlert}
          title={t('confirmation')}
          titleStyle={{ fontSize: 18, color: "#35a481" }}
          message={t('confirm_finish_test')}
          messageStyle={{
            borderBottomColor: '#becbd0',
            borderBottomWidth: 1,
            paddingBottom: '2%',
            color: "#becbd0",
            fontSize: 15,
            textAlign: 'center',
            fontWeight: '500'
          }}
          showCancelButton={true}
          cancelText={t('yes')}
          cancelButtonStyle={{ backgroundColor: 'white', alignItems: 'center', width: 70 }}
          cancelButtonTextStyle={{ color: '#35a481', fontSize: 15, fontWeight: '500' }}
          onCancelPressed={() => {
            navigation.navigate("Result", {
              heading: heading,
              time: time,
              question: question
            });
            setShowAlert(false);
          }}
          showConfirmButton={true}
          confirmText={t('no')}
          confirmButtonStyle={{ backgroundColor: "white", alignItems: 'center', width: 70 }}
          confirmButtonTextStyle={{ color: '#35a481', fontSize: 15 }}
          onConfirmPressed={() => {
            setShowAlert(false);
          }}
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          onDismiss={() => console.log('Dismiss Called.')}
        />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  header: {
    // backgroundColor : 'pink',
    height: deviceHeight / 7,
    justifyContent: 'space-between',
    alignItems: 'center'

  },
  questionPapperContainer: {
    height: deviceHeight / 1.5,
    justifyContent: 'center'
  },
  footer: {

    // backgroundColor : 'blue',
    height: deviceHeight / 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'

  },
  headingContainer: {

    height: '50%',
    justifyContent: 'flex-start',
    // backgroundColor : 'yellow',
    width: '100%',
    alignItems: 'center'

  },
  heading: {
    fontSize: 27,
    color: '#12282f',
    fontWeight: '600',
    letterSpacing: 0.6,
  },
  countConatiner: {
    // backgroundColor : 'blue',
    width: '100%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 1,
  },
  coutText: {
    fontSize: 15,
    color: '#becbd0',
    fontWeight: '500',
    letterSpacing: 0.6,

  },
  countDown: {

  }
})