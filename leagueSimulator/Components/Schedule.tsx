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

  const Schedule = () =>{
    return(
        <SafeAreaView style={styles.background}>
          <ScrollView>
              <Text>SCHEDULE</Text>
          </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    background:{
      backgroundColor: "#433F3F",
      flex: 1,
    },
})

  export default Schedule;