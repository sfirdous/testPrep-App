import { Text, StyleSheet, View, Dimensions } from 'react-native'
import React, { useState } from 'react'
import RadioButtons from './RadioButtons'
import { useTranslation } from 'react-i18next';


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;


export default function QuestionCard({ question, a, b, c, d }: any) {



    const {t} = useTranslation()
    const options = [a, b, c, d]
    const [option, setOption] = useState("")

    return (
        <View style = {styles.questionCardContainer}>
            <View style = {styles.questionContainer}>
                <Text style = {styles.question}>{t(question)}</Text>
            </View>
            <View style = {styles.optionContainer}>
                <RadioButtons options={options} selectedOption={option} onSelect={setOption} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    questionCardContainer : {
        // backgroundColor : 'pink',
        justifyContent : 'flex-start',
        borderBottomColor : '#eaeef2',
        height : deviceHeight /3.5,
        padding : '2%'
    },
    questionContainer : {
            // backgroundColor : 'blue',
            width : '100%',
            height : '20%',
            justifyContent : 'center',
            marginBottom : '1%',
    },
    question : {
        fontSize: 15,
        color: '#35a481',
        fontWeight: '500',
        letterSpacing: 0.6,
        flexWrap : 'wrap',
    },
    optionContainer :{
        // backgroundColor : 'yellow',
        width : '100%',
    }
})
