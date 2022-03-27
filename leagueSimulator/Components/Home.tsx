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
  import Col from "react-bootstrap/Col";
  import Row from "react-bootstrap/Row";
  import Container from "react-bootstrap/Container";
  import { TeamData } from "../JSON/TeamData";

  const images = [
      require("../Images/abersinn-big-logo.png"),
      require("../Images/dijleon-big-logo.png")
  ]

  const Home = () =>{
      return(
          <SafeAreaView style={styles.background}>
            <ScrollView>
                <Text style={styles.bigtext}>Upcoming Match:</Text>
                {TeamData.map((data,key) =>{
                    return(
                        <View>
                            <Text key={key}>
                                {data.name}
                            </Text>
                            <Image source={images[data.bigIconIndex]}/>
                        </View>
                    );
                })}
            </ScrollView>
          </SafeAreaView>
      )
  }

  const styles = StyleSheet.create({
      background:{
        backgroundColor: "#433F3F",
        flex: 1,
      },
      bigtext:{
        fontSize: 30,
        fontFamily: "Montserrat",
        color: "white",
        alignSelf: "center",
        marginTop: "20%",
      }
  })
  export default Home;