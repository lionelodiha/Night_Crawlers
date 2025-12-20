import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.heroSection4}>
      <div className={styles.ourFeatures}>
        <p className={styles.aboutNightCrawlers}>Our Best Features</p>
      </div>
      <div className={styles.features}>
        <div className={styles.feature1}>
          <div className={styles.phoneIconFrame}>
            <img
              src="../image/mje8rtgf-vds6a68.png"
              className={styles.iPhone16Pro}
            />
          </div>
          <p className={styles.easyToOrder}>Easy to Order&nbsp;</p>
          <p className={styles.fromLateNightBitesTo}>
            From late-night bites to everyday meals, we deliver fast, fresh, and
            reliably right to your doorstep, no matter the hour.”
          </p>
        </div>
        <div className={styles.feature1}>
          <div className={styles.phoneIconFrame}>
            <img
              src="../image/mje8rtgg-bjjwlgu.png"
              className={styles.iPhone16Pro}
            />
          </div>
          <p className={styles.easyToOrder}>Fast Delivery</p>
          <p className={styles.fromLateNightBitesTo}>
            From late-night bites to everyday meals, we deliver fast, fresh, and
            reliably right to your doorstep, no matter the hour.”
          </p>
        </div>
        <div className={styles.feature1}>
          <div className={styles.phoneIconFrame}>
            <img
              src="../image/mje8rtgg-m4cr5j7.png"
              className={styles.iPhone16Pro}
            />
          </div>
          <p className={styles.easyToOrder}>Best Quality</p>
          <p className={styles.fromLateNightBitesTo}>
            From late-night bites to everyday meals, we deliver fast, fresh, and
            reliably right to your doorstep, no matter the hour.”
          </p>
        </div>
      </div>
    </div>
  );
}

export default Component;
