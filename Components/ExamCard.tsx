import { Text, StyleSheet, Dimensions,TouchableOpacity,Image } from 'react-native'
import React  from 'react'
import { useTranslation } from 'react-i18next';


const deviceHeight = Dimensions.get('screen').height
const deviceWidth = Dimensions.get('screen').width

export default function ExamCard({examName,img,onPress} : any){

  const { t } = useTranslation();
    return (
      <TouchableOpacity onPress={onPress} style = {styles.examContainer}>
        <Image style = {styles.image}source={img}/>
        <Text style = {styles.examText}>{t(examName)}</Text>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  examContainer : {

    height : deviceHeight / 10,
    width : deviceWidth / 1.5,
    // backgroundColor : '#35a481',
    marginRight : 50,
    flexWrap : 'wrap',
    flexDirection : 'row',
    justifyContent : 'center',
    gap : 15,
    borderWidth : 2,
    borderColor : '#becbd0',
    borderRadius : 15,
    alignItems : 'center',
    paddingVertical : 6,


  },
  examText : {
    fontSize : 25,
    width : '50%',
    alignItems : 'center',
    // backgroundColor : 'yellow',
    textAlign : 'center',
    color : '#12282f',
    fontWeight : '800',
    letterSpacing : 0.6,
    
  },
  image : {
    height : '100%',
    width : '40%',
    resizeMode : 'contain',
    alignItems : 'center',
    
  }
})

