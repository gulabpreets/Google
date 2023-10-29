import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Routes from './Components/Routes'
import AllRoutes from './AllRoutes/AllRoutes'
import './app.css'
import Results from './Results'

const App = () => {


  return (

    <div className='AppBackground'>
        <div className='navApp'><Navbar></Navbar></div>        
        <Routes></Routes>
        {/* <div className='routesStyle'><AllRoutes></AllRoutes></div> */}
        <div className='routesStyle'><Results></Results></div>

        <div className='footer'><Footer></Footer></div>
        
      </div>
  )
}

export default App
