import React from 'react';
import styles from './Header.module.css'
import search from '../../common/images/Vector (6).png'
import push from '../../common/images/Vector (8).png'
import eye from '../../common/images/Vector (9).png'

const Header = ({userData}) => {
  return (
    <div className={styles.headerWrapper}>
      <span className={styles.headerTitle}>Мой профиль</span>
      <div className={styles.rightSideMenuWrapper}>
        <img className={styles.imgNotAvatar} src={search} alt='search'/>
        <img className={styles.imgNotAvatar} src={push} alt='push'/>
        <img className={styles.imgNotAvatar} src={eye} alt='eye'/>
        <img className={styles.avatar} src={userData.photos} alt={'картиночка'}/>
      </div>
    </div>
  )
}

export default Header