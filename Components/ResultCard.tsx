import React from 'react'
import { useTranslation } from 'react-i18next'
import { View, Text, StyleSheet ,Dimensions, TouchableOpacity} from 'react-native'
import Icon from './Icon';


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default function ResultCard({ test_name, test_date, test_time, time_taken, percentage }: any) {

    const {t} = useTranslation()
    return (
        <View style={styles.mainView}>
            <View style={styles.leftView}>
                <View style = {styles.testNameCon}>
                    <Text style = {styles.testName}>
                        {t(test_name)}
                    </Text>
                </View>
                <View style = {styles.testDataCon}>
                <Text style = {styles.testData}>
                    {t(test_date)} {'\t'}
                    {t(test_time)} {'\n'}
                    {t(time_taken)} 
                </Text>
                </View>
            </View>
            <View style = {styles.rightView}>
            <View style={styles.percentageView}>
                <Text style = {styles.percentage}>{t(percentage)}</Text>
            </View>
            <View style = {styles.iconView}>
                <TouchableOpacity onPress={() => {}}>
                <Icon type = "feather" name = "arrow-right" size = {20} color = {'#12282f'} />
                </TouchableOpacity>
            </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    mainView: {

        // backgroundColor : 'pink',
        flexDirection : 'row',
        justifyContent : 'flex-start',
        alignItems : 'center',
        width : '100%',
        paddingVertical : '3%',
        borderTopColor : '#becbd0',
        borderTopWidth :1,
        paddingHorizontal : '2.5%'
        

    },
    leftView: {

        width : '70%',
        gap : 5,

    },

    rightView : {

        // backgroundColor : 'blue',
        flexDirection : 'row',
        justifyContent : 'flex-end',
        width : '30%',
        gap : 8,
        

    },
    percentageView: {


    },
    iconView : {
        alignItems : 'center',
        justifyContent : 'center'

    },
    testNameCon : {

    },
    testName : {

        fontSize : 18,
        fontWeight : '500',
        color : '#12282f',
        letterSpacing : 0.4

    },
    testDataCon : {
        // backgroundColor : 'blue',
        flexDirection : 'row'

    },
    testData : {
        fontSize: 14,
        color: '#becbd0',
        letterSpacing: 0.6,
        fontWeight : '500',

    },
    percentage  : { 

        fontSize: 25,
        color: '#12282f',
        fontWeight: '600',
        letterSpacing: 0.6,

    }

})
