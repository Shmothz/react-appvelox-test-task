import styles from './DoctorVisits.module.css';
import React from 'react';

const VisitInfo = ({visits}) => {
  return (
    <div>
      {visits.map(i => <div key={i.id}>
          <span>{i.date}</span>
          <span>{i.hospitalName}</span>
          <span>{i.hospitalAddress}</span>
          <div>
            <img className={styles.avatarWrapper} src={i.doctor.avatar} alt={'аватарочка врача'}/>
            <span className={styles.doctorFullName}>{i.doctor.fullName}</span>
            <span className={styles.doctorSpecialty}>{i.doctor.specialty}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default VisitInfo