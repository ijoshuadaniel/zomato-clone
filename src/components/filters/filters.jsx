import React from 'react'
import './filters.scss'

const Filters = ({ name }) => {
  return (
    <div className='filters'>
      <span>{name}</span>
    </div>
  )
}

export default Filters
