import React from 'react';
import {NavLink} from 'react-router-dom';
import VisitInfo from './VisitInfo';

export function DoctorVisits({visits}) {
  return (
    <div>
      <h2>Записи на прием</h2>
      <VisitInfo visits={visits} />
      <div>
        <span />Еще 3 записи
        <NavLink to={'/profile/visits'}>Подробнее</NavLink>
      </div>
    </div>
  );
}



