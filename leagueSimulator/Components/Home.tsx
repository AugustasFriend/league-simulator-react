import React, { useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    Button
  } from 'react-native';
  import { TeamData } from "../JSON/TeamData";
  import { connect } from 'react-redux';
  import { addVictory } from "../Actions/Actions";
  import { bindActionCreators } from 'redux';

  const images = [
      require("../Images/abersinn-big-logo.png"),
      require("../Images/dijleon-big-logo.png")
  ]


  const Home = ({wins, addVictory}) =>{

    const [count, setcount] = useState(0);
    
      return(
          <SafeAreaView style={styles.background}>
            <ScrollView>
                <Text style={styles.bigtext}>Upcoming Match:</Text>
                {TeamData.map((data,key) =>{
                    return(
                        <View>
                            <Text key={key}>
                                <Text>{wins}</Text>
                            </Text>
                            <Button
                                title="win"
                                onPress={() => addVictory()}
                            />
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

  const mapStateToProps = (state) => {
    return {
      wins: state.winReducer.wins,
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        addVictory: () => dispatch(addVictory()),
    };
  };

  export default connect(mapStateToProps,mapDispatchToProps)(Home);

  /*
  {TeamData.map((data,key) =>{
                    return(
                        <View>
                            <Text key={key}>
                                <Text>{wins}</Text>
                            </Text>
                            <Image source={images[data.bigIconIndex]}/>
                        </View>
                    );
                })}*/