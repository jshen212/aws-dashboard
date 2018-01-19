import React, { Component } from 'react';
import { List } from 'material-ui/List';
import TargetItem from '../targetItem/targetItem';
import './targetList.css';

class TargetList extends Component {

    constructor(props) {
        super(props);
    }

    targetList = [
        {
            id: 1,
            selectedDetailView: 'weather',
            topic: 'weather',
            title: 'Open Weather Map',
            link: 'link'
        }
    ];

    render() {

        return (
            <List className="container_list-view">
                {this.targetList.map((target) => 
                    <TargetItem 
                        key={target.id} 
                        target={target} 
                        setData={this.props.setData} 
                        {...this.props}/> 
                )}
            </List>
        );
    }
    
}

export default TargetList;