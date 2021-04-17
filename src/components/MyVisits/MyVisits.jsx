import React from 'react';
import VisitInfo from '../helper/VisitInfo';

const MyVisits = (props) => {
  return (
    <div>
      <VisitInfo visits={props.visits} totalCountVisit={10}/>
    </div>
  )
}

export default MyVisits