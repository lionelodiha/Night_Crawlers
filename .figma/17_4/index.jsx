import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.autoWrapper}>
        <div className={styles.logoFooterText}>
          <img
            src="../image/mje8ir02-vtwrg5p.png"
            className={styles.nightCrawlersLogoBla}
          />
          <p className={styles.getYourFavoriteMeals}>
            Get your favorite meals delivered fast, fresh, and right to your door.
          </p>
        </div>
        <div className={styles.links}>
          <div className={styles.aFooterLinksColumn}>
            <p className={styles.heading}>Product</p>
            <div className={styles.footerLinks}>
              <p className={styles.text}>Overview</p>
              <p className={styles.text}>Features</p>
            </div>
          </div>
          <div className={styles.aFooterLinksColumn}>
            <p className={styles.heading}>Company</p>
            <div className={styles.footerLinks}>
              <p className={styles.text}>About us</p>
              <p className={styles.text}>Contact</p>
            </div>
          </div>
          <div className={styles.aFooterLinksColumn}>
            <p className={styles.heading}>Legal</p>
            <div className={styles.footerLinks}>
              <p className={styles.text}>Terms</p>
              <p className={styles.text}>Privacy</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerIncSocials}>
        <p className={styles.footerText}>© 2026 Night Crawlers.inc</p>
        <div className={styles.socials}>
          <img src="../image/mje8ir02-k02ewke.png" className={styles.instagram} />
          <img src="../image/mje8ir02-wrgzyap.png" className={styles.instagram} />
          <img src="../image/mje8iqzx-1n4d3p5.png" className={styles.instagram} />
        </div>
      </div>
    </div>
  );
}

export default Component;
