import React from 'react';
import NavigationElement from '../../hoc/NavigationElement';
import styles from './Navigation.module.css'
import profile from '../../common/images/Vector (4).png'
import hospitals from '../../common/images/Vector (3).png'
import message from '../../common/images/Vector (2).png'
import test from '../../common/images/Group.png'
import information from '../../common/images/Vector (1).png'
import help from '../../common/images/Group1.png'
import logo from '../../common/images/Logo.png'

const Navigation = () => {
  return (
    <div className={styles.navWrapper}>
      <div className={styles.logo}>
        Логотип
      </div>
      <nav className={styles.linkWrapper}>
        <NavigationElement path={'/profile'}
                           img={profile}
                           text={'Профиль'}
        />
        <NavigationElement path={'/hospitals'}
                           img={hospitals}
                           text={'Врачи и клиники'}
        />
        <NavigationElement path={'/message'}
                           img={message}
                           text={'Сообщения'}
        />
        <NavigationElement path={'/test'}
                           img={test}
                           text={'Тестирование'}
        />
        <NavigationElement path={'/information'}
                           img={information}
                           text={'Полезно знать'}
        />
      </nav>
      <div className={styles.footer}>
        <NavigationElement path={'/help'}
                           img={help}
                           text={'Помощь'} />
        <img className={styles.logoImg} src={logo} alt={'logo'} />
      </div>
    </div>
  )
}

export default Navigation