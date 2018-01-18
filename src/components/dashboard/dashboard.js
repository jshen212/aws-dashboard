import React, { Component } from 'react';
import './dashboard.css';
import Weather from '../weather/weather';

class Dashboard extends Component {
    // TODO: setup list of targets
    
    render() {
        return (
            <div class="dashboard_view">
                <div class="container_list-view">
                    <div class="target_list-container">
                        list of targets
                        {/* TODO: iterate over list of targets */}
                        <ul class="target_list-items">
                            <li class="target_list-item"><Weather /></li>
                        </ul>
                    </div>
                    <div class="target_detail-view">
                        detail view of target
                    </div>
                </div>
            </div>
        );
    }

}

// Dashboard.propTypes = {
//     widgets: PropTypes.Array
// };


export default Dashboard;