import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.logIn}>
      <img src="../image/mjc46c4s-hbouz0s.png" className={styles.imageSignUp} />
      <div className={styles.autoWrapper}>
        <div className={styles.signUpSection}>
          <div className={styles.nightCrawlersLogoWhi}>
            <p className={styles.welcomeBack}>Welcome Back!</p>
          </div>
          <div className={styles.form}>
            <div className={styles.inputWithLabel}>
              <p className={styles.label}>Email*</p>
              <div className={styles.content}>
                <p className={styles.text}>Enter your email</p>
              </div>
            </div>
            <div className={styles.inputWithLabel2}>
              <p className={styles.label}>Password*</p>
              <div className={styles.content2}>
                <p className={styles.text2}>Create a password</p>
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.checkbox}>
              <div className={styles.aCheckboxBase} />
              <p className={styles.label}>Remember for 30 days</p>
            </div>
            <p className={styles.text3}>Forgot password</p>
          </div>
          <p className={styles.welcomeBackPleaseLog}>
            Welcome back! Please log in with your correct details.
          </p>
        </div>
        <div className={styles.signInButtonSection}>
          <div className={styles.buttonSignUp}>
            <p className={styles.signIn}>Sign In</p>
          </div>
          <div className={styles.signUpLogInPtopmpt}>
            <p className={styles.donTHaveAnAccount}>Don’t have an account?</p>
            <p className={styles.signUp}>Sign Up</p>
          </div>
        </div>
        <div className={styles.footer}>
          <p className={styles.text4}>© Night Crawlers 2026.inc</p>
          <div className={styles.row2}>
            <img src="../image/mjc46c4e-9v06wi9.svg" className={styles.mail} />
            <p className={styles.text4}>help@nightcrawlers.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
