import React from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
  } from 'react-native';
import LeagueStandings from "./LeagueStandings";
import Home from "./Home";
import Schedule from "./Schedule";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

const NavBar = () =>{
    return (
      <Tab.Navigator barStyle={{ backgroundColor: '#808080' }}>
            <Tab.Screen name="Home" component={Home} options={{
          tabBarLabel: '',
          tabBarIcon: ({}) => (
            <Image source={require("../Images/home-icon.png")}/>
          ),
        }} />
            <Tab.Screen name = "Schedule" component={Schedule} options={{
          tabBarLabel: '',
          tabBarIcon: ({  }) => (
            <Image source={require("../Images/schedule-icon.png")}/>
          ),
        }} />
            <Tab.Screen name="Standings" component={LeagueStandings} options={{
          tabBarLabel: '',
          tabBarIcon: ({  }) => (
            <Image source={require("../Images/standings-icon.png")}/>
          ),
        }}  />
        </Tab.Navigator>
      );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#808080',
  },
});

export default NavBar;
/*<Tab.Navigator>
          <Tab.Screen name="Home" component={LeagueStandings} />
          <Tab.Screen name="Settings" component={Home} />
        </Tab.Navigator>*/