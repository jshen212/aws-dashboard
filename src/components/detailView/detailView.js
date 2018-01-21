import React, { Component } from 'react';
import WeatherDetail from './weatherDetail/weatherDetail';
import InstagramDetail from './instagramDetail/instagramDetail';

class DetailView extends Component {

    constructor(props) {
        super(props);
    }

    getDetailView(selectedDetail) {
        if(!selectedDetail || selectedDetail === 'weather') {
            return <WeatherDetail {...this.props}/>;
        } else if (selectedDetail === 'instagram') {
            return <InstagramDetail {...this.props}/>;
        } else {
            return <div>Error getting detail view</div>;
        }
    }

    render() {
        let selectedView = this.getDetailView(this.props.topic)

        return (
            <div className="view_selected-container">
                {selectedView}
            </div>
        );

    }

}

export default DetailView;