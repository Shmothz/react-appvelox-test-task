import React from 'react';
import NavigationElement from '../../hoc/NavigationElement';

const Navigation = () => {
  return (
    <div>
      <NavigationElement path={'/profile'} img={null} text={'Профиль'}/>
      <NavigationElement path={'/hospitals'} img={null} text={'Врачи и клиники'} />
      <NavigationElement path={'/message'} img={null} text={'Сообщения'} />
      <NavigationElement path={'/test'} img={null} text={'Тестирование'} />
      <NavigationElement path={'/information'} img={null} text={'Полезно знать'} />
    </div>
  )
}

export default Navigation