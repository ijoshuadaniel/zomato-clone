import React from 'react'
import './header.scss'

import logo from './../../assets/logo.png'
import { Container } from 'react-bootstrap'

const Header = () => {
  return (
    <div className='main-header'>
      <Container>
        <div className='header-flex'>
          <div>
            <img src={logo} alt='logo' className='logo' />
          </div>
          <div>
            <div className='loaction-search'>
              <input
                type='text'
                placeholder='Agartala'
                className='form-control location top-div'
              />
              <input
                type='text'
                placeholder='Search for restaurant, cuisine or a dish'
                className='form-control search top-div'
              />
            </div>
          </div>
          <div className='login-signup'>
            <h6>Login</h6>
            <h6>SignUp</h6>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Header
