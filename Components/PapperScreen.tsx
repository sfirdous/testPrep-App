import React from 'react'
import PlainBackground from './PlainBackground'
import PapperCarousel from './PapperCarousel'
import { useNavigation } from '@react-navigation/native';
import { questionDetails } from './QuestionData'

function PapperScreen() {

  const navigation = useNavigation();
  return (
    <PlainBackground>
      <PapperCarousel questionDetails = {questionDetails} navigation={navigation} />
    </PlainBackground>
  )
}

export default PapperScreen