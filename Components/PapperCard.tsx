import { Text, StyleSheet, View, Dimensions, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import Icon from './Icon'
import { useTranslation } from 'react-i18next';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default function PapperCard({ heading, time, question, subjects, access, onPress }: any) {
    const { t } = useTranslation();

    return (
        
        <View style={styles.cardContainer}>
            
            <View style={styles.headContainer}>
                <View>
                    <Text style={styles.headerText}>{t(heading)}</Text>
                    <Text style={styles.desText}>{t(subjects)}</Text>
                </View>

                <View style={styles.smallTextContainer}>
                    <Text style={styles.smallText}>{t(time)}</Text>
                    <Text style={styles.smallText}>{t(question)}</Text>
                    <Text style={styles.smallText}>{t(access)}</Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={onPress} style = {{flexDirection : 'row',justifyContent : 'space-evenly' ,alignItems : 'center'}}>
                    <Icon type='simpleLine' name='pencil' color='#12282f' size={15} />
                    <Text style = {styles.desText}>{t('take_test')}</Text>
                </TouchableOpacity>
            </View>
            
        </View>
        
    );
}

const styles = StyleSheet.create({
    cardContainer: {

        backgroundColor: 'white',
        height: 'auto',
        width: deviceWidth / 1.2,
        justifyContent: 'center',
        
        padding: '3%',
        borderRadius: 10,
        marginBottom : '5%',
        elevation : 3


    },


    headContainer: {
        // backgroundColor :'pink',
        borderBottomColor: '#eaeef2',
        borderBottomWidth: 2,
        marginBottom : '2%'
    },

    headerText: {

        fontSize: 20,
        fontWeight: '900',
        letterSpacing: 0.6,
        color: '#12282f',
        marginBottom : '1%'


    },
    desText: {
        fontSize: 15,
        color: '#becbd0',
        fontWeight: '600',
        letterSpacing: 0.6,
        marginBottom : '1%'


    },
    smallTextContainer: { flexDirection: 'row', justifyContent: 'flex-start', gap: 20, marginBottom : '3%'},
    smallText: {
        
    
        color: '#12282f',
        fontWeight: '500',

    },
    buttonContainer :{
        
       borderWidth : 1,
       padding : '1%',
       width : '40%',
       borderColor : '#eaeef2',
       borderRadius : 10,
    
    }
})