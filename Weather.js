import React from "react";
import ProTypes from "prop-types";

import{ StyleSheet, Text, View, StatusBar } from "react-native";
import { MaterialCommunityIcons } from  '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

Weather.propTypes = {
     temp:ProTypes.number.isRequired,
     condition: ProTypes.oneOf([
          "Thunderstorm",
          "Drizzle",
          "Rain",
          "Snow",
          // "Atmosphere",
          "Clear",
          "Clouds",
          "Fog",
          "Haze"
     ]).isRequired
};

const weatherOptions = {
     Thunderstorm: { iconName: "weather-lightning", gradient:["#11998e","#38ef7d"]  }, 
     Drizzle: { iconName: "weather-rainy", gradient:["#DA4453","#89216B"]  }, 
     Rain: { iconName: "weather-pouring", gradient:["#333333","#dd1818"]  }, 
     Snow: { iconName: "weather-hail", gradient:["#a8c0ff","#3f2b96"]  }, 
     // Atmosphere: { iconName: "" }, 
     Clear: { iconName: "weather-sunny",gradient:["#D66D75","#E29587"]  }, 
     Clouds: { iconName: "weather-cloudy", gradient:["#00b09b","#96c93d"]  },
     Fog: { iconName: "weather-fog", gradient:["#22c1c3","#fdbb2d"]  },
     Haze: { iconName: "weather-fog", gradient:["#fc4a1a","#f7b733"]  }
};

export default function Weather({ temp, condition }){
     return (
          <LinearGradient
               colors={weatherOptions[condition].gradient}
               style={styles.container}>
               <StatusBar barStyle="light-content" />
               <View style={styles.halfcontainer}>
                    <MaterialCommunityIcons 
                    size={96} 
                    name={weatherOptions[condition].iconName || "weather-sunset"} 
                    color="white"
                    />
                    <Text style={styles.temp}> {temp}º</Text>
               </View>
               <View style={styles.halfcontainer}>
                    <Text>adfafds</Text>
               </View>
          </LinearGradient>
     );
 }

 const styles = StyleSheet.create ({
     container: {
          flex: 1, 
          justifyContent: "center",
          alignItems: "center" 
     },
     halfcontainer: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
     },
     temp: {

          fontSize: 42,
          color: "white"
     }
 });