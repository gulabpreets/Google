import React from 'react'
import { NavLink } from 'react-router-dom';
import './routes.css'

const Routes = () => {

  const linkedinProfileUrl = 'https://www.linkedin.com/in/gulabpreets'; // Replace with your actual LinkedIn profile URL

  return (
    <div className='links'>
    {/* <NavLink className='lnk-txt' to="/"><button className='btn'>Home Page</button></NavLink> */
    /* <div className='linksLeft'>
    <NavLink className='lnk-txt' to="/all"><button className='btn'>🔍All</button></NavLink>

    <NavLink className='lnk-txt' to="/images"><button className='btn'>📸Images</button></NavLink>

    <NavLink className='lnk-txt' to="/videos"><button className='btn'>📽️Videos</button></NavLink>
    
    <NavLink className='lnk-txt' to="/news"><button className='btn'>📰News</button></NavLink>
    </div> */}
          <h1 className='lnk-txt'>
        Developed by <a href={linkedinProfileUrl} target="_blank" rel="noopener noreferrer"><strong><em><u>Gulabpreet Singh</u></em></strong></a> 
      </h1>
 </div>
  )
}

export default Routes
