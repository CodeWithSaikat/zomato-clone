import React from 'react'
import Filter from '../commen/filter/Filter'
import BestFoodDetails from './bestFood/BestFoodDetails'
import './delivery.css'
import DeliveryComponents from './deliveryComponents/DeliveryComponents'

const Delivery = () => {

  
  const deliveryFilter = [
    {
        id: 1,
        icon: <i className="fi fi-br-settings-sliders"></i>,
        name: "Filters"
    },
    {
        id: 2,
        icon: <i className="fi fi-br-arrow-down"></i>,
        name: "Deliverty Time"
    },
    {
        id: 3,
        name: "Pure Veg "
    },
    {
        id: 4,
        name: "Rating: 4.0+"
    },
    {
        id: 5,
        name: "Great Offers"
    },
    {
        id: 6,
        name: "Cuisines",
        icon: <i class="fi fi-br-angle-small-down"></i>,

    },
]

  return (
    <div className='max-width'>
      <Filter filterList={deliveryFilter} />
      <div>
        <DeliveryComponents />
      </div>
      <div>
        <BestFoodDetails />
      </div>
    </div>
  )
}

export default Delivery