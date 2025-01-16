import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <div id='main'>
      <Navbar/>
      <div className='name'>
        <h1><span>Launch Your App</span> with Confidence and Creativity</h1>
        <p className='details'>Lorem ipsum refers to placeholder text often used in publishing 
        and graphic design to demonstrate the visual style of a document, webpage, or typeface.</p>
        <a href='#' className='cv-btn'>Download</a>
      </div>
    </div>
  )
}

export default Header
