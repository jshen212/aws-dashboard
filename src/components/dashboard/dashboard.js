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

    getWeatherData() {
        // const googleGeolocationUrl = 'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCwjh8V0AKZW6y1do_AfxVPBplguJGnGzo';
        const weatherUrl = 'https://8yq2a86ptc.execute-api.us-west-1.amazonaws.com/prod/getWeather';
        
        // axios.post(googleGeolocationUrl, null).then(({data}) => {
        //     const lat = data.location.lat;
        //     const lon = data.location.lon;
            
        //     axios.get(weatherUrl, {
        //         params: {
        //             'lat': lat,
        //             'lon': lon
        //           }
        //     }).then(({data}) => this.setState({ data })).catch(error => console.log(error));
        // })
        
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            
            axios.get(weatherUrl, {
                params: {
                    'lat': lat,
                    'lon': lon
                  }
            }).then(({data}) => this.setState({ data })).catch(error => console.log(error));
        });

    }

    getInstagramData() {
        const instagramUrl = 'https://4vkcig5rk1.execute-api.us-west-1.amazonaws.com/prod/getInstagramFeed';

        axios.get(instagramUrl).then(({ data }) => this.setState({ data }));
    }

    isLoading(tOrF) {
        this.setState({ isLoading: tOrF }) ;
    }

    setData(payload) {
        if(payload.topic === 'weather') {
            this.setState({ topic: 'weather' });
            this.getWeatherData();
        } else if(payload.topic === 'instagram') {
            this.setState({ topic: 'instagram' });
            this.getInstagramData();
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