import React from 'react';
import VisitInfo from '../helper/VisitInfo';
import {NavLink} from 'react-router-dom';
import Arrow from '../../common/images/Vector.png'
import styles from './MyVisits.module.css'

const MyVisits = (props) => {
  return (
    <div>
      <NavLink to={'/profile'}>
        <div className={styles.myVisitsBackBtn}>
          <img src={Arrow} alt={'Стрелочка'}/>
          <span>Мои записи</span>
        </div>
      </NavLink>
      <div className={styles.visitInfoWrapper}>
        <VisitInfo visits={props.visits} totalCountVisit={10}/>
      </div>
    </div>
  )
}

export default MyVisits