import React from "react";
import ProTypes from "prop-types";

import{ StyleSheet, Text, View} from "react-native";
import { MaterialCommunityIcons } from  '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

Weather.propTypes = {
     temp:ProTypes.number.isRequired,
     condition: ProTypes.oneOf([
          "Thunderstorm",
          "Drizzle",
          "Rain",
          "Snow",
          "Atmosphere",
          "Clear",
          "Clouds",
          "Fog"
     ]).isRequired
} 

export default function Weather({temp}){
     return (
          <LinearGradient
               colors={['#4c669f', '#3b5998', '#192f6a']}
               style={styles.container}>

               <View style={styles.halfcontainer}>
                    <MaterialCommunityIcons size={96} name="weather-lightning-rainy" />
                    <Text style={styles.temp}> {temp}º</Text>
               </View>
               <View style={styles.halfcontainer}/>
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
          color: "black"
     }
 });