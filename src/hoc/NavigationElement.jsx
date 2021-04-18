import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './NavigationElement.module.css'


const NavigationElement = ({path, img, text}) => {
  return (
    <>
      <NavLink to={path} className={styles.elementWrapper} activeClassName={styles.active}>
        <img className={styles.elementImg} src={img} alt={'Картиночка'}/>
        <span className={styles.elementText}>{text}</span>
      </NavLink>
    </>
  )
}

export default NavigationElement