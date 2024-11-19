import React from 'react'
import { View, Image, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native'
import { useTranslation } from 'react-i18next';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;


function SubjectCard({ imgSource, sName, sDes, onPress }: any) {
    const { t } = useTranslation();

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.cardContent}>
                <View style={styles.contentContainer}>
                    <View style={styles.iconConatiner}>
                        <Image style={styles.img} source={imgSource} />
                    </View>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.subText}>{t(sName)}</Text>
                    <Text style={styles.smallText}>{t(sDes)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    cardContent: {
        
        height: '100%',
        width : '85%',
        borderRadius: 35,
        overflow: 'hidden',
        marginRight: 58,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#becbd0',
        borderWidth: 2,
        // backgroundColor : 'yellow',
        padding : 15,
        gap : 10,
        

    },
    contentContainer: {
        height: '50%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor : 'pink'
    },

    iconConatiner: {
        backgroundColor: '#eaeef2',
        height: 78,
        width: 78,
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2%',
        borderRadius: 200,
        position: 'absolute'


    },
    img: {
        height: '100%',
        width: '100%',
    },

    textContainer: {

        // borderTopColor : '#35a481',
        // borderTopWidth : 1,
        height: '40%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        // backgroundColor : 'blue'
    },

    subText: {

        textAlign: 'center',
        fontSize: 25,
        color: '#12282f',
        fontWeight: '600',
        letterSpacing: 2,


    },
    smallText: {

        fontSize: 15,
        color: '#becbd0',
        fontWeight: '400',
        letterSpacing: 0.6,
        textAlign: 'center',

    }

    //   backgroundColor: 'yellow' },
})

export default SubjectCard