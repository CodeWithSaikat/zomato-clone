import React from 'react'
import Collections from './collections/Collections'
import Filter from './diningFilters'
import './diningOut.css'

const DiningOut = () => {

  const collectionsList = [
    {
      id: 1,
      title: "Newly Opened",
      img: "https://b.zmtcdn.com/data/collections/b22194cb38ed18a5200b387ad8f243f0_1582015799.jpg ",
      place: "9 Places "
    },
    {
      id: 1,
      title: "Newly Opened",
      img: "https://b.zmtcdn.com/data/collections/b22194cb38ed18a5200b387ad8f243f0_1582015799.jpg ",
      place: "9 Places "
    },
    {
      id: 1,
      title: "Newly Opened",
      img: "https://b.zmtcdn.com/data/collections/b22194cb38ed18a5200b387ad8f243f0_1582015799.jpg ",
      place: "9 Places "
    },
    {
      id: 1,
      title: "Newly Opened",
      img: "https://b.zmtcdn.com/data/collections/b22194cb38ed18a5200b387ad8f243f0_1582015799.jpg ",
      place: "9 Places "
    },
    {
      id: 1,
      title: "Newly Opened",
      img: "https://b.zmtcdn.com/data/collections/b22194cb38ed18a5200b387ad8f243f0_1582015799.jpg ",
      place: "9 Places "
    },
    {
      id: 1,
      title: "Newly Opened",
      img: "https://b.zmtcdn.com/data/collections/b22194cb38ed18a5200b387ad8f243f0_1582015799.jpg ",
      place: "9 Places "
    },
  ]


  const diningFilter = [
    {
      id: 1,
      icon: <i className="fi fi-br-settings-sliders"></i>,
      name: "Filters"
    },
    {
      id: 2,
      icon: <i className="fi fi-br-arrow-down"></i>,
      name: "Distance"
    },
    {
      id: 3,
      name: "Rating: 4.0+"
    },
    {
      id: 4,
      name: "Online Booking"
    },
    {
      id: 5,
      name: "Cuisines",
      icon: <i class="fi fi-br-angle-small-down"></i>,
    },
    {
      id: 6,
      name: "Pro Offers"
    },
    {
      id: 7,
      name: "Outdoor Seating "
    },
    {
      id: 8,
      name: "Serves Alcohol "
    },
    {
      id: 9,
      name: "Pure Veg "
    },
    {
      id: 10,
      name: "Open Now "
    },
    {
      id: 11,
      name: "More Filters",
      icon: <i class="fi fi-br-angle-small-down"></i>,
    },
    {
      id: 12,
      name: "Cakes "
    },

  ]





  
  return (
    <div>
      <div>
        <Collections list={collectionsList} />
      </div>
      <div className='max-width'>
        <Filter filterList={diningFilter} />
      </div>
    </div>
  )
}

export default DiningOut