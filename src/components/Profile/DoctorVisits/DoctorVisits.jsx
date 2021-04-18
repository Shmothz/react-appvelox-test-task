import React from 'react';
import {NavLink} from 'react-router-dom';
import VisitInfo from '../../helper/VisitInfo';
import styles from './DoctorVisits.module.css'

export function DoctorVisits({visits}) {
  return (
    <div className={styles.doctorVisitsWrapper}>
      <h2 className={styles.doctorsVisitsTitle}>Записи на прием</h2>
      <div className={styles.visitsInfoWrapper}>
        <VisitInfo visits={visits} totalCountVisit={2}/>
        <div className={styles.moreVisitsWrapper}>
          <div>Еще 3 записи</div>
          <div>
            <NavLink to={'/profile/visits'}>Подробнее</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}



