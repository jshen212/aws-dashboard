import React from 'react';
import './targetItem.css';

const TargetItem = (props) => {

    console.log(props.target);

    return (
        <li className="target_item">
            <div className="thumbnail_div">
                {/* image here */}
                {props.target.thumbnail}
            </div>
            <div className="link_div">
                {/* link to click */}
                {props.target.link}
            </div>
        </li>
    );
}

export default TargetItem;