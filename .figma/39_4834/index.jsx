import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.signUp}>
      <img src="../image/mjc20bcx-wc2c1et.png" className={styles.imageSignUp} />
      <div className={styles.autoWrapper3}>
        <div className={styles.signUpSection}>
          <div className={styles.autoWrapper}>
            <img
              src="../image/mjc20bcx-y31x7pc.png"
              className={styles.nightCrawlersLogoWhi}
            />
            <p className={styles.startYourNightCrawle}>
              Start Your Night Crawlers Journey
            </p>
            <p className={styles.signUpToEnjoyFastDel}>
              Sign up to enjoy fast delivery, exclusive offers, and a personalized
              Night Crawlers experience!
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
                  src="../image/mjc20bap-s2g67cg.svg"
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
        <div className={styles.signUpButtonSection}>
          <div className={styles.buttonSignUp}>
            <p className={styles.createAccount}>Create Account</p>
          </div>
          <div className={styles.autoWrapper2}>
            <p className={styles.logIn}>Log In</p>
            <p className={styles.alreadyHaveAnAccount}>Already have an account?</p>
          </div>
        </div>
        <div className={styles.footer}>
          <p className={styles.text3}>© Night Crawlers 2026.inc</p>
          <div className={styles.row}>
            <img
              src="../image/mjc20baq-qe46vq7.svg"
              className={styles.helpCircle}
            />
            <p className={styles.text3}>help@nightcrawlers.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
