
import React from 'react'
import PlainBackground from './PlainBackground'
import TestInformationCard from './TestInformationCard'
import TestInstructionCard from './TestInstructionCard'
import { useNavigation } from '@react-navigation/native';


export default function InstructionScreen({route} : any) {

    const { heading, question, time } = route.params;
    
    
    const navigation = useNavigation();
  
    return (
        <PlainBackground>
            <TestInformationCard testName = {heading} noQuetion = {question} testDuration = {time}/>
            <TestInstructionCard question = {question} heading = {heading} time = {time} navigation = {navigation}/>
        </PlainBackground>
    )
 
}
