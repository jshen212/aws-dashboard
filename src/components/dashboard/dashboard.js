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
            topic: 'weather',
            isLoading: true
        };
        
        this.getWeatherData();
        this.setData = this.setData.bind(this);
    }

    getAlphaVantageData() {
        const alphaVantageUrl = 'https://tzx4qkjiif.execute-api.us-west-1.amazonaws.com/prod/getAlphaVantageData';

        axios.get(alphaVantageUrl).then(({data}) => this.setState({ data }))
        .catch(error => console.log('Error fetching Alpha Vantage data', error));
    }

    getInstagramData() {
        const instagramUrl = 'https://4vkcig5rk1.execute-api.us-west-1.amazonaws.com/prod/getInstagramFeed';

        axios.get(instagramUrl).then(({ data }) => this.setState({ data }))
        .catch(error => console.log('Error in getting Instagram data', error));
    }

    getWeatherData() {
        const weatherUrl = 'https://8yq2a86ptc.execute-api.us-west-1.amazonaws.com/prod/getWeather';
        
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            
            axios.get(weatherUrl, {
                params: {
                    'lat': lat,
                    'lon': lon
                  }
            }).then(({data}) => this.setState({ data }))
            .catch(error => console.log('Error in getting Open Weather Map data', error));
        });

    }

    isLoading(tOrF) {
        this.setState({ isLoading: tOrF }) ;
    }

    setData(payload) {
        this.setState({ topic: payload.topic });

        if(payload.topic === 'weather') {
            this.getWeatherData();
        } else if(payload.topic === 'instagram') {
            this.getInstagramData();
        } else if(payload.topic === 'stocks') {
            this.getAlphaVantageData()
        }
    }
    
    render() {
        return (
            <div className="dashboard_view">
                <div className="container_list-view">
                    <div className="target_list-container">
                        <TargetList 
                            setData={this.setData} 
                            {...this.state}/>
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