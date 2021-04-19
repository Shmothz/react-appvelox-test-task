import React from 'react';
import {ElectronicCard} from './ElectronicCard';
import {DoctorVisits} from './DoctorVisits/DoctorVisits';

const Profile = ({visits, setCancelVisitTC}) => {
  return (
    <div>
      <DoctorVisits visits={visits} setCancelVisitTC={setCancelVisitTC} />
      <ElectronicCard />
    </div>
  )
}

export default Profile