import "./house.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import MailList from '../../components/mailList/MailList'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
const House = () => {

  const [ slideNum , setSlideNum ] = useState(0);
  const [ open , setOpen ] = useState(false);
  const photos = [
    { 
      src: "https://is1-3.housingcdn.com/01c16c28/848696de301117f555aa840e47bf4058/v0/fs/2_bhk_independent_builder_floor-for-rent-pappanamcode-Thiruvananthapuram-bedroom.jpg.webp"
  },{
      src: "https://is1-3.housingcdn.com/01c16c28/70c2849083df399a9d6edfbb52884899/v0/fs/2_bhk_independent_builder_floor-for-rent-pappanamcode-Thiruvananthapuram-hall.jpg.webp"
  },{
      src: "https://is1-2.housingcdn.com/01c16c28/8f5c6a554eafcb4049294e3b39b03881/v0/fs/2_bhk_independent_builder_floor-for-rent-pappanamcode-Thiruvananthapuram-hall.jpg.webp"
  },{
      src: "https://is1-3.housingcdn.com/01c16c28/8e36f53a9ed2152cb812f42f3fdae13c/v0/fs/2_bhk_independent_builder_floor-for-rent-pappanamcode-Thiruvananthapuram-kitchen.jpg.webp"
  }];

  const handleOpen = (i)=>{
    setSlideNum(i);
    setOpen(true);       
  };

  const handleMove = (direction) =>{
    let newSlideNum;
    if(direction==="l"){
      newSlideNum = slideNum === 0 ? 3 : slideNum-1
    }else{
      newSlideNum = slideNum === 3 ? 0 : slideNum+1
    }
    setSlideNum(newSlideNum);
  }

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="houseContainer">
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
          <FontAwesomeIcon icon={faArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
          <div className="sliderWrapper">
              <img src={photos[slideNum].src} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
        </div>}
        <div className="houseWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="houseTitle">Grand Homes</h1>
          <div className="houseAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Pappanamcode, Trivandrum</span>
          </div>
          <span className="houseDistance">
            Excellent location - 6km from center
          </span>
          <div className="houseImages">
            {photos.map((photo,i)=>(
              <div className="houseImgWrapper">
                <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="houseImg" />
              </div>
            ))}
          </div>
          <div className="houseDetails">
            <div className="hotelDetailsText">
              <h1 className="houseTitle">Stay in the heart of Trivandrum</h1>
              <p className="houseDesc">This is a modern and stylish home available for affordable rent in Trivandrum. It is a 2 BHK Independent Floor situated at Pappanamcode. Designed to meet your lifestyle needs, the Independent Floor provides a range of modern amenities for the comfort of the residents. It is Semi Furnished. Modern home seekers will experience a comfortable living in this 2 BHK property. The Independent Floor is on 2 floor, and the total number of floors is 2. The 2 BHK unit is elegantly designed to meet your housing needs. The Independent Floor has 2 bedrooms. It has 2 bathroom. The 2 BHK unit also includes 1 balcony giving splendid views of the surroundings. The built-up area of the Independent Floor is 1200 Square feet. The carpet area is 1000 Square feet. The monthly rent for the Independent Floor is Rs 10000. The security deposit is Rs 50000</p>
            </div>
            <div className="houseDetailsPrice">
              <h2>Perfect for city commuters</h2>
              <span>Located in the heart of Trivandrum, Excellet Location.</span>
              <h1><b>₹15,000</b></h1>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default House