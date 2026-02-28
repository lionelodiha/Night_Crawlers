import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.signUpSection}>
      <div className={styles.autoWrapper}>
        <img
          src="../image/mjc2mpcn-lmp1tq3.png"
          className={styles.nightCrawlersLogoWhi}
        />
        <p className={styles.startYourNightCrawle}>
          Start Your Night Crawlers Journey
        </p>
        <p className={styles.signUpToEnjoyFastDel}>
          Sign up to enjoy fast delivery, exclusive offers, and a personalized Night
          Crawlers experience!
        </p>
      </div>
      <div className={styles.form}>
        <div className={styles.inputWithLabel}>
          <p className={styles.label}>Username*</p>
          <div className={styles.content}>
            <p className={styles.text}>Enter your username</p>
          </div>
        </div>
        <div className={styles.inputWithLabel2}>
          <p className={styles.label}>Phone Number*</p>
          <div className={styles.content2}>
            <p className={styles.text2}>Enter your phone number</p>
          </div>
        </div>
        <div className={styles.inputWithLabel3}>
          <p className={styles.label}>Password*</p>
          <div className={styles.input}>
            <p className={styles.text}>Create a password</p>
            <img
              src="../image/mjc2mp6z-moaay5p.svg"
              className={styles.helpCircle}
            />
          </div>
        </div>
        <div className={styles.aInputFieldBase}>
          <div className={styles.inputWithLabel}>
            <p className={styles.label}>Confirm Password*</p>
            <div className={styles.content}>
              <p className={styles.text}>Confirm password</p>
            </div>
          </div>
          <p className={styles.hintText}>Must be at least 8 characters.</p>
        </div>
      </div>
    </div>
  );
}

export default Component;
