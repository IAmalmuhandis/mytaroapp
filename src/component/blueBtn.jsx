import React from 'react'
import Button from '@mui/material/Button';
import { blue } from '../utils/colors'

const BlueBtn = (props) => {
    const btnStyle = {
        width: props.width, 
        height: props.height, 
        borderRadius: '20px', 
        padding: '5.6px', 
        fontSize: props.fontSz,
        textTransform: 'none',
        backgroundColor: blue,
        fontFamily: 'Montserrat',
        fontWeight: '500',
        lineHeight: '19.5px',
    }
    return (
        <Button color='primary' disableElevation sx={btnStyle} variant="contained">{props.title}</Button>
    )
}

export default BlueBtn