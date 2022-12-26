import React from 'react'
import Slider from "react-slick"
import nextArrow from '../../commen/carousel/nextArrow';
import prevArrow from '../../commen/carousel/prevArrow';
import './Collections.css'

const Collections = ({ list }) => {


  var settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <nextArrow />,
    prevArrow: <prevArrow />
  };




  return (
    <div className='collections-wrapper'>
      <div className="collections-details max-width">
        <h2 className='title-collections'>Collections</h2>
        <div className="collection-information">
          <div>
            <p className='collection-info'> Explore curated lists of top restaurants, cafes, pubs, and bars in Kolkata, based on trends </p>
          </div>
          <div>
            <p className='collection-location'> All collections in Kolkata </p>
            <i class="fi fi-br-caret-right"></i>
          </div>
        </div>

        <Slider {...settings}>
          {list.map((item) => {
            return <div>
              <div className="collection-cover">
                <img src={item.img} alt={item.title} className=" collection-image " />
                <div className="gredient-bg"></div>
                <div className="collection-card-title">{item.title}</div>
                <div className="collection-card-places">
                  {item.place}
                  <i class="fi fi-br-caret-right"></i>
                </div>
              </div>
            </div>
          })}
        </Slider>


      </div>
    </div>
  )
}

export default Collections