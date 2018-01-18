import React, { Component } from 'react';
import axios from 'axios';
import './weather.css';

class Weather extends Component {
    constructor(props) {
        super(props);

        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const url = 'https://0hpr5r9oi2.execute-api.us-west-1.amazonaws.com/prod/getLatLonWeather';

            // this.getWeatherData(url);
        });

    }

    getWeatherData(url) {
        axios.get(url).then(weather => console.log(weather))
        .catch(error => console.log(error));
    }

    render() {
        return (
            <div className="weather_container">
                <div className="weather_thumbnail">
                    {/* image here */}
                    HELLO
                </div>
                <div className="weather_link-description">
                    {/* link to click */}
                    world
                </div>
            </div>
        );
    }
}

export default Weather;