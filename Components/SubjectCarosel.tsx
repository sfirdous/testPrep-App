import React, { useState } from 'react';
import { FlatList, View, Dimensions, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import SubjectCard from './SubjectCard';
import { Physics, Chemistry, Maths, Biology } from './QuestionData';
import PapperCard from './PapperCard';
import { NEET, MHTPCB, MHTCETPCMB, MHTPCM, examlabel } from '../Components/QuestionData';
import ExamCard from './ExamCard';

const deviceHeight = Dimensions.get('window').height;

const SubjectCarosel = ({ navigation }: any) => {
    const { t } = useTranslation();

    interface SubjectData {
        [key: string]: { heading: string; time: string; question: string; subjects: string }[];
    }

    const subjectsData: SubjectData = {
        Physics: Physics,
        Chemistry: Chemistry,
        Maths: Maths,
        Biology: Biology
    };

    const examsData: { [key: string]: any[] } = {
        'NEET' : NEET,
        'MHT-CET (PCMB)': MHTCETPCMB,
        'MHT-CET (PCM)': MHTPCM,
        'MHT-CET (PCB)': MHTPCB,
    };

    const [selectedSubject, setSelectedSubject] = useState('Physics');

    const [subjectList, setSubjectList] = useState(examsData['NEET']);

    const handleSubjectPress = (subjectName: string) => {
        setSelectedSubject(subjectName); // Update state when SubjectCard is pressed
    };

    const handleExamPress = (examName: string) => {
     
        setSubjectList(examsData[examName]); // Update the subject list based on the selected exam
    };

    const renderContent = ({ item }: any) => {
        return (
            <PapperCard
                heading={item.heading}
                question={item.question}
                time={item.time}
                subjects={item.subjects}
                access={item.access}
                onPress={() => {
                    navigation.navigate("Instruction", {
                        heading: item.heading,
                        question: item.question,
                        time: item.time
                    });
                }}
            />
        );
    };

    const renderItem = ({ item }: any) => {
        return (
            <SubjectCard
                imgSource={item.imgSource}
                sName={item.sName}
                sDes={item.sDes}
                onPress={() => handleSubjectPress(item.sName)}
            />
        );
    };

    const renderExam = ({ item }: any) => {
        return <ExamCard examName={item.examName} img = {item.img} onPress={() => handleExamPress(item.examName)} />;
    };

    return (
        <View style={styles.mainContainer}>
            <View>
                <View>
                    <Text style={styles.headerText}>{t('Exams')}</Text>
                </View>
                <View style = {{marginVertical : '3%'}}>
                    <FlatList
                        data={examlabel}
                        renderItem={renderExam}
                        keyExtractor={(item) => item.examName}
                        horizontal
                        showsHorizontalScrollIndicator = {false}
                    />
                </View>
            </View>
            <View style={styles.listContainer}>
                <View style={styles.head}>
                    <Text style={styles.headerText}>{t('all_subjects')}</Text>
                </View>
                <View style={styles.subContainer}> 
                    <FlatList
                        data={subjectList}
                        renderItem={renderItem}
                        horizontal
                        keyExtractor={(item) => item.sName}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
            <View style={styles.papperCarousel}>
                <View style={styles.papperheader}>
                    <Text style={styles.title}>{t('test_paper')}: </Text>
                    <Text style={styles.subjectName}>{t(selectedSubject)}</Text>
                </View>
                <View style={{ justifyContent: 'flex-start' }}>
                    <View style={{ height: '65%', width: '90%', justifyContent: 'center' }}>
                        <FlatList
                            data={subjectsData[selectedSubject]}
                            renderItem={renderContent}
                            keyExtractor={(item) => item.heading}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        width: '100%',
        gap: 3,
    },
    listContainer: {
        height: deviceHeight / 3,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 5
    },
    papperheader: {
        width: '90%',
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    title: {
        fontSize: 25,
        fontWeight: '700',
        letterSpacing: 0.5,
        color: 'white',
    },
    subjectName: {
        fontSize: 25,
        fontWeight: '500',
        letterSpacing: 0.5,
        color: 'white'
    },
    papperCarousel: {
        paddingTop: '5%',
        backgroundColor: '#35a481',
        alignItems: 'center',
        gap: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    head: {
        justifyContent: 'flex-start',
        height: '20%',
        width: '100%',
    },
    headerText: {
        fontSize: 30,
        fontWeight: '900',
        letterSpacing: 0.6,
        color: '#12282f',
    },
    smallText: {
        fontSize: 15,
        color: '#35a481',
        fontWeight: '600',
        letterSpacing: 0.6,
        marginBottom: '1%',
        textAlign: 'center',
    },
    subContainer: {
        height: '68%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
});






export default SubjectCarosel;
