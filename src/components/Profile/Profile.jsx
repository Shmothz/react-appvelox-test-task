import React from 'react';
import {ElectronicCard} from './ElectronicCard';
import {DoctorVisits} from './DoctorVisits/DoctorVisits';

const Profile = ({visits}) => {
  return (
    <div>
      <DoctorVisits visits={visits}/>
      <ElectronicCard />
    </div>
  )
}

export default Profile