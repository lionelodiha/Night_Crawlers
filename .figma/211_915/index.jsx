import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.faqs}>
      <div className={styles.autoWrapper}>
        <div className={styles.menuNav}>
          <p className={styles.home}>Home</p>
          <p className={styles.home}>Contact Us</p>
          <p className={styles.home}>Vendors</p>
          <p className={styles.home}>FAQs</p>
        </div>
        <div className={styles.navButtons}>
          <div className={styles.buttonLogIn}>
            <img
              src="../image/mjec3ne5-syl381p.png"
              className={styles.shoppingCart}
            />
          </div>
          <div className={styles.buttonLogIn2}>
            <img src="../image/mjec3ne5-3xjoxi7.png" className={styles.customer} />
          </div>
        </div>
      </div>
      <img src="../image/mjec3ndw-f9hwmic.svg" className={styles.vector1} />
      <div className={styles.autoWrapper2}>
        <img
          src="../image/mjec3ne5-xwggx9v.png"
          className={styles.nightCrawlersLogoWhi}
        />
        <div className={styles.faqTitle}>
          <div className={styles.aboutNightCrawlers2}>
            <p className={styles.aboutNightCrawlers}>FAQs</p>
          </div>
          <p className={styles.questionsWeFrequentl}>Questions we Frequently get</p>
          <p className={styles.supportingText}>
            We’d love to hear from you. Please fill out this form or shoot us an
            email.
          </p>
        </div>
      </div>
      <div className={styles.qstAnsContainer}>
        <div className={styles.categoriesContainer}>
          <p className={styles.subheading}>Categories</p>
          <div className={styles.categories}>
            <p className={styles.generalInformation}>General Information</p>
            <p className={styles.purchasingPayment}>Purchasing & Payment</p>
            <p className={styles.purchasingPayment}>Customer Support&nbsp;</p>
            <p className={styles.purchasingPayment}>Resources</p>
          </div>
        </div>
        <div className={styles.qstAns}>
          <div className={styles.qst5}>
            <div className={styles.qstInner}>
              <p className={styles.text}>What is Night Crawlers</p>
              <div className={styles.buttonSelect}>
                <img src="../image/mjec3ne5-pqqlime.png" className={styles.minus} />
              </div>
            </div>
            <p className={styles.purchasingPaymentWeD}>
              Purchasing & Payment We’d love to hear from you. Please fill out this
              form or shoot us an email.
            </p>
          </div>
          <div className={styles.qstInner2}>
            <p className={styles.text2}>What is Night Crawlers</p>
            <div className={styles.buttonSelect}>
              <img src="../image/mjec3ne5-grcpztu.png" className={styles.minus} />
            </div>
          </div>
          <div className={styles.qstInner2}>
            <p className={styles.text2}>What is Night Crawlers</p>
            <div className={styles.buttonSelect}>
              <img src="../image/mjec3ne5-grcpztu.png" className={styles.minus} />
            </div>
          </div>
          <div className={styles.qstInner2}>
            <p className={styles.text2}>What is Night Crawlers</p>
            <div className={styles.buttonSelect}>
              <img src="../image/mjec3ne5-grcpztu.png" className={styles.minus} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.qstTitleContainer}>
        <div className={styles.qstTitle}>
          <img src="../image/mjec3ne5-19gk4dc.png" className={styles.about} />
          <p className={styles.stillHaveAQuestion}>Still have a question?</p>
        </div>
        <p className={styles.ifYouDidNtFindYourAn}>
          If you did’nt find your answer, feel free to reach out.
        </p>
        <p className={styles.subheading2}>Contact us</p>
      </div>
      <div className={styles.footer}>
        <div className={styles.autoWrapper3}>
          <div className={styles.logoFooterText}>
            <img
              src="../image/mjec3ne5-xp5g25n.png"
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
                <p className={styles.text3}>Overview</p>
                <p className={styles.text3}>Features</p>
              </div>
            </div>
            <div className={styles.aFooterLinksColumn}>
              <p className={styles.heading}>Company</p>
              <div className={styles.footerLinks}>
                <p className={styles.text3}>About us</p>
                <p className={styles.text3}>Contact</p>
              </div>
            </div>
            <div className={styles.aFooterLinksColumn}>
              <p className={styles.heading}>Legal</p>
              <div className={styles.footerLinks}>
                <p className={styles.text3}>Terms</p>
                <p className={styles.text3}>Privacy</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerIncSocials}>
          <p className={styles.footerText}>© 2026 Night Crawlers.inc</p>
          <div className={styles.socials}>
            <img src="../image/mjec3ne5-tebzyxq.png" className={styles.instagram} />
            <img src="../image/mjec3ne5-92zjkca.png" className={styles.instagram} />
            <img src="../image/mjec3ne5-5iu9rgm.png" className={styles.instagram} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
