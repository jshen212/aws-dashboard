import React, { Component } from 'react';
import './weatherDetail.css';

class Weather extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="weather_container">
                <div className="weather_thumbnail">
                    {/* image here */}
                    weather
                </div>
                <div className="weather_link-description">
                    {/* link to click */}
                    detail
                </div>
            </div>
        );
    }
}

export default Weather;