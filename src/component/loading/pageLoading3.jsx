import React from 'react'
import '../../assets/css/loading/pageLoading3.css'

const PageLoading3 = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'> 
        <div id="wifi-loader">
  <svg viewBox="0 0 86 86" className="circle-outer">
    <circle r="40" cy="43" cx="43" className="back"></circle>
    <circle r="40" cy="43" cx="43" className="front"></circle>
    <circle r="40" cy="43" cx="43" className="new"></circle>
  </svg>
  <svg viewBox="0 0 60 60" className="circle-middle">
    <circle r="27" cy="30" cx="30" className="back"></circle>
    <circle r="27" cy="30" cx="30" className="front"></circle>
  </svg>
  <div data-text="Loading..." className="text"></div>
</div>
    </div>
  )
}

export default PageLoading3
