import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet, Dimensions } from 'react-native';


const languages = [
    { label: 'English', value: 'en' },
    { label: 'हिंदी', value: 'hi' },
    { label: 'मराठी', value: 'mr' },
  ];


function LanguageSelectionScreen({ navigation }  : any) {
    const [selectedLanguage, setSelectedLanguage] = useState('en');
    const deviceWidth = Dimensions.get('window').width;
  
    return (
      <Modal animationType="slide" transparent={true} visible={true}>
        <View style={styles.modalContainer}>
          <View style={[styles.modalContent, { width: deviceWidth - 40 }]}>
            <Text style={styles.modalTitle}>App language</Text>
            <FlatList
              data={languages}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.languageOption}
                  onPress={() => setSelectedLanguage(item.value)}
                >
                  <Text style={styles.languageLabel}>{item.label}</Text>
                  {selectedLanguage === item.value && <Text style={styles.checkMark}>✓</Text>}
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };

  export default LanguageSelectionScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5', // Light background color
    },
    option: {
      fontSize: 18,
      margin: 20,
      color: '#333', // Dark text color
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent dark overlay
    },
    modalContent: {
      backgroundColor: '#fff', // Light modal background color
      borderRadius: 10,
      padding: 20,
      alignItems: 'center',
    },
    modalTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#333', // Dark text color
    },
    languageOption: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      width: '100%',
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
    },
    languageLabel: {
      fontSize: 18,
      color: '#333', // Dark text color
    },
    checkMark: {
      fontSize: 18,
      color: '#333', // Dark text color
    },
    closeButton: {
      marginTop: 20,
      padding: 10,
      backgroundColor: '#becbd0', // Light button background color
      borderRadius: 5,
    },
    closeButtonText: {
      fontSize: 18,
      color: '#35a481', // Button text color matching the theme
    },
  });