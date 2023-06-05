import "./searchItem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img src="https://is1-2.housingcdn.com/01c16c28/a069c66adce2976049804db49b039b26/v0/fs/2_bhk_independent_house-for-rent-pappanamcode-Thiruvananthapuram-building_view.jpg" alt="" className="siImg" />
    <div className="siDesc">
        <h1 className="siTitle">2 BHK Independent House</h1>
        <span className="siDistance">6km from center</span>
        <span className="siFeat1">Car Parking space available</span>
        <span className="siSubtitle">for Rent in Pappanamcode, Trivandrum</span>
        <span className="siFeat">964 sq.ft  2 Bathrooms</span>
    </div>
    <div className="siDetails">
        <div className="siDetailTexts">
            <span className="siPrice">₹15,000</span>
            <span className="siInterval"> per month</span>
            <button className="siCheck">See Availability</button>
        </div>
    </div>
    </div>
  )
}

export default SearchItem