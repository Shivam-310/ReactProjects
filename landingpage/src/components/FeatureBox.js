import React from 'react'

function FeatureBox(props) {
  return (
    <div className='a-box'>
      <div className='a-b-img'>
        <img src={props.image}/>
      </div>
      <div className='s-b-text'>
      <h2>{props.title}</h2>
      <p>This is just a text to be displayed</p>
      </div>
    </div>
  )
}

export default FeatureBox
