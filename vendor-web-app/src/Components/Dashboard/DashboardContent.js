import React, {Component} from 'react';
import '../../styles/Dashboard/dashboardContent.css';
import SearchBar from "../Comman/SearchBar";
import ShopListTable from "../Shop/ShopListTable";
import LocationMap from "../Map/LocationMap";

class DashboardContent extends Component {
    render() {
        return (
            <div className='dashboard-content-wrapper'>

                {/* add shop details*/}
                <div className='add-shop-wrapper'>
                    <button>
                        Add shop
                    </button>
                </div>

                {/*  search shop details*/}
                <div className='search-bar-wrapper'>
                    <SearchBar/>
                </div>

                {/* shop table*/}
                <div className='shop-details-table-wrapper'>
                    <ShopListTable/>
                </div>

                {/* map */}
                <div className='map-wrapper'>
                    <LocationMap/>
                </div>
            </div>
        );
    }
}

export default DashboardContent;
