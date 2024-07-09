import React from "react";
import styles from "./rewardPage.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import instagramLogo from "../../assets/reward/Follow Us On Instagram 1.png"
import product_1 from "../../assets/reward/tlec001_510x.progressive.png";
import product_2 from "../../assets/reward/ccd001-1_66eb95ca-6c04-4cee-9d65-b4cc3943246c_492x.progressive.png";
import product_3 from "../../assets/reward/creative1_492x.progressive 1 (1).png";
import makeupkit from "../../assets/reward/makeup_kit-1 1.png"

// Import Swiper styles
import 'swiper/css';
import RewardSlider from "../../components/reward/RewardSlider";


export default function RewardPage() {
  return (
    <div className={`flex-col-center ${styles.RewardPage}`}>

      <div className={`flex-col-center ${styles.reward_page_heading}`}>
        <h1>Congratulations!</h1>
        <h2>your score is <em>18</em></h2>
      </div>

      <div className={`flex-col-center ${styles.context_text}`}>
        <p className="txt2">You’ve just mastered the Colorbar Cosmetics Memory Card Game! 🥳</p>
        <p className="txt2">Your 🎉 <em><strong>50 loyalty points</strong></em> are now shining brightly in your account. Head over to the account page on our website to see your points.</p>
        <p className="txt2">The excitement doesn’t stop here—<em><strong>stay tuned as we reveal the 👑 top 10 winners</strong></em> on Instagram!</p>
        <p className="txt2">Thanks for playing and keep enjoying the fun with Colorbar Cosmetics!</p>
      </div>

      <div className={`flex-row-center ${styles.insta_img}`}>
        <img src={instagramLogo} alt="" />
      </div>

      <div className={styles.main_img}>
        <img src={makeupkit} alt="" />
      </div>

      <div className={`flex-col-center ${styles.product_slider}`}>
        <h2>Check Out Our bestsellers</h2>

        <div className={`flex-row-center ${styles.product_box_wrapper}`}>
          <Swiper 
             spaceBetween={100}  // Space between slides
             slidesPerView={3}  // Number of slides visible at once
             navigation      
            //  loop 
            >
          <SwiperSlide>
          <div className={styles.product_card}>
            <div className={styles.card_img}>
              <img src={product_1} alt="" />
            </div>
            <div className={styles.product_card_text}>
              <p>Timeless lift mi...</p>
              <p>₹799 <span>₹799</span> <span>20%</span></p>
              <button>+ Add to bag</button>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className={styles.product_card}>
            <div className={styles.card_img}>
              <img src={product_2} alt="" />
            </div>
            <div className={styles.product_card_text}>
              <p>Cellular Dry O...</p>
              <p>₹1299</p>
              <button>+ Add to bag</button>
            </div>
          </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className={styles.product_card}>
            <div className={styles.card_img}>
              <img src={product_3} alt="" />
            </div>
            <div className={styles.product_card_text}>
              <p>Sexy Twosom </p>
              <p>₹799 <span>₹799</span> <span>20%</span></p>
              <button>+ Add to bag</button>
            </div>
          </div>
          </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div>

        <RewardSlider />
      </div>

      <button>Home</button>
    </div>
  );
}
