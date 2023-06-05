import React from 'react'
import "./propertyList.css"

const PropertyList = () => {
  return (
    <div className='pList'>
        <div className='pList__item'>
            <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="pListImg" />
            <div className='pListTitles'>
                <h1>Houses</h1>
                <h2>233 Houses</h2>
            </div>
        </div>
        <div className='pList__item'>
            <img src="https://images.unsplash.com/photo-1565953522043-baea26b83b7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" className="pListImg" />
            <div className='pListTitles'>
                <h1>Apartments</h1>
                <h2>321 Apartments</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList