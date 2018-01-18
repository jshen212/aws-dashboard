import React, { Component } from 'react';
import axios from 'axios';
import './dashboard.css';
import Weather from '../weather/weather';

class Dashboard extends Component {
    // TODO: setup list of targets
    constructor(props) {
        super(props);

        this.state = {
            data: {},
            isLoading: true
        };

        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const url = 'https://0hpr5r9oi2.execute-api.us-west-1.amazonaws.com/prod/getLatLonWeather';

            // this.getWeatherData(url);
        });

    }

    getWeatherData(url) {
        axios.get(url).then(({ data }) => {
            this.setState({ data });
            console.log('initial state', this.state);
        })
        .catch(error => console.log(error));
    }

    isLoading(tOrF) {
        this.setState({ isLoading: tOrF }) ;
    }
    
    render() {
        return (
            <div className="dashboard_view">
                <div className="container_list-view">
                    <div className="target_list-container">
                        <ul className="target_list-items">
                            <li className="target_list-item"><Weather /></li>
                        </ul>
                    </div>
                    <div className="target_detail-view">
                        detail view of target
                    </div>
                </div>
            </div>
        );
    }

}

// Dashboard.propTypes = {
//     widgets: PropTypes.Array
// };


export default Dashboard;