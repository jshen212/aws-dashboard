import React, { Component } from 'react';
import _ from 'lodash';
import weatherConditions from './weather.js';
import WeatherModel from './model/WeatherModel.js';
import './weatherDetail.css';

class Weather extends Component {
    
    weatherObj = new WeatherModel();

    constructor(props) {
        super(props);
    }

    roundToDecimals(num, places) {
        return num.toFixed(places);
    }

    componentWillReceiveProps(newProps) {
        if(newProps && newProps.topic === 'weather') {
            let weatherObj = newProps.data.list.length ? newProps.data.list[0] : null;
            let location = weatherObj ? weatherObj.name : null;
            let condition = weatherObj ? weatherObj.weather[0].main : null;
            let icon = weatherObj ? weatherObj.weather[0].icon : null;
            let temperature = weatherObj ? (weatherObj.main.temp * 9) / 5 - 459.67 : null;
            
            _.assign(this.weatherObj, {
                location: location,
                condition: condition,
                icon: icon,
                temperature: this.roundToDecimals(temperature, 2)
            });
        }
    }

    render() {
        return (
            <div className='weather_container'>
                <div className='weather_bg-div'>
                    <div className='weather_location'>
                        <p>{this.weatherObj.location}</p>
                    </div>
                    <div className='weather_temp'>
                        <p>{this.weatherObj.temperature}°F</p>
                    </div>
                    <div className='weather_thumbnail'>
                        <img src={`./assets/${this.weatherObj.icon}.png`} alt='weather_icon' />
                    </div>
                    <div className='weather_description'>
                        <p>{this.weatherObj.condition}</p>
                    </div>
                </div>

            </div>
        );
    }
}

export default Weather;