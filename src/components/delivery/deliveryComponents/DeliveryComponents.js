import React from 'react'
import Slider from "react-slick"
import nextArrow from '../../commen/carousel/nextArrow'
import prevArrow from '../../commen/carousel/prevArrow'
import DeliveryItem from '../deliveryItem/DeliveryItem'
import './delivertyCopnents.css'





const DeliveryComponents = () => {

    const delivertyBrandsName = [
        {
            id: 1,
            image: 'https://b.zmtcdn.com/data/brand_creatives/logos/cc214b60b95cba868170d1a8d66bcab3_1629438962.png?output-format=webp',
            name: "WOW! Momo",
            time: "10 min"

        },
        {
            id: 2,
            image: "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252746.png?output-format=webp",
            name: "Domino's Pizza",
            time: "20 min"

        },
        {
            id: 3,
            image: "https://b.zmtcdn.com/data/brand_creatives/logos/6799a847a4bfaee73f5e14aaba8cef83_1638193272.png?output-format=webp",
            name: "Chowman",
            time: "30 min"

        },
        {
            id: 4,
            image: "https://b.zmtcdn.com/data/brand_creatives/logos/560b209a689eefa9feb367b5d5604097_1611382952.png?output-format=webp",
            name: "KFC",
            time: "40 min"

        },
        {
            id: 5,
            image: "https://b.zmtcdn.com/data/brand_creatives/logos/fe5db95ae85292933996d4043f600d3b_1611320738.png?output-format=webp",
            name: "Arsalan",
            time: "50 min"

        },
        {
            id: 6,
            image: "https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png?output-format=webp",
            name: "Pizza Hut",
            time: "60 min"

        },
        {
            id: 7,
            image: "https://b.zmtcdn.com/data/brand_creatives/logos/954418964eb9404a93e4f6a3073e9cb0_1629438610.png?output-format=webp",
            name: "Gypsy By Aminia",
            time: "70 min"

        },
        {
            id: 8,
            image: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188103.png?output-format=webp",
            name: "Burger King",
            time: "80 min"

        },
        {
            id: 9,
            image: "https://b.zmtcdn.com/data/brand_creatives/logos/03ceb30dbebbf48efaf0ee5732b7773e_1629439318.png?output-format=webp",
            name: "Mama Mia!",
            time: "90 min"

        },
        {
            id: 10,
            image: "https://b.zmtcdn.com/data/brand_creatives/logos/a04d17b716cbd00b199da7fac17be6f5_1629442373.png?output-format=webp",
            name: "WOW! China",
            time: "110 min"

        },
    ]

    var settings = {
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <nextArrow />,
        prevArrow: <prevArrow />
    };

    return (
        <div className='delivery-collections'>
            <h3 className='delivery-text'>Top brands for you</h3>
            <div className="max-width">
                <div className="delivery-items">


                    {/* this is photo section */}
                    <Slider {...settings} >
                        {/* <div className='delivery-items-details'>
                            {delivertyBrandsName.map((brand) => {
                                return <div className="delivery-item">
                                    <div className="brandImage">
                                        <img src={brand.image} alt="Brand images" />
                                    </div>
                                    <div className="brandName">
                                        {brand.name}
                                    </div>
                                    <div className="brandTime">
                                        {brand.time}
                                    </div>
                                </div>
                            })}
                        </div> */}
                        {delivertyBrandsName.map((item)=>{
                            return <DeliveryItem item={item}/>
                        })}
                    </Slider>
                </div>
            </div>
        </div >
    )
}

export default DeliveryComponents