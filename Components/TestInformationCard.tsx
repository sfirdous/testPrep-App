import { Text, StyleSheet, View, Dimensions } from 'react-native'
import React ,{useEffect, useState}from 'react'
import { useTranslation } from 'react-i18next';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default function TestInformationCard({ testName, noQuetion, testDuration }: any) {

    const {t} = useTranslation()

    const [currentDate , setCurrentDate] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDate(new Date())
        },1000)
        return() => clearInterval(timer)
    } ,[])


    return (
        <View style={styles.mainContainer}>

            <View style={styles.textNameConatiner}>
                <Text style={styles.smallTextLight}>
                {t('test_name')}
                </Text>
                <Text style={styles.testName}>

                    {t(testName)}

                </Text>

            </View>
            <View style={styles.testInformationConatiner}>
                <View style={styles.dateContainer}>
                    <Text style={styles.smallTextLight}>
                        {t('date_of_test')}
                    </Text>
                    <Text style={styles.smallTextDark}>
                        {currentDate.toLocaleDateString()}
                    </Text>

                </View>
                <View style={styles.noConatiner}>

                    <Text style={styles.smallTextLight}>
                        {t('number_of_questions')}
                    </Text>
                    <Text style={styles.smallTextDark}>
                        {t(noQuetion)}
                    </Text>

                </View>
                <View style={styles.durationContainer}>

                    <Text style={styles.smallTextLight}>
                        {t('duration')}
                    </Text>
                    <Text style={styles.smallTextDark}>
                        {t(testDuration)}
                    </Text>


                </View>

            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
        width: deviceWidth / 1.2,
        height: deviceHeight / 3,
        alignSelf: 'center',
        padding: '1%',
        alignItems: 'center',
        borderRadius : 30,
        marginBottom : '15%', 
        elevation : 3

    },
    textNameConatiner: {

        height: '30%',
        width: '100%',
        // backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',


    },
    smallTextLight: {

        fontSize: 15,
        color: '#becbd0',
        fontWeight: '500',
        letterSpacing: 0.6,


    },
    smallTextDark: {

        fontSize: 20,
        color: '#6b9c93',
        fontWeight: '400',
        letterSpacing: 0.6,

    },
    testName: {

        fontSize: 30,
        color: '#35a481',
        fontWeight: '700',
        letterSpacing: 0.6,

    },
    testInformationConatiner: {
        borderTopColor: '#eaeef2',
        borderTopWidth: 2,
        paddingTop: '2%',
        // backgroundColor : 'blue',
        width: '80%',
        height: '70%',
        justifyContent: 'space-between',
        alignItems: 'center',




    },
    dateContainer: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    noConatiner: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    durationContainer: {
        justifyContent: 'center',
        alignItems: 'center',

    }



})