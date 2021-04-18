import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './NavigationElement.module.css'


const NavigationElement = ({path, img, text}) => {
  return (
    <div className={styles.elementWrapper}>
      <NavLink to={path} activeClassName={styles.active}>
        <img className={styles.elementImg} src={img} alt={'Картиночка'}/>
        <span className={styles.elementText}>{text}</span>
      </NavLink>
    </div>
  )
}

export default NavigationElement