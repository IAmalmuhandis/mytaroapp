import React from 'react'
import styles from '../../assets/css/separator.module.css'

const Separator = () => {
  return (
   <div className={styles.separator}>
        <hr className={styles.line} />
          <span>Or</span>
        <hr className={styles.line} />
   </div>
  )
}

export default Separator