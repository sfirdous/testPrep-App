import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from './Icon';

const SettingsOption = ({ iconType, iconName, optionText, optionDescription, onPress } : any) => {
  return (
    <TouchableOpacity style={styles.option} onPress={onPress}>
      <Icon type={iconType} name={iconName} color='#35a481' size={25} />
      <View style={styles.optionContent}>
        <Text style={styles.optionText}>{optionText}</Text>
        <Text style={styles.optionDescription}>{optionDescription}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionContent: {
    marginLeft: 15,
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  optionDescription: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
});

export default SettingsOption;
