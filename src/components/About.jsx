var React = require('react');

var About = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className="text-center page-title">About</h1>
        <p>
          This is a weather app built using React.
        </p>
        <p>
          Here are some of the tools I used:
        </p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a> - This was the Javascript framework used.
          </li>
          <li>
            <a href="http://openweathermap.org">OpenWeatherMap</a> - This was the weather API used to search for weather data by city name.
          </li>
          <li>
            <a href="https://foundation.zurb.com">Foundation</a> - This was the front-end framework used.
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = About;
