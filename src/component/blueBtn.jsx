import React from 'react'
import { blue } from '../utils/colors'
import '../assets/css/btnAnimation.css'

const BlueBtn = (props) => {
    const btnStyle = {
        backgroundColor: blue,
    }
    return (
        <button className='xl:w-[21rem] lg-w-80 lg:h-20 md:w-72 md:h-16 w-60 h-12 rounded-3xl lg:p-5 md:p-4 p-2 lg:text-3xl md:text-2xl text-lg font-[500] text-white btnAnimation' style={btnStyle} onClick={props.onClick}>{props.title}</button>
    )
}

export default BlueBtn