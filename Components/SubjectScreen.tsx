import React from 'react'
import SubjectCarosel from './SubjectCarosel'
import { useNavigation } from '@react-navigation/native';
import Background from './Background';




const SubjectScreen = () => {
  
  
  const navigation = useNavigation();

  return (
    <Background>
      <SubjectCarosel navigation={navigation} />
    </Background>
  )
}


export default SubjectScreen