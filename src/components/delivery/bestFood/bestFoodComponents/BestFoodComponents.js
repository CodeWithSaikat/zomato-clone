import React from 'react'
// import '../BestFoodDetails.css'

const BestFoodComponents = ({ item }) => {

    return (
        <div className="best-food-item">
            <div className="best-food">
                <img src={item.img} alt="" className='best-food-img' />
                <div className="best-food-title">
                    <div className='title-head'>
                        <h3>{item.name}</h3>
                        <h4>{item.rating} <i className="fi fi-br-star"></i> </h4>
                    </div>
                    <div className='location-dish'>
                        <h4>{item.location}</h4>
                        <h4>{item.price}</h4>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default BestFoodComponents