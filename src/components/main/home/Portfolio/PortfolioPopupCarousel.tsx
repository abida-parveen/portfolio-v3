import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide, type SwiperRef } from "swiper/react";
import styles from "./popup-carousel.module.css";
import right from "/assets/icons/right.svg";
import left from "/assets/icons/left-light.svg";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import type { CarouselItemType } from "../../../../models/component-types/CarouselItemType";
import type { swiperStepType } from "../../../../models/component-types/SwiperStepType";

interface PortfolioPopupCarouselPropType {
  carouselData?: CarouselItemType[];
}

const PortfolioPopupCarousel: React.FC<PortfolioPopupCarouselPropType> = (
  props
) => {
  const { carouselData } = props;
  const [imageLoading, setImageLoading] = useState(false);
  const [beginning, setBeginning] = useState(true);
  const [endding, setEndding] = useState(false);
  const swiperRef = useRef<SwiperRef>(null);

  const handleClick = (step: swiperStepType) => {
    step === "prev"
      ? swiperRef.current?.swiper.slidePrev()
      : swiperRef.current?.swiper.slideNext();
  };
  return (
    <div className={`${styles.portfolio_popup_swiper_container}`}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "20px",
        }}
      >
        <div className={`${styles.swiper_button_container}`}>
          <div
            className={`hover_size ${styles.swiper_button} ${
              beginning && styles.swiper_end
            }`}
            onClick={() => handleClick("prev")}
          >
            <img src={left} alt="left icon" />
          </div>
          <div
            className={`hover_size ${styles.swiper_button} ${
              endding && styles.swiper_end
            }`}
            onClick={() => handleClick("next")}
          >
            <img src={right} alt="right icon" />
          </div>
        </div>
      </div>
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: `${styles.swiper_pagination}`,
          type: "bullets",
        }}
        onBeforeInit={(swiper) => {
          if (swiperRef.current) swiperRef.current.swiper = swiper;
        }}
        onSlideChange={(current) => {
          setBeginning(current.isBeginning);
          setEndding(current.isEnd);
        }}
        className={`${styles.portfolio_popup_swiper}`}
      >
        {carouselData?.map((item, index) => (
          <SwiperSlide
            key={index}
            className={`${styles.portfolio_popup_swiper_slide}`}
          >
            <div className={`${styles.portfolio_popup_swiper_img_container}`}>
              <img
                className={`${styles.portfolio_popup_swiper_img} ${
                  !imageLoading && styles.image_loader
                }`}
                src={item.img}
                alt=""
                onLoad={() => setImageLoading(true)}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PortfolioPopupCarousel;
