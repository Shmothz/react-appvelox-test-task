import React from 'react';
import VisitInfo from '../Profile/DoctorVisits/VisitInfo';

const MyVisits = (props) => {
  return (
    <div>
      <VisitInfo visits={props.visits}/>
    </div>
  )
}

export default MyVisits