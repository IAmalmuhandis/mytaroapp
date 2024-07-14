import React from 'react'
import { blue } from '../../utils/colors'
import '../../assets/css/btnAnimation.css'

const BlueBtn = (props) => {
    return (
        <button className='xl:w-[21rem] lg-w-80 lg:h-20 md:w-72 md:h-16 w-52 h-12 rounded-3xl lg:text-3xl md:text-2xl text-lg font-[500] text-white btnAnimation' style={{backgroundColor: blue}} onClick={props.onClick}>{props.title}</button>
    )
}

export default BlueBtn