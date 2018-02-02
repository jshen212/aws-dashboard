import React, { Component } from 'react';
import _ from 'lodash';

class Instagram extends Component {

    data = [];

    constructor(props) {
        super(props);

        this.getData();
    }

    componentWillReceiveProps(newProps) {
        if(newProps && newProps.topic === 'instagram') {
            if(!this.data.length) {
                _.assign(this.data, newProps.data.data);
            }
        }
    }

    getData() {
        if(window.location.pathname === '/instagram') {
            this.props.setData({topic: 'instagram'})
        }
    }

    render() {
        return (
            <div className='instagram_container'>
                <div className='flex-grid-thirds'>
                    <div className='testing'></div>
                    {this.data.map((item) => {
                        return (
                            <div className="col" key={item.id}>
                                <img src={item.images.standard_resolution.url} />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Instagram;