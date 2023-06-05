import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faBed } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
const Header = ({type}) => {
    const [destination, setDestination] = useState("");
    const [openOptions, setOpenOptions] = useState(false);
    //const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        bhk:1,
    });

    const navigate = useNavigate()
    const handleOption = (name, operation) =>{
        setOptions((prev) => {return {
            ...prev, [name]:operation ==="i" ? options[name] + 1 :options[name] - 1,
        };
        })
    }
    const handleSearch = ()=>{
        navigate("/house", {state:{destination,options}})
    }
  return (
    <div className="header">
        <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
            <div className="headerListItem active">
            <FontAwesomeIcon icon={faHouse} />
            <span>Houses</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faBuilding} />
            <span>Apartments</span>
            </div>
        </div>
        { type !=="list" &&  
        <>
        <h1 className="headerTitle">Rent from Anyone</h1>
        <p className="headerDesc">Access thousands of homes safely and Sustainably.</p>
        <button className="headerBtn">Sign In/Register</button>
        <div className="headerSearch">
            <div className="headerSearchItem">
            <FontAwesomeIcon icon={faLocationDot} className="headerIcon" />
            <input type="text" placeholder="Search By Location" className="headerSearchInput" onChange={e=>setDestination(e.target.value)} />
            </div>
            <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{options.bhk} bhk</span>
            {openOptions && <div className="options">
                <div className="optionItem">
                    <span className="optionText">BHK</span>
                    <div className="optionCounter">
                    <button disabled={options.bhk<=1} className="optionCounterButton" onClick={()=>handleOption("bhk", "d")}>-</button>
                    <span className="optionCounterNum">{options.bhk}</span>
                    <button className="optionCounterButton" onClick={()=>handleOption("bhk", "i")}>+</button>
                    </div>
                </div>
            </div>}
            </div>
            <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>Search</button>
            </div>
        </div></>}
    </div>
    </div>
  );
};

export default Header