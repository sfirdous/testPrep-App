import React from 'react';
import { StyleSheet,Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SubjectScreen from './SubjectScreen';
import PapperScreen from './PapperScreen';
import { useTranslation } from 'react-i18next';
import HistoryScreen from './HistoryScreen';
import { RouteProp } from '@react-navigation/native';
import PlainBackground from './PlainBackground';




const Tab = createMaterialTopTabNavigator();

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export const AppTab = () => {
  const { t } = useTranslation();
  

  return (
    
    <Tab.Navigator
      screenOptions={() => ({
        tabBarStyle: styles.navigationStyle,
        tabBarLabelStyle: styles.tabLabel,
        tabBarIndicatorStyle: styles.tabIndicator,
        tabBarActiveTintColor: '#35a481',
        tabBarInactiveTintColor: '#12282f',
      })}
    >
      <Tab.Screen
        name="Subjects"
        component={SubjectScreen}
        options={{
          tabBarLabel: t('subjects'),
        }}
      />
      <Tab.Screen
        name="Pappers"
        component={PapperScreen}
        options={{
          tabBarLabel: t('test_paper'),
        }}
      />
      <Tab.Screen
        name="Test History"
        component={HistoryScreen}
        options={{
          tabBarLabel: t('test_history'),
        }}
      />
    </Tab.Navigator>
    
  );
};

const styles = StyleSheet.create({
  navigationStyle: {
    backgroundColor: 'white',
    
  },
  tabLabel: {
    fontSize: 14,
    fontWeight: 'bold',

  },
  tabIndicator: {
    backgroundColor :'#35a481',
  },
});

export default AppTab;


