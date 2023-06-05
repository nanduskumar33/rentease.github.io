import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import "./list.css"
import { useLocation } from 'react-router-dom'
import SearchItem from '../../components/searchItem/SearchItem'

const List = () => {

  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination)
  const [options, setOptions] = useState(location.state.options)
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Location</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
              <div className="lsOptionItem">
                <span className="lsOptionText">Min Price <small>per month</small></span>
                <input type="number" className="lsOptionInput" placeholder='' />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Max Price <small>per month</small></span>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">BHK</span>
                <input type="number" min={1} className="lsOptionInput" placeholder={options.bhk} />
              </div>
            </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List