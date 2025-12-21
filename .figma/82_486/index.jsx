import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.explore}>
      <div className={styles.autoWrapper2}>
        <img
          src="../image/mje9iyqx-joay82k.png"
          className={styles.nightCrawlersLogoWhi}
        />
        <div className={styles.searchAddress}>
          <div className={styles.input}>
            <p className={styles.text}>Search here</p>
            <div className={styles.buttonSubscribe}>
              <img src="../image/mje9iyqx-gl6il7k.png" className={styles.search} />
            </div>
          </div>
          <div className={styles.moreButton}>
            <img src="../image/mje9iyqx-wqfx3za.png" className={styles.search} />
            <p className={styles.selectAddress}>Select address</p>
            <div className={styles.autoWrapper}>
              <img
                src="../image/mje9iyqx-udwpnrg.png"
                className={styles.chevronDown}
              />
            </div>
          </div>
        </div>
        <div className={styles.categoryTitle}>
          <p className={styles.heading}>Explore Categories</p>
          <div className={styles.exploreCategories}>
            <div className={styles.vector}>
              <img
                src="../image/mje9iyqx-bmcq7sk.png"
                className={styles.fastMovingConsumerGo}
              />
              <p className={styles.groceries}>Groceries</p>
            </div>
            <div className={styles.vector2}>
              <img
                src="../image/mje9iyqx-p0yqyxb.png"
                className={styles.pharmacyShop}
              />
              <p className={styles.groceries}>Pharmacy</p>
            </div>
            <div className={styles.vector3}>
              <img
                src="../image/mje9iyqx-pbxdt71.png"
                className={styles.discoBall}
              />
              <p className={styles.groceries}>Clubs/Lounges</p>
            </div>
            <div className={styles.vector4}>
              <img src="../image/mje9iyqx-ltj5muf.png" className={styles.taco} />
              <p className={styles.food}>Food</p>
            </div>
            <div className={styles.vector5}>
              <img src="../image/mje9iyqx-cnp1t8z.png" className={styles.taco} />
              <p className={styles.drinks}>Drinks</p>
            </div>
          </div>
          <div className={styles.menuNav}>
            <p className={styles.home}>Home</p>
            <p className={styles.home}>Contact Us</p>
            <p className={styles.home}>Vendors</p>
            <p className={styles.home}>FAQs</p>
          </div>
        </div>
        <div className={styles.navButtons}>
          <div className={styles.buttonLogIn}>
            <img
              src="../image/mje9iyqx-bpvjvvw.png"
              className={styles.shoppingCart}
            />
          </div>
          <div className={styles.buttonLogIn2}>
            <img src="../image/mje9iyqx-gayytpb.png" className={styles.search} />
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.illustration}>
          <div className={styles.autoWrapper3}>
            <div className={styles.backgroundCircle}>
              <img
                src="../image/mje9iyqy-vilva4q.png"
                className={styles.location}
              />
            </div>
            <div className={styles.circle} />
          </div>
          <div className={styles.autoWrapper4}>
            <div className={styles.circle2} />
            <div className={styles.circle3} />
            <div className={styles.circle4} />
          </div>
        </div>
        <div className={styles.textAndSupportingTex}>
          <p className={styles.text2}>No address found</p>
          <p className={styles.supportingText}>
            Your search did not match any address. Please try again.
          </p>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.autoWrapper5}>
          <div className={styles.logoFooterText}>
            <img
              src="../image/mje9iyqx-y0mt0bd.png"
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
                <p className={styles.text3}>Overview</p>
                <p className={styles.text3}>Features</p>
              </div>
            </div>
            <div className={styles.aFooterLinksColumn}>
              <p className={styles.heading2}>Company</p>
              <div className={styles.footerLinks}>
                <p className={styles.text3}>About us</p>
                <p className={styles.text3}>Contact</p>
              </div>
            </div>
            <div className={styles.aFooterLinksColumn}>
              <p className={styles.heading2}>Legal</p>
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
            <img src="../image/mje9iyqx-n3nbvxv.png" className={styles.instagram} />
            <img src="../image/mje9iyqx-e4ivvqd.png" className={styles.instagram} />
            <img src="../image/mje9iyqx-5dvfqsj.png" className={styles.instagram} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
