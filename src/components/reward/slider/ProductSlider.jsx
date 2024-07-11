import React ,{useState,useEffect} from "react";
import styles from "./productSlider.module.css";
import { Swiper,SwiperSlide } from "swiper/react";
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
import "swiper/css";

const ProductSlider=({products})=>{
    const [swiper, setSwiper] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (swiper) {
      console.log(swiper);
    }
  }, [swiper]);

  const handleLeftArrowClick = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleRightArrowClick = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const handleSlideChange=(slide)=>{
    setIsBeginning(slide.isBeginning);
    setIsEnd(slide.isEnd);
  }


    return <div className={`flex-col-center ${styles.product_slider}`}>
        <h3>Check Out Our Bestsellers</h3>
        <div className={`flex-row-center ${styles.swiperParent}`}>
          <div
            className={`flex-row-center ${styles.leftArrow}`}
            onClick={handleLeftArrowClick}
          >
            {/* <img src={leftArrow} alt="left arrow" /> */}
          <IoIosArrowBack  className={`${styles.leftIcon} ${isBeginning ? styles.disabled :""}`} />
          </div>
          <div
            className={`flex-row-center ${styles.rightArrow}`}
            onClick={handleRightArrowClick}
          >
            {/* <img src={rightArrow} alt="right arrow" /> */}
            <IoIosArrowForward className={`${styles.rightIcon} ${isEnd ? styles.disabled : ""}`} />
          </div>
          <Swiper
            spaceBetween={50}
            slidesPerView={5}
            breakpoints={{
              0: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              991: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            onSlideChange={handleSlideChange}
            onSwiper={setSwiper}
            className={`flex-row-center ${styles.swiper}`}
          >
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
      </div>
}

export default ProductSlider;