import React from 'react'
import './dinningFilter.css'

const Filter = ({ filterList }) => {

    return (
        <div className='filter-for-using-at-every-ware' >
            <div className="filter-item-head">
                <div className="filter-items">
                    {filterList && filterList.map((filter) => {
                        return <div className='filter-item cur-po' >
                            <div className="filter-icon">
                                {filter.icon}
                            </div>
                            <div className="filter-name">
                                {filter.name}
                            </div>
                        </div>
                    })}
                </div>
            </div>

        </div>
    )
}

export default Filter