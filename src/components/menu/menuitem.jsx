import React from 'react'
import './menuitem.scss'

const MenuItem = ({ image, title, ratings, keyword, price, time }) => {
  return (
    <div className='menu-item'>
      <div className='card'>
        <div className='card-heading'>
          <img src={image} alt='imgesforheading' className='topimage' />
        </div>
        <div className='card-body'>
          <h5>{title}</h5>
          <span>Ratings : {ratings}</span>
          <br />
          <span>{keyword}</span>
          <br />
          <span>₹{price} for one</span>
          <span> • {time} Min</span>
        </div>
      </div>
    </div>
  )
}

export default MenuItem
