import React from 'react';
import {NavLink} from 'react-router-dom';

const NavigationElement = ({path, img, text}) => {
  return(
    <NavLink to={path}>
      <div>
        <img src={img} alt={'Картиночка'} />
        <span>{text}</span>
      </div>
    </NavLink>
  )
}

export default NavigationElement