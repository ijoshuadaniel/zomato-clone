import React, { useEffect, useState } from 'react'
import './filterlist.scss'
import { Container } from 'react-bootstrap'
import Filters from './filters'

const FilterList = () => {
  const [scroll, setscroll] = useState(true)
  const handelScroll = () => {
    if (window.scrollY > 100) {
      setscroll(false)
    } else {
      setscroll(true)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handelScroll)
  }, [])

  return (
    <div
      className='filterlist-main'
      style={!scroll ? { position: 'fixed', top: 0 } : { position: 'fixed' }}
    >
      <Container>
        <div className='Filter-List'>
          <Filters name='filter' />
          <Filters name='Rating : 4.0+' />
          <Filters name='Safe and Hygenic' />
          <Filters name='Pure Veg' />
          <Filters name='Delivery Time' />
          <Filters name='Great Offers' />
        </div>
      </Container>
    </div>
  )
}

export default FilterList
