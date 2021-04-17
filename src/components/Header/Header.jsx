import React from 'react';
import styles from './Header.module.css'

const Header = ({userData}) => {
  return (
    <div>
      <img className={styles.avatar} src={userData.photos} alt={'картиночка'} />
      Header
    </div>
  )
}

export default Header