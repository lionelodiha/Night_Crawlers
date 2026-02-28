import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.text}>© Night Crawlers 2026.inc</p>
      <div className={styles.row}>
        <img src="../image/mje90f24-eobrkkp.svg" className={styles.mail} />
        <p className={styles.text}>help@nightcrawlers.com</p>
      </div>
    </div>
  );
}

export default Component;
