import React, { Component } from 'react';
import { List } from 'material-ui/List';
import TargetItem from './targetItem/targetItem';
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
            title: 'Open Weather Map'
        },
        {
            id: 2,
            selectedDetailView: 'instagram',
            topic: 'instagram',
            title: 'Instagram'
        },
        {
            id: 3,
            selectedDetailView: 'stocks',
            topic: 'stocks',
            title: 'Alpha Vantage'
        }
    ];

    render() {
        return (            
            <List className="container_targetList-view">
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