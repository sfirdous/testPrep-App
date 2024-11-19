import { Text, StyleSheet, View, Dimensions } from 'react-native'
import React, { useState } from 'react'
import ButtonClick from './ButtonClick';
import { useTranslation } from 'react-i18next';


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default function TestInstructionCard({ navigation, heading, time,question }: any) {

   const {t} = useTranslation()

    return (
        <View style={styles.mainContainer}>
            <View>
                <View>
                    <Text style={styles.smallTextDark}>
                     {t('instructions_header')}
                    </Text></View>



                <View>
                    <Text style={styles.smallTextLight}>
                        {t('instruction_1')} {'\n'}
                        {t('instruction_2')} {'\n'}
                        {t('instruction_3')} {'\n'}
                    </Text>
                </View>
            </View>
            <ButtonClick label={t('start_test')} onPress={() => {
                navigation.navigate("Question",{
                    heading: heading,
                    time: time,
                    question : question
                    
                });
            }} />
        </View>

    )

}

const styles = StyleSheet.create({
    mainContainer: {

        // backgroundColor : 'pink',
        height: deviceHeight / 2,
        width: deviceWidth / 1.2,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        alignSelf: 'center'


    },

    smallTextLight: {

        fontSize: 15,
        color: '#becbd0',
        fontWeight: '400',
        letterSpacing: 0.6,


    },
    smallTextDark: {

        fontSize: 20,
        color: '#12282f',
        fontWeight: '600',
        letterSpacing: 0.6,

    },
})