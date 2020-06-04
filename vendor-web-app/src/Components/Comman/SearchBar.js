import React, {Component} from 'react';
import '../../styles/comman/searchBar.css';

class SearchBar extends Component {
    render() {
        return (
            <div className="wrap">
                <div className="search">
                    <input type="text" className="searchTerm" placeholder="Enter shop name"/>
                        <button type="submit" className="searchButton">
                            <i className="fa fa-search"></i>
                        </button>
                </div>
            </div>
        );
    }
}

export default SearchBar;
