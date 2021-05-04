import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './footer.scss'
import logo from './../../assets/logo.png'

const Footer = () => {
  return (
    <div className='main-footer'>
      <Container>
        <img src={logo} alt='logo' style={{ width: '150px', height: '30px' }} />
        <br />
        <br />
        <br />
        <Row>
          <Col md='3'>
            <span>COMPANY</span>
            <br /> <br />
            <ul>
              <li>Who We Are</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Report Frauds</li>
            </ul>
          </Col>
          <Col md='3'>
            <span>FOR FOODIES</span>
            <br /> <br />
            <ul>
              <li>Code of Conduct</li>
              <li>Community</li>
              <li>Blogger Help</li>
              <li>Mobile Apps</li>
            </ul>
          </Col>
          <Col md='3'>
            <span>FOR RESTAURANTS</span>
            <br /> <br />
            <ul>
              <li>Add Restaurant</li>
              <li>Claim your Listing</li>
              <li>Business App</li>
              <li>Restaurant Widgets</li>
            </ul>
          </Col>
          <Col md='3'>
            <span>FOR YOU</span>
            <br /> <br />
            <ul>
              <li>Privacy</li>
              <li>Terms</li>
              <li>Security</li>
              <li>Sitemap</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
