import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.heroSection2}>
      <div className={styles.aboutNightCrawlers2}>
        <p className={styles.aboutNightCrawlers}>About Night Crawlers</p>
      </div>
      <div className={styles.heroSection2Inner1}>
        <div className={styles.heroSection2Inner2}>
          <p className={styles.redefiningConvenienc}>
            Redefining Convenience, One Delivery at a Time.
          </p>
          <p className={styles.nightCrawlersIsMoreT}>
            Night Crawlers is more than a delivery app—we’re a platform built to
            elevate how people discover, enjoy, and experience food. We combine
            seamless technology with trusted restaurant partners to bring quality
            meals closer to you, no matter the hour.
            <br />
            <br />
            From everyday favorites to late-night cravings, we make ordering
            effortless and satisfying, with fast delivery and a user experience
            designed around your comfort. Our mission is to set a new standard for
            speed, reliability, and taste—helping you enjoy the meals you love with
            zero stress and total convenience.
            <br />
            <br />
            At Night Crawlers, we’re committed to empowering local food businesses,
            supporting innovation, and delivering joy with every order. Your hunger
            inspires us; your satisfaction drives us.
          </p>
        </div>
        <img src="../image/mje7na9d-ei1m5xv.png" className={styles.hero2Image} />
      </div>
    </div>
  );
}

export default Component;
