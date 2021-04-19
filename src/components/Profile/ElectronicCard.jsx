import React from 'react';
import styles from './ElectronicCard.module.css'
import userInfo from '../../common/images/userInfo.png'
import analysis from '../../common/images/analiz.png'
import addInfo from '../../common/images/addInfo.png'
import history from '../../common/images/history.png'

export function ElectronicCard() {
  return (
    <div className={styles.electronicCardWrapper}>
      <h2 className={styles.electronicCardTitle}>
        Электронная карта
      </h2>
      <div className={styles.tabsWrapper}>
        <div className={styles.electronicCardTab}>
          <img src={userInfo} alt={'userInfo'}/>
          <div className={styles.tabTextWrapper}>
            <h3 className={styles.tabTitle}>Информация о пациенте</h3>
            <ul>
              <li>Ваши личные данные</li>
              <li>Рекомендации врачей</li>
              <li>История болезней</li>
            </ul>
          </div>
        </div>
        <div className={styles.electronicCardTab}>
          <img src={analysis} alt={'analysis'}/>
          <div className={styles.tabTextWrapper}>
            <h3 className={styles.tabTitle}>Результаты анализов</h3>
            <span className={styles.tabText}>Вы можете узнать здесь результаты своих анализов</span>
          </div>
        </div>
        <div className={styles.electronicCardTab}>
          <img src={addInfo} alt={'addInfo'}/>
          <div className={styles.tabTextWrapper}>
            <h3 className={styles.tabTitle}>Добавить информацию</h3>
            <span className={styles.tabText}>Добавляйте в свою электронную медицинскую карту новые данные</span>
          </div>
        </div>
        <div className={styles.electronicCardTab}>
          <img src={history} alt={'history'}/>
          <div className={styles.tabTextWrapper}>
            <h3 className={styles.tabTitle}>История приемов</h3>
            <span className={styles.tabText}>Вся информация о полученных услугах за все время хранится здесь</span>
          </div>
        </div>
      </div>
    </div>
  );
}