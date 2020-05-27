import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  ImageBackground,
  ActivityIndicator,
  StatusBar
} from 'react-native';

import SearchInput from './components/SearchInput';
import getImageForWeather from './utils/getImageForWeather';
import getDescription from './utils/convert';
import { fetchLocationId, fetchWeather } from "./utils/api";

export default class App extends React.Component {
    state = {
      location: '',
      loading: false,
      error: false,
      temperature: 0,
      weather: '',
      description: ''
    };

  handleUpdateLocation = async city => {
    if (!city) {
      return
    }

    this.setState({ loading: true }, async () => {
      try {
        const { location, weather, temperature, description } = await fetchLocationId(city);
        this.setState({
          loading: false,
          error: false,
          location: location,
          weather: weather,
          temperature: temperature,
          description: description
        })
      } catch (error) {
        this.setState({
          loading: false,
          error: true
        })
      }
    })
  }

  componentDidMount() {
    this.handleUpdateLocation('Ho Chi Minh City')
  }

  render() {
    const { location, error, loading, weather, temperature, description } = this.state

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ImageBackground
          source={getImageForWeather(weather)}
          style={styles.imageContainer}
          imageStyle={styles.image}
        >
          <View style={styles.detailsContainer}>
            <ActivityIndicator animating={loading} color="white" size="large" />

            {!loading && (
              <View>
                {error && (
                  <Text style={[styles.smallText, styles.textStyle]}>
                    Xin thử lại
                  </Text>
                )}
                {!error && (
                  <View>
                    <Text style={[styles.largeText, styles.textStyle]}>
                      {location}
                    </Text>
                    <Text style={[styles.smallText, styles.textStyle]}>
                      {getDescription(weather)}
                    </Text>
                    <Text style={[styles.largeText, styles.textStyle]}>
                      {`${(temperature - 273.15).toFixed(2)}°`}
                    </Text>
                  </View>
                )}
                <SearchInput
                  placeholder="Search any city"
                  onSubmit={this.handleUpdateLocation}
                />
              </View>
            )}
          </View>
        </ImageBackground>
      </View >


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#34495E"
  },
  largeText: {
    fontSize: 44
  },
  smallText: {
    fontSize: 25

  },
  textStyle: {
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    textAlign: 'center',
    color: 'white'
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  detailsContainer: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 35
  },
  imageContainer: {
    flex: 1
  },
})
