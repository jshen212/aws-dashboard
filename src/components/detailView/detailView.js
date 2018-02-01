import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import WeatherDetail from './weatherDetail/weatherDetail';
import InstagramDetail from './instagramDetail/instagramDetail';
import AlphaVantageDetail from './alphaVantageDetail/alphaVantageDetail';

class DetailView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="view_selected-container">
                <Switch>
                    <Route exact path='/' render={() => (
                        <WeatherDetail {...this.props} />
                    )}/>
                    <Route path='/weather' render={() => (
                        <WeatherDetail {...this.props} />
                    )}/>
                    <Route path='/instagram' render={() => (
                        <InstagramDetail {...this.props} />
                    )}/>
                    <Route path='/stocks' render={() => (
                        <AlphaVantageDetail {...this.props} />
                    )}/>
                </Switch>
            </div>
        );
    }

}

export default DetailView;