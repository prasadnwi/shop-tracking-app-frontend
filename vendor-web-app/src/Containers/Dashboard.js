import React, {Component} from 'react';
import DashboardContent from "../Components/Dashboard/DashboardContent";
import TopBar from "../Components/Comman/TopBar";

class Dashboard extends Component {
    render() {
        return (
            <div>
                <TopBar/>
                <DashboardContent/>
            </div>
        );
    }
}

export default Dashboard;
