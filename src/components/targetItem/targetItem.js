import React, { Component } from 'react';
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

    render() {
        return (
            <li className="target_item" onClick={this.clickedItem}>
                <div className="thumbnail_div">
                    {/* image here */}
                    {this.props.target.thumbnail}
                </div>
                <div className="link_div">
                    {/* link to click */}
                    {this.props.target.link}
                </div>
            </li>
        );
    }
        

}

export default TargetItem;