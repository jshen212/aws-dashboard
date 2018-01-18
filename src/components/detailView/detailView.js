import React, { Component } from 'react';
import WeatherDetail from '../weatherDetail/weatherDetail';

class DetailView extends Component {



    constructor(props) {
        super(props);
    }

    getDetailView(selectedDetail) {
        if(selectedDetail === 'weather') {
            return <WeatherDetail />;
        } else {
            return <div>not weather</div>;
        }
    }

    render() {
        let selectedView = this.getDetailView(this.props.data.selectedDetailView)

        return (
            <div class="view_selected-container">
                {selectedView}
            </div>
        );

    }

}

export default DetailView;