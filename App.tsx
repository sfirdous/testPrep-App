// In App.js in a new project

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from './Components/Welcome'
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import AppTab from './Components/AppTab';
import QuestionPapperScreen from './Components/QuestionPapperScreen'
import PapperCarousel from './Components/PapperCarousel';
import InstructionScreen from './Components/InstructionScreen';
import ResultScreen from './Components/ResultScreen';
import SubjectCarosel from './Components/SubjectCarosel';


const Stack = createNativeStackNavigator();


function App() {




  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="AboutTab" component={AppTab} />
        <Stack.Screen name="PapperCarousel" component={PapperCarousel} />
        <Stack.Screen name="SubjectCarosel" component={SubjectCarosel} />
        <Stack.Screen name="Instruction" component={InstructionScreen} />
        <Stack.Screen name="Question" component={QuestionPapperScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  
  );
}

export default App;