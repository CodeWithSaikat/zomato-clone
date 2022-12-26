import React from 'react'
import './indexHeader.css'

const IndexHeader = () => {
  return (
    <div className='max-width header'>
      <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="Zomato logo"
        className='headerLogo' />


      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <i className="fi fi-br-marker icon-center location-icon"></i>
              {/* <i className="fa-solid fa-location-dot icon-center location-icon"></i> */}
              <div>
                Kolkata
              </div>
            </div>
            <i class="fi fi-br-caret-down icon-center"></i>
          </div>

          <div className="location-search-separator"></div>
          
          <div className="header-search-bar">
            <i className="fi fi-br-search icon-center search-icon"></i>
            <input type="text" placeholder='Search for restrurent, cuisine or a dish' className='search-input' />
          </div>
        </div>

        <div className="profile-wrapper">
          <img src="https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
            alt="profile pic"
            className='header-profile-image' />
          <div className="header-user-name">
            Saikat
          </div>
          <i className="fi fi-br-angle-down icon-center profile-option-icon"></i>
        </div>
      </div>
    </div>
  )
}

export default IndexHeader;