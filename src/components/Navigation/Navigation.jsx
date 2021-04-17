import React from 'react';
import NavigationElement from '../../hoc/NavigationElement';
import styles from './Navigation.module.css'

const Navigation = () => {
  return (
    <div className={styles.navWrapper}>
      <div>
        Логотип
      </div>
      <div className={styles.linkWrapper}>
        <NavigationElement path={'/profile'} img={null} text={'Профиль'}/>
        <NavigationElement path={'/hospitals'} img={null} text={'Врачи и клиники'}/>
        <NavigationElement path={'/message'} img={null} text={'Сообщения'}/>
        <NavigationElement path={'/test'} img={null} text={'Тестирование'}/>
        <NavigationElement path={'/information'} img={null} text={'Полезно знать'}/>
      </div>
      <div>
        <NavigationElement path={'/help'} img={null} text={'Помощь'}/>
      </div>
    </div>
  )
}

export default Navigation