import React, { Component } from 'react';
import * as _ from 'lodash';
import './alphaVantageDetail.css';

class AlphaVantage extends Component {

    data = {};

    constructor(props) {
        super(props);

        this.getData();
    }


    componentWillReceiveProps(newProps) {
        if(newProps && newProps.topic === 'stocks') {
            if(_.isEmpty(this.data) && !_.isEmpty(newProps.data)) {
                _.assign(this.data, newProps.data['Rank A: Real-Time Performance']);
            }
        }   
    }

    getData() {
        if(window.location.pathname === '/stocks') {
            this.props.setData({topic: 'stocks'});
        }
    }

    render() {
        return (
            <div>Alpha Vantage</div>
        );
    }
}

export default AlphaVantage;