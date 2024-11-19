import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, Image, Text, TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import MineralGreenBackground from './MineralGreenBackground';
import ButtonClick from './ButtonClick';
import Icon from './Icon';



const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;


const data = [
  { label: 'NEET', value: '1' },
  { label: 'MHT-CET (PCMB)', value: '2' },
  { label: 'MHT-CET (PCM)', value: '3' },
  { label: 'MHT-CET (PCB)', value: '4' },

];

const ExamSelection = ({ navigation }: { navigation: any }) => {
  const [value, setValue] = useState<string | null>(null);
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);
  const [isFocus, setIsFocus] = useState(false);



  return (
    <MineralGreenBackground>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.notificationButton} onPress={() => navigation.navigate('Settings')}>
          <Icon type="feather" name="settings" size={25} color="#35a481" />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomView}>
        <View style={styles.profileContainer}>
          <Image
            source={require('../assests/profile.jpg')} // Replace with your profile image URL
            style={styles.profileImage}
          />
          <View style={styles.textContainer}>
            <Text style={styles.greetingText}>Hello</Text>
            <Text style={styles.nameText}>Richard Torris</Text>
          </View>
        </View>
        <View style = {{backgroundColor : '#eaeef2' , height : deviceHeight /2,justifyContent : 'center',borderRadius : 30,gap : 30}}>
        <View style={styles.cardContent}>
          <View style={styles.textContainerB}>
            <Text style={styles.titleText}>Exam Type</Text>
            <Text style={styles.subtitleText}>Select the exam type to prepare for</Text>
          </View>
        </View>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: '#35a481' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={160}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select Exam' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setValue(item.value);
            setSelectedLabel(item.label);
            setIsFocus(false);
          }}
        />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AboutTab', { selectedLabel })} >
          <Text style={styles.buttonText}>Next</Text>
          <Icon type="materialCommunity" name="greater-than" size={20} color="white" />
        </TouchableOpacity>
        </View>
      </View>

    </MineralGreenBackground>
  );
};

export default ExamSelection;

const styles = StyleSheet.create({

  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  textContainer: {
    flex: 1,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitleText: {
    fontSize: 19,
    color: '#666',
    marginTop: 5,
    fontWeight: '600',
  },
  icon: {
    marginLeft: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFB74D',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: 'flex-start',
    width: deviceWidth,
    height: 60,
    marginLeft: '5%',
    gap: 260,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    marginRight: 10,
  },

  headerContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
    height : deviceHeight / 5,
    width: deviceWidth
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  textContainerB: {
    marginLeft: 10,
  },
  greetingText: {
    color: 'white',
    fontSize: 25,
  },
  nameText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  notificationButton: {
    width: 50,
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent white background
    borderRadius: 10, // Rounded corners
    justifyContent: 'center',
    alignItems: 'center',
  },



  upperView: {
    paddingHorizontal: deviceWidth / 50,
    height: deviceHeight / 5,
    // backgroundColor: 'yellow',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 15

  },
  bottomView: {
    backgroundColor: '#35a481',
    height: deviceHeight / 1.25,
    paddingHorizontal: deviceWidth / 30,
    paddingVertical: deviceHeight / 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    gap: 40
  },
  profileView: {
    height: 90,
    width: 90,

    padding: 7,
    borderRadius: 100,
    borderColor: '#becbd0'
  },
  profile: {
    height: '100%',
    width: '100%',
    borderRadius: 100
  },
  container: {
    backgroundColor: 'white',
    padding: 16,
    justifyContent: 'center',
    flex: 1
  },
  dropdown: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 8,
    width : deviceWidth / 1.2,
    marginLeft : '6%',
  },
  iconB: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});