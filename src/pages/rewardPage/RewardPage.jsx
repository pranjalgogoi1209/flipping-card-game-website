import React from "react";
import styles from "./rewardPage.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import instagramLogo from "../../assets/reward/Follow Us On Instagram 1.png";
import product_1 from "../../assets/reward/tlec001_510x.progressive.png";
import product_2 from "../../assets/reward/ccd001-1_66eb95ca-6c04-4cee-9d65-b4cc3943246c_492x.progressive.png";
import product_3 from "../../assets/reward/creative1_492x.progressive 1 (1).png";
import makeupkit from "../../assets/reward/makeup_kit-1 1.png";
import logo from "./../../assets/header/logo.png";
import labelIcon from "../../assets/reward/label.png";

// Import Swiper styles
import "swiper/css";
import RewardSlider from "../../components/reward/RewardSlider";
import BgIcons from "../../components/bgIcons/BgIcons";

const products = [
  {
    img: product_1,
    name: "Anti Acne & Breakout Facewash",
    price: 550,
    oldPrice: 999,
    offer: 20,
    isNew: true,
  },
  {
    img: product_2,
    name: "Anti Acne & Breakout Facewash",
    price: 550,
    oldPrice: 999,
    offer: 20,
    isNew: false,
  },
  {
    img: product_3,
    name: "Anti Acne & Breakout Facewash",
    price: 650,
    oldPrice: 999,
    offer: 40,
    isNew: true,
  },
  {
    img: product_1,
    name: "Anti Acne & Breakout Facewash",
    price: 1250,
    oldPrice: 999,
    offer: 30,
    isNew: false,
  },
  {
    img: product_1,
    name: "Anti Acne & Breakout Facewash",
    price: 950,
    oldPrice: 99,
    offer: 10,
    isNew: true,
  },
  {
    img: product_1,
    name: "Anti Acne & Breakout Facewash",
    price: 550,
    oldPrice: 999,
    offer: 20,
    isNew: true,
  },
];

export default function RewardPage({ isLaptopView, score }) {
  return (
    <div className={`flex-col-center ${styles.RewardPage}`}>
      {/* logo */}
      {isLaptopView && (
        <div className={styles.logoContainer}>
          <img src={logo} alt="logo" />
        </div>
      )}

      <div className={`flex-col-center ${styles.reward_page_heading}`}>
        <h1>Congratulations!</h1>
        <h3>
          <span style={{ fontWeight: "500" }}>YOUR SCORE IS</span>{" "}
          <em>
            <strong>{score}</strong>
          </em>
        </h3>
      </div>

      <div className={`flex-col-center ${styles.context_text}`}>
        <p className="txt2">
          You’ve just mastered the Colorbar Cosmetics Memory Card Game! 🥳
        </p>
        <p className="txt2">
          Your 🎉{" "}
          <em>
            <strong>50 loyalty points</strong>
          </em>{" "}
          are now shining brightly in your account. Head over to the account
          page on our website to see your points.
        </p>
        <p className="txt2">
          The excitement doesn’t stop here—
          <em>
            <strong>stay tuned as we reveal the 👑 top 10 winners</strong>
          </em>{" "}
          on Instagram!
        </p>
        <p className="txt2">
          Thanks for playing and keep enjoying the fun with Colorbar Cosmetics!
        </p>
      </div>

      <div className={`flex-row-center ${styles.insta_img}`}>
        <img src={instagramLogo} alt="instagram" />
      </div>

      <div className={`flex-row-center ${styles.main_img}`}>
        <img src={makeupkit} alt="makeup" />
      </div>

      <div className={`flex-col-center ${styles.product_slider}`}>
        <h3>Check Out Our Bestsellers</h3>
        {/* slider */}
        <Swiper
          spaceBetween={50}
          slidesPerView={5}
          breakpoints={{
            0: {
              // mobile
              slidesPerView: 3,
              spaceBetween: 10,
            },
            480: {
              // tablet
              slidesPerView: 3,
              spaceBetween: 20,
            },
            991: {
              // laptop
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className={`flex-row-center ${styles.swiper}`}
        >
          {/* left arrow */}
          <div className={`flex-row-center ${styles.leftArrow}`}>
            <img src="" alt="" />
          </div>
          {/* right arrow */}
          <div className={`flex-row-center ${styles.rightArrow} `}>
            <img src="" alt="" />
          </div>

          {products.map((item, idx) => (
            <SwiperSlide
              className={`flex-col-center ${styles.swiperSlide}`}
              key={idx}
            >
              <div className={`flex-row-center ${styles.card_img}`}>
                {item.isNew && (
                  <span>
                    <img src={labelIcon} alt="label new" />
                  </span>
                )}

                <div className={`flex-row-center ${styles.imgContainer}`}>
                  <img src={item.img} alt="makeup-kit" />
                </div>
              </div>
              <div className={`flex-col-center ${styles.product_card_text}`}>
                <p>TIMELESS LIFT MI jklsjfkldjsfd</p>
                <div>
                  <strong>₹799</strong>{" "}
                  <del className={styles.oldPrice}>₹799</del>{" "}
                  <span className={styles.discountTxt}>20%</span>
                </div>
                <button className={styles.addCart}>ADD TO CART</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <button>Home</button>
      {isLaptopView && <BgIcons />}
    </div>
  );
}
