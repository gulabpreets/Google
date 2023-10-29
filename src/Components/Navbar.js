import React, { useState,useEffect } from 'react'
import './navbar.css'
import NavModeBtn from './NavCompo/NavModeBtn'
import NavSearch from './NavCompo/NavSearch'
import NavLogo from './NavCompo/NavLogo'

const Navbar = () => {


  return (
    <div>
      
        <div className='navSwitch'>
          <div className='nsFlex'>
            <div className='logoSwitchflex'>
              <div className='Nav-logo1'><NavLogo /></div>
              <div className='switch1'><NavModeBtn /></div>
            </div>
            <div className='searchbar1'><NavSearch/></div>
          </div>
        </div>

      <div className='Navbar'>
        <div className='logoSearch'>
          <div className='Nav-logo'><NavLogo /></div>
          <div className='searchbar'><NavSearch/></div>
        </div>
        <div className='switch'><NavModeBtn /></div>
      </div>

    </div>
  )
}

export default Navbar
