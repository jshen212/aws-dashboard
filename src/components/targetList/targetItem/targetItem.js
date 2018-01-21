import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';
import './targetItem.css';

class TargetItem extends Component {

    constructor(props) {
        super(props);

        this.clickedItem = this.clickedItem.bind(this);
    }

    clickedItem() {
        // calling function in dashboard to update dashboard state
        this.props.setData(this.props.target);
    }

    componentWillReceiveProps(nextProps) {
        // updating props of this component with dashboard state
        this.props = nextProps;
    }

    getIcon() {
        const target = this.props.target.topic;
        let icon = <div>Error in getting icon</div>;

        if(target === 'weather') {
            icon = <i className="material-icons">cloud_queue</i>;
        } else if(target === 'instagram') {
            icon = <i className="material-icons">local_see</i>
        }

        return icon;
    }

    render() {
        return (
            <ListItem onClick={this.clickedItem}>
                <div className="target_item">
                    <div>
                        {this.getIcon()}
                    </div>
                    <div className="thumbnail_div">
                        {this.props.target.title}
                    </div>
                </div>
            </ListItem>
        );
    }
        

}

export default TargetItem;