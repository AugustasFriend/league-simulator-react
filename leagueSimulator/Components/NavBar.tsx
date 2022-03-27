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
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const NavBar = () =>{
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Settings" component={LeagueStandings} />
        </Tab.Navigator>
      );
}

export default NavBar;
/*<Tab.Navigator>
          <Tab.Screen name="Home" component={LeagueStandings} />
          <Tab.Screen name="Settings" component={Home} />
        </Tab.Navigator>*/