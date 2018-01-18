import React from 'react';
import TargetItem from '../targetItem/targetItem';
import './targetList.css';

const TargetList = () => {
    const targetList = [
        {
            id: 1,
            thumbnail: 'Hello',
            link: 'World'
        }
    ];
    const targetItems = targetList.map((target) => {
        return (
            <ul className="container_list-view" key={target.id}>
                <TargetItem target={target}/>
            </ul>
        );
    });

    return targetItems;
}

export default TargetList;