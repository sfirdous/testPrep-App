import React from 'react'
import {
    Dimensions,
    StyleSheet,
   
    View,
    
    TextInput,
  
  } from 'react-native';
  import Icon from './Icon';

  const deviceHeight = Dimensions.get('window').height;
  const deviceWidth = Dimensions.get('window').width;

function InputField({iType,iName,placeH,password} : any) {
  const iconName = iName || 'cursor-default';
  const iconType = iType || 'materialCommunity'
  return (
    <View style = {styles.input}> 
        <Icon type= {iconType} name= {iconName} color= '#becbd0' size={20} />
        <TextInput secureTextEntry = {password ? true : false} placeholder= {placeH} style={styles.textInput} />
    </View>
  )
}

const styles = StyleSheet.create({
    input : {
        backgroundColor: '#eaeef2',
        justifyContent: 'center',
        flexDirection : 'row',
        alignItems : 'center',
        paddingHorizontal : '5%',
        gap : 5,

       
        // padding: '5%',
        width: deviceWidth/1.2,
        height : 45,
        borderRadius : 5,
        
    },
    textInput : { flex: 1, fontSize: 15, color : '#becbd0'},
})

export default InputField