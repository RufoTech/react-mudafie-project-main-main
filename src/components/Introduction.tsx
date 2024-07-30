import React from 'react'
import Button from './Button'

const Introduction:React.FC = () => {
  return (
    <>
  
      <div className="introduction-about">
        <div className="introduction">
          <div className="container">
          <span className='intro-h1'><h1 className='playfair-display  intro-h1'>Udfort Luxury Residences</h1></span>
          <h2 className='text-light roboto-bold intro-h2 py-4'>Living Spaces In Pecherska-Kiev</h2>
         <div className="intro-button py-4 ">
         <Button/>
         <img src="/assets/images/introduction/service-icon-1.png" alt=""  className='intro-icon1 ' />

         </div>
          </div>
        </div>
      </div>
   
    </>
  )
}

export default Introduction