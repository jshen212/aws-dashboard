import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import WeatherDetail from './weatherDetail/weatherDetail';
import InstagramDetail from './instagramDetail/instagramDetail';

class DetailView extends Component {

    constructor(props) {
        super(props);
    }

    // getDetailView(selectedDetail) {
    //     if(!selectedDetail || selectedDetail === 'weather') {
    //         return <WeatherDetail {...this.props}/>;
    //     } else if (selectedDetail === 'instagram') {
    //         return <InstagramDetail {...this.props}/>;
    //     } else {
    //         return <div>Error getting detail view</div>;
    //     }
    // }

    render() {
        // let selectedView = this.getDetailView(this.props.topic)

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
                </Switch>
            </div>
        );

    }

}

export default DetailView;