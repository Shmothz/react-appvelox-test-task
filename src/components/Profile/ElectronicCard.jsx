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
            <ul className={styles.tabText}>
              <li>Ваши личные данные</li>
              <li>Рекомендации врачей</li>
              <li>История болезней</li>
            </ul>
          </div>
        </div>
        <div className={styles.electronicCardTab}>
          <img src={analysis} alt={'analysis'}/>
          <div>
            <h3>Результаты анализов</h3>
            <span>Вы можете узнать здесь результаты своих анализов</span>
          </div>
        </div>
        <div className={styles.electronicCardTab}>
          <img src={addInfo} alt={'addInfo'}/>
          <div>
            <h3>Добавить информацию</h3>
            <span>Добавляйте в свою электронную медицинскую карту новые данные</span>
          </div>
        </div>
        <div className={styles.electronicCardTab}>
          <img src={history} alt={'history'}/>
          <div>
            <h3>История приемов</h3>
            <span>Вся информация о полученных услугах за все время хранится здесь</span>
          </div>
        </div>
      </div>
    </div>
  );
}