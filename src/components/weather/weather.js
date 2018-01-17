import React, { Component } from 'react';
import axios from 'axios';

class Weather extends Component {

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const url = 'https://0hpr5r9oi2.execute-api.us-west-1.amazonaws.com/prod/getLatLonWeather';

            this.getWeatherData(url);
        });
    }

    getWeatherData(url) {
        console.log('hello world api');
        axios.get(url).then(response => console.log('weatherrrr' ,response))
        .catch(error => console.log(error));
    }

    render() {
        return (
            <div className="weather_container">
                <div className="weather_image">
                    {/* image goes here */}
                    weather
                </div>
                <div className="weather_temp">
                    {/* temperature goes here */}
                    component
                </div>
                <div className="weather_info">
                    {/* weather info goes here */}
                    here
                </div>
            </div>
        );
    }
}

export default Weather;