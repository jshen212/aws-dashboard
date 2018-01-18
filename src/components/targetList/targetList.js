import React, { Component } from 'react';
import TargetItem from '../targetItem/targetItem';
import './targetList.css';

class TargetList extends Component {

    constructor(props) {
        super(props);
    }

    targetList = [
        {
            id: 1,
            thumbnail: 'Hello',
            link: 'World'
        }
    ];

    render() {

        return (
            <ul className="container_list-view">
                {this.targetList.map((target) => 
                    <TargetItem 
                        key={target.id} 
                        target={target} 
                        setData={this.props.setData} 
                        {...this.props}/> 
                )}
            </ul>
        );
    }
    
}

export default TargetList;