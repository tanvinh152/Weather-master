/* eslint-disable global-require */

const images = {
  Clear: require('../assets/clear.png'),
  Hail: require('../assets/hail.png'),
  Clouds: require('../assets/heavy-cloud.png'),
  Atmosphere: require('../assets/light-cloud.png'),
  Rain: require('../assets/heavy-rain.png'),
  Drizzle: require('../assets/light-rain.png'),
  Showers: require('../assets/showers.png'),
  Sleet: require('../assets/sleet.png'),
  Snow: require('../assets/snow.png'),
  Thunderstorm: require('../assets/thunder.png'),
};

export default weather => images[weather];
