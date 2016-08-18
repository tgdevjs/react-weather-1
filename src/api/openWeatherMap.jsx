var axios = require('axios');

var appID = process.env.WEATHER_APP_ID;
const OPEN_WEATHER_MAP_URL =   `http://api.openweathermap.org/data/2.5/weather?appid=${"70cffdd1d2a2e0775a8deb6cc4bbdb3b"}&units=imperial`;


module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      }else {
        return res.data.main.temp;
      }
    }, function (res) {
        throw new Error(res.data.message);
    });
  }
}
