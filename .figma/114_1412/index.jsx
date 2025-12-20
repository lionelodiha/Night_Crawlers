import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.heroSection1}>
      <p className={styles.everyDeliveryToYourD}>Every Delivery to your Doorstep</p>
      <p className={styles.nightCrawlersIsMoreT}>
        Night Crawlers is more than a delivery app—we’re a platform built to elevate
        how people discover, enjoy, and experience food. We combine seamless
        technology with trusted restaurant partners to bring quality meals closer to
        you, no matter the hour.
        <br />
        <br />
      </p>
      <div className={styles.exploreCategoriesBut}>
        <p className={styles.exploreCategoriesHer}>Explore Categories here</p>
        <img src="../image/mje6pls9-a9823sz.png" className={styles.forward} />
      </div>
    </div>
  );
}

export default Component;
