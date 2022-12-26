
import React from 'react'
import './DeliveryItem.css'
import '../deliveryComponents/delivertyCopnents.css'

const DeliveryItem = ({ item }) => {
    return (
        <div className='delivery-items-details'>
            <div className='delivery-item'>
                <div className="brandImage">
                    <img src={item.image} alt="Brand images" />
                </div>
                <div className="brandName">
                    {item.name}
                </div>
                <div className="brandTime">
                    {item.time}
                </div>
            </div>
        </div>
    )
}

export default DeliveryItem