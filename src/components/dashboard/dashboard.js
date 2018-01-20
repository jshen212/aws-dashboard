import React, { Component } from 'react';
import axios from 'axios';
import './dashboard.css';
import DetailView from '../detailView/detailView';
import TargetList from '../targetList/targetList';


class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            data: {},
            isLoading: true
        };

        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const url = 'https://8yq2a86ptc.execute-api.us-west-1.amazonaws.com/prod/getWeather';

            this.getWeatherData(url, lat, lon);
        });

        this.setData = this.setData.bind(this);
    }

    getWeatherData(url, lat, lon) {

        axios.get(url, {
            params: {
                'lat': lat,
                'lon': lon
              }
        }).then(({ data }) => {
            this.setData(data);
        }).catch(error => console.log(error));
    }

    isLoading(tOrF) {
        this.setState({ isLoading: tOrF }) ;
    }

    setData(payload) {
        this.setState({data: payload});
    }
    
    render() {
        return (
            <div className="dashboard_view">
                <div className="container_list-view">
                    <div className="target_list-container">
                        <TargetList setData={this.setData} {...this.state}/>
                    </div>
                    <div className="target_detail-view">
                        <DetailView {...this.state} />
                    </div>
                </div>
            </div>
        );
    }

}

export default Dashboard;