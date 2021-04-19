import styles from '../Profile/DoctorVisits/DoctorVisits.module.css';
import React from 'react';
import {format} from 'date-fns'
import ru from "date-fns/locale/ru";

const VisitInfo = ({visits, totalCountVisit, setCancelVisitTC}) => {

  const cancelVisit = () => {
    setCancelVisitTC() // при клике должна удаляться запись к врачу с сервера и обновляться список записей.
  }

  return (
    <>
      {visits.slice(0, totalCountVisit).map(i => <div key={i.id} className={styles.visitInfoTab}>
          <span className={styles.tabDate}>{
            format(new Date(i.date),'EEEE dd.MM.yyyy | HH:mm', {locale: ru})
          }</span>
          <span className={styles.tabHospitalName}>{i.hospitalName}</span>
          <span className={styles.tabHospitalAddress}>{i.hospitalAddress}</span>
          <div className={styles.tabDoctorWrapper}>
            <img className={styles.avatar} src={i.doctor.avatar} alt={'аватарочка врача'}/>
            <div>
              <div className={styles.doctorFullName}>{i.doctor.fullName}</div>
              <div className={styles.doctorSpecialty}>{i.doctor.specialty}</div>
            </div>
          </div>
          <button onClick={cancelVisit} className={styles.cancelBtn}>Отменить</button>
        </div>
      )}
    </>
  )
}

export default VisitInfo