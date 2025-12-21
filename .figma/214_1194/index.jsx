import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.qstTitleContainer}>
      <div className={styles.qstTitle}>
        <img src="../image/mjebkmzi-35fcu23.png" className={styles.about} />
        <p className={styles.stillHaveAQuestion}>Still have a question?</p>
      </div>
      <p className={styles.ifYouDidNtFindYourAn}>
        If you did’nt find your answer, feel free to reach out.
      </p>
      <p className={styles.subheading}>Contact us</p>
    </div>
  );
}

export default Component;
