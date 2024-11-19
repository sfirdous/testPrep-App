import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import Icon from './Icon';
import SettingsOption from './SettingsOption';
import Background from './Background';

const SettingsScreen = ({ navigation }: { navigation: any }) => {
    return (
        <Background>
            <ScrollView style={styles.container}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon type="ant" name="arrowleft" size={24} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Settings</Text>
                    <TouchableOpacity>
                        <Icon type="ant" name="search1" size={24} color="#000" />
                    </TouchableOpacity>
                </View>
                <View style={styles.header}>
                    <Image source={require('../assests/profile.jpg')} style={styles.profileImage} />
                    <Text style={styles.name}>Richard Torris</Text>
                    <Text style={styles.emoji}>0123456789</Text>
                </View>
                <SettingsOption
                    iconType="ionicon"
                    iconName="key-outline"
                    optionText="Account"
                    optionDescription="Security notifications, change number"

                />
                <SettingsOption
                    iconType="ionicon"
                    iconName="person-outline"
                    optionText="Avatar"
                    optionDescription="Create, edit, profile photo"

                />
                <SettingsOption
                    iconType="ionicon"
                    iconName="globe-outline"
                    optionText="App language"
                    optionDescription="English (device's language)"
                    onPress={() => navigation.navigate('LanguageSelection')}

                />
                <SettingsOption
                    iconType="ionicon"
                    iconName="help-circle-outline"
                    optionText="Help"
                    optionDescription="Help center, contact us, privacy policy"

                />
                <SettingsOption
                    iconType="ionicon"
                    iconName="cart-outline"
                    optionText="Cart"
                    optionDescription="Manage your cart"

                />
            </ScrollView>
        </Background>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        alignItems: 'center',
        marginVertical: 20,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    emoji: {
        fontSize: 20,
        marginTop: 5,
    },
    option: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
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
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderBottomColor: '#ccc',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default SettingsScreen;
