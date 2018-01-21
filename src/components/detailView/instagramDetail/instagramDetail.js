import React, { Component } from 'react';
import _ from 'lodash';

class Instagram extends Component {

    componentWillReceiveProps(newProps) {
        if(newProps && newProps.topic === 'instagram') {
            console.log('instagram detail receiving props');
        }
    }

    render() {
        return (
            <div className='instagram_container'>
                <div className='instagram_user-div'>
                    Instagram
                </div>
                <div className='instagram_feed-div'>
                    Component
                </div>
            </div>
        );
    }
}

export default Instagram;