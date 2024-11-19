import { Text, StyleSheet, View, FlatList, Dimensions } from 'react-native';
import React from 'react';
import PapperCard from './PapperCard';
import { useTranslation } from 'react-i18next';


const deviceHeight = Dimensions.get('window').height;




const PapperCarousel = ({ questionDetails, navigation }: any) => {
    const {t} = useTranslation()

    const renderItem = ({ item }: any) => {
    console.log(item.question)
        return <PapperCard heading={item.heading} question={item.question} time={item.time} subjects={item.subjects} access={item.access} onPress={() => {
            navigation.navigate("Instruction", {
                heading: item.heading,
                question: item.question,
                time: item.time
                
            })
        }} />;
    };

    return (
        <View style={styles.listConatiner}>
            <View style={styles.head}>
                <Text style={styles.headerText}>{t('question_pappers')}</Text>
                <Text style={styles.smallText}>{t('select_paper_description')}</Text>
            </View>
            <View style={{ height: '80%', width: '90%', justifyContent: 'center', alignItems: 'center' }}>
                <FlatList
                    data={questionDetails}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                />
            </View>


        </View>
    );
};

export default PapperCarousel;



const styles = StyleSheet.create({

    listConatiner: {
        // backgroundColor : 'pink',
        height: deviceHeight / 1.2,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'

    },
    head: {
        justifyContent: 'flex-start',
        height: '20%',
        width: '90%',
        alignItems: 'center'


    },
    headerText: {
        fontSize: 30,
        fontWeight: '900',
        letterSpacing: 0.6,
        color: 'white',
        marginBottom: '1%',


    },
    smallText: {


        fontSize: 15,
        color: '#eaeef2',
        fontWeight: '500',
        letterSpacing: 0.6,
        marginBottom: '1%',
        textAlign: 'center',

    }

})