import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.contactUs}>
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
              src="../image/mjea4b1c-l9uec8w.png"
              className={styles.shoppingCart}
            />
          </div>
          <div className={styles.buttonLogIn2}>
            <img src="../image/mjea4b1c-sxj9n98.png" className={styles.customer} />
          </div>
        </div>
      </div>
      <img src="../image/mjea4b0i-p3iwoy1.svg" className={styles.vector1} />
      <div className={styles.autoWrapper2}>
        <img
          src="../image/mjea4b1c-dffiij7.png"
          className={styles.nightCrawlersLogoWhi}
        />
        <div className={styles.headingAndSupporting}>
          <div className={styles.headingAndSubheading}>
            <p className={styles.subheading}>Contact us</p>
            <p className={styles.heading}>Chat to our friendly team</p>
          </div>
          <p className={styles.supportingText}>
            We’d love to hear from you. Please fill out this form or shoot us an
            email.
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.row}>
            <div className={styles.aContactText}>
              <img src="../image/mjea4b0g-1pnnjbi.svg" className={styles.mail} />
              <div className={styles.textAndSupportingTex}>
                <p className={styles.text}>Email</p>
                <p className={styles.supportingText2}>
                  Our friendly team is here to help.
                </p>
              </div>
              <p className={styles.text2}>help@nightcrawlers.com</p>
            </div>
            <div className={styles.aContactText}>
              <img src="../image/mjea4b0i-v996zyx.svg" className={styles.mail} />
              <div className={styles.textAndSupportingTex}>
                <p className={styles.text}>Live chat</p>
                <p className={styles.supportingText2}>
                  Our friendly team is here to help.
                </p>
              </div>
              <p className={styles.text2}>Start new chat</p>
            </div>
          </div>
          <div className={styles.aContactText2}>
            <img src="../image/mjea4b0i-o0l7myy.svg" className={styles.mail} />
            <div className={styles.textAndSupportingTex}>
              <p className={styles.text}>Phone</p>
              <p className={styles.supportingText2}>Mon-Fri from 8am to 5pm.</p>
            </div>
            <p className={styles.text2}>+1 (555) 000-0000</p>
          </div>
        </div>
        <div className={styles.form}>
          <div className={styles.formFields}>
            <div className={styles.row2}>
              <div className={styles.inputWithLabel}>
                <p className={styles.label}>First name</p>
                <div className={styles.content2}>
                  <p className={styles.text3}>First name</p>
                </div>
              </div>
              <div className={styles.inputWithLabel}>
                <p className={styles.label}>Last name</p>
                <div className={styles.content2}>
                  <p className={styles.text3}>Last name</p>
                </div>
              </div>
            </div>
            <div className={styles.inputWithLabel2}>
              <p className={styles.label}>Email</p>
              <div className={styles.content2}>
                <p className={styles.text3}>you@gmail.com</p>
              </div>
            </div>
            <div className={styles.inputWithLabel3}>
              <p className={styles.label}>Message</p>
              <div className={styles.input} />
            </div>
            <div className={styles.checkbox}>
              <div className={styles.aCheckboxBase} />
              <p className={styles.text6}>
                <span className={styles.text4}>
                  You agree to our friendly&nbsp;
                </span>
                <span className={styles.text5}>privacy policy</span>
                <span className={styles.text4}>.</span>
              </p>
            </div>
          </div>
          <div className={styles.aButtonBase}>
            <p className={styles.text7}>Send message</p>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.autoWrapper3}>
          <div className={styles.logoFooterText}>
            <img
              src="../image/mjea4b1c-kt3komz.png"
              className={styles.nightCrawlersLogoBla}
            />
            <p className={styles.getYourFavoriteMeals}>
              Get your favorite meals delivered fast, fresh, and right to your door.
            </p>
          </div>
          <div className={styles.links}>
            <div className={styles.aFooterLinksColumn}>
              <p className={styles.heading2}>Product</p>
              <div className={styles.footerLinks}>
                <p className={styles.text8}>Overview</p>
                <p className={styles.text8}>Features</p>
              </div>
            </div>
            <div className={styles.aFooterLinksColumn}>
              <p className={styles.heading2}>Company</p>
              <div className={styles.footerLinks}>
                <p className={styles.text8}>About us</p>
                <p className={styles.text8}>Contact</p>
              </div>
            </div>
            <div className={styles.aFooterLinksColumn}>
              <p className={styles.heading2}>Legal</p>
              <div className={styles.footerLinks}>
                <p className={styles.text8}>Terms</p>
                <p className={styles.text8}>Privacy</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerIncSocials}>
          <p className={styles.footerText}>© 2026 Night Crawlers.inc</p>
          <div className={styles.socials}>
            <img src="../image/mjea4b1c-n8pga6t.png" className={styles.instagram} />
            <img src="../image/mjea4b1c-k3ti7s8.png" className={styles.instagram} />
            <img src="../image/mjea4b1c-5ek3ara.png" className={styles.instagram} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
