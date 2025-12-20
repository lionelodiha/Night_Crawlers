import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.subscribeEmail}>
      <div className={styles.subscribeEmailInputC}>
        <p className={styles.exclusiveMenusPromot}>Exclusive Menus & Promotions</p>
        <p className={styles.joinTheNightCrawlers}>
          Join the Night Crawlers tribe! Be the first to know about fresh deals, new
          food spots, and exclusive night-time treats.
        </p>
        <div className={styles.input}>
          <p className={styles.text}>Email</p>
          <div className={styles.buttonSubscribe}>
            <p className={styles.subscribe}>Subscribe</p>
          </div>
        </div>
      </div>
      <img src="../image/mje7taht-9jmjknp.png" className={styles.subscribeImage} />
    </div>
  );
}

export default Component;
