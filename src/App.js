import React from 'react'
import Breadcrum from './components/breadcurm/breadcrum'
import FilterList from './components/filters/filterlist'
import Header from './components/header/header'
import Heading from './components/heading'
import MenuList from './components/menu/menulist'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <div>
      <Header />
      <Breadcrum />
      <FilterList />
      <Heading />
      <MenuList />
      <Footer />
    </div>
  )
}

export default App
