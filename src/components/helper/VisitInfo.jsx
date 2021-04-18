import styles from '../Profile/DoctorVisits/DoctorVisits.module.css';
import React from 'react';

const VisitInfo = ({visits, totalCountVisit}) => {
  return (
    <>
      {visits.slice(0, totalCountVisit).map(i => <div key={i.id} className={styles.visitInfoTab}>
          <span className={styles.tabDate}>{i.date}</span>
          <span className={styles.tabHospitalName}>{i.hospitalName}</span>
          <span className={styles.tabHospitalAddress}>{i.hospitalAddress}</span>
          <div className={styles.tabDoctorWrapper}>
            <img className={styles.avatar} src={i.doctor.avatar} alt={'аватарочка врача'}/>
            <div>
              <div className={styles.doctorFullName}>{i.doctor.fullName}</div>
              <div className={styles.doctorSpecialty}>{i.doctor.specialty}</div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default VisitInfo