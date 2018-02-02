import React, { Component } from 'react';
import * as _ from 'lodash';
import './alphaVantageDetail.css';

class AlphaVantage extends Component {

    data = {};
    sectors = [];

    constructor(props) {
        super(props);

        this.getData();
    }

    componentWillReceiveProps(newProps) {
        if(newProps && newProps.topic === 'stocks') {
            if(_.isEmpty(this.data) && !_.isEmpty(newProps.data)) {
                _.assign(this.data, newProps.data['Rank A: Real-Time Performance']);
                this.sectors = this.getSectorChanges();
            }
        }   
    }

    getData() {
        if(window.location.pathname === '/stocks') {
            this.props.setData({topic: 'stocks'});
        }
    }

    getSectorChanges() {
        let sectors = [];

        for(let key in this.data) {
            let sector = key;
            let pct = this.data[key];

            sectors.push([sector, pct]);
        }

        return sectors;
    }

    render() {
        return (
            <div className="alphaVantage_sectorDiv-container">
                {this.sectors.map((sectorTuple) => {
                    let sector = sectorTuple[0];
                    let pct = sectorTuple[1];
                    return (
                        <div
                            key={sector} 
                            className="sector_div">

                            <p 
                                className="sector_name"
                                id={sector + "_p-name"}>
                                { sector }
                            </p>
                            <p 
                                className="sector_pct"
                                id={sector + "_p-pct"}>
                                { pct }
                            </p>
                            
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default AlphaVantage;