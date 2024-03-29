import React from 'react';
import {Image} from 'react-native';
import Standings from '../LeagueStandings/Standings';
import Home from '../Home/Home';
import Schedule from '../Schedule/Schedule';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();
import styles from './styles';

const NavBar = () => {
  return (
    <Tab.Navigator barStyle={styles.background}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({}) => (
            <Image source={require('../../Images/home-icon.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={Schedule}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({}) => (
            <Image source={require('../../Images/schedule-icon.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="Standings"
        component={Standings}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({}) => (
            <Image source={require('../../Images/standings-icon.png')} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavBar;
