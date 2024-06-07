import React from 'react'
import styles from '../../assets/css/socialMedia/facebook.module.css'

const Facebook = () => {
  return (
    <button className={styles.Btn}>
        <span className={styles.svgContainer}>
            <svg
            viewBox="0 0 320 512"
            height="1.3em"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.svgIcon}
            fill="white"
            >
            <path
                d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
            ></path>
            </svg>
        </span>
        <span className={styles.BG}></span>
    </button>
  )
}

export default Facebook