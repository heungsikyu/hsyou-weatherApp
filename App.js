import React from 'react';
import { Alert } from "react-native";
import Loading from './Loading';
import Weather from  './Weather';
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "4597988f235fcfb7ea23cc394b4cd78a";

export default class extends React.Component {

  state = {
    isLoading: true
  }; 

  _getWeather = async(latitude, longitude) => {
    const apiStr = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
   // console.log(apiStr);
    const { 
      data: { 
        main: { temp },
        weather 
      } 
    } = await axios.get(apiStr);
    

    this.setState({ 
      isLoading: false,
      condition: weather[0].main,
      temp
    });
    
    // console.log(temp, weather[0].main);
  }
  
  _getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this._getWeather(latitude, longitude);
      this.setState({ isLoading: false });

      // console.log(latitude, longitude);
    
    } catch (error) {
      console.log(error);
      Alert.alert("Can't find you. ", " So Sad!!! ");
    };

  }
  componentDidMount(){ 
    this._getLocation();
  }

  render(){
    const { isLoading, condition, temp } = this.state;

    console.log("isLoading:", isLoading, condition, temp );
    return isLoading ? <Loading /> : <Weather condition={condition} temp={Math.round(temp)} />;
  }
}

