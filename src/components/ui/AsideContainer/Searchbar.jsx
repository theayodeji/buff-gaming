import React from 'react'
import { ReactComponent as SearchIcon } from "./assets/search-icon.svg"
import { ReactComponent as FiltersIcon } from "./assets/filters-icon.svg"

function Searchbar() {
  return (
    <div className='aside-searchbar'>
        <div className="search-input">
            <SearchIcon />
            <input type="text" name="search-query" id="search-query" placeholder='Search'/>
            <div className="filters-dropdown">
                <FiltersIcon />
                <div className="filters">
                    <div className="filter-item">
                    <input type="radio" name="filter-all" id="filter-all" value="all" checked/>
                    <label htmlFor="filter-all">All</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Searchbar