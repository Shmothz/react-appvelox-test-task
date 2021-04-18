import React from 'react';
import VisitInfo from '../helper/VisitInfo';
import {NavLink} from 'react-router-dom';
import Arrow from '../../common/images/Vector.png'
const MyVisits = (props) => {
  return (
    <div>
      <NavLink to={'/profile'}>
        <img src={Arrow} alt={'Стрелочка'}/>
        <div>Мои записи</div>
      </NavLink>
      <VisitInfo visits={props.visits} totalCountVisit={10}/>
    </div>
  )
}

export default MyVisits