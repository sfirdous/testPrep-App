import { Text, Image, View, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import Background from './Background'
import ResultCard from './ResultCard'
import { history } from './QuestionData'
import { useTranslation } from 'react-i18next'




function HistoryScreen() {

  const renderResultCard = ({ item }: any) => {
    return <ResultCard test_name={item.test_name} test_date={item.test_date} test_time={item.test_time} time_taken={item.time_taken} percentage={item.percentage} />;
  };

  const calculateMetadata = (historyArray: any[]) => {
    const numTests = historyArray.length;
    const totalPercentage = historyArray.reduce((acc, test) => {
      return acc + parseFloat(test.percentage);
    }, 0);
    const averagePercentage = (totalPercentage / numTests).toFixed(2) + '%';

    return {
      number_of_tests: numTests,
      average_percentage: averagePercentage,
    };
  };

  const metadata = calculateMetadata(history);

  const { t } = useTranslation()

  return (
    <Background>
      <View style = {{justifyContent : 'flex-start',height : '100%'}}>
        <View style={{ height: '10%' }}>
          <Text style={styles.headerText}>{t('Recent Test Scores')}</Text>
        </View>
        <View style={styles.boxsCon}>
          <View style={[{ backgroundColor: '#35a481' }, styles.box]}>
            <Text style={styles.smallText}>{t('Tests Taken')} </Text>
            <Text style={styles.largeText}>{metadata.number_of_tests}</Text>
          </View>
          <View style={[{ backgroundColor: '#f68d6c' }, styles.box]}>
            <Text style={styles.smallText}>{t('Average Score')}</Text>
            <Text style={styles.largeText}>{metadata.average_percentage}</Text>
          </View>
        </View>
        <View style={styles.resultList}>

          <FlatList
            data={history}
            renderItem={renderResultCard}
            showsVerticalScrollIndicator={false}
          />

        </View>
      </View>
    </Background>



  )

}

export default HistoryScreen

const styles = StyleSheet.create({

  resultList: {
    backgroundColor: 'white',
    height: '50%',
  },
  headerText: {
    fontSize: 28,
    fontWeight: '900',
    letterSpacing: 0.6,
    color: '#12282f',
  },
  boxsCon: {

    flexDirection: 'row',
    height: '30%',
    // backgroundColor: 'pink',
    justifyContent: 'space-between',
    alignItems: 'flex-start'


  },
  box: {

    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
    gap: 4,
    borderRadius: 43,
    elevation: 6,
    height: '75%'

  },
  largeText: {

    textAlign: 'center',
    color: 'white',
    fontSize: 35,
    fontWeight: '600',
    letterSpacing: 0.4


  },

  smallText: {

    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.6,


  }

})