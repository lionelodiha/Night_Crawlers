import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.heroSection3}>
      <div className={styles.heroSection3Heading}>
        <p className={styles.orderTastyMealsThrou}>
          Order Tasty Meals&nbsp;&nbsp;through us
        </p>
        <div className={styles.exploreButton}>
          <p className={styles.exploreAllRestauants}>Explore all Restauants</p>
          <img src="../image/mje79tj4-m0g7gwb.png" className={styles.forward} />
        </div>
      </div>
      <div className={styles.restaurantContainer1}>
        <div className={styles.restaurant1}>
          <img src="../image/mje79tfs-ebqiolr.png" className={styles.vector} />
          <p className={styles.kFc}>KFC</p>
        </div>
        <div className={styles.restaurant2}>
          <img src="../image/mje79tft-mnpk82m.png" className={styles.vector} />
          <p className={styles.kFc}>Chicken Republic</p>
        </div>
        <div className={styles.restaurant3}>
          <img src="../image/mje79tfy-zdt3g00.png" className={styles.vector} />
          <p className={styles.kFc}>Dominos Pizza</p>
        </div>
      </div>
      <div className={styles.restaurantContainer2}>
        <div className={styles.restaurant1}>
          <img src="../image/mje79tfy-vnfduy8.png" className={styles.vector} />
          <p className={styles.kFc}>Killimanjaro&nbsp;</p>
        </div>
        <div className={styles.restaurant1}>
          <img src="../image/mje79tfy-l6ekoeg.png" className={styles.vector} />
          <p className={styles.kFc}>Pizza Hut</p>
        </div>
      </div>
    </div>
  );
}

export default Component;
