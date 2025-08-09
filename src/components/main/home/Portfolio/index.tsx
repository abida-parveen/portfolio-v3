import React, { useRef, useState } from "react";
import styles from "./portfolio.module.css";
import link from "/assets/icons/link.svg";
import { Swiper, SwiperSlide, type SwiperRef } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import right_dark from "/assets/icons/chevron-right-dark.svg";
import left_dark from "/assets/icons/left-dark.svg";
import right_light from "/assets/icons/chevron-right-purple.svg";
import left_light from "/assets/icons/left-light.svg";
import arrow from "/assets/icons/arrow.svg";
import darkArrow from "/assets/icons/arrow-dark.svg";
import { connect } from "react-redux";
import { Link } from "react-router";
import type { ThemeModeType } from "../../../../models/state-types/ThemeModeType";
import type { RootState } from "../../../../state-management/store";
import type PortfolioDataType from "../../../../models/state-types/PortfolioDataType";
import type { swiperStepType } from "../../../../models/component-types/SwiperStepType";

interface PortfolioPropType {
  handlePortfolioPopup: () => void;
  handlePortfolioPopupData: (item: PortfolioDataType) => void;
  themeMode?: ThemeModeType;
  portfolio: PortfolioDataType[] | undefined;
}

const Portfolio: React.FC<PortfolioPropType> = (props) => {
  const {
    handlePortfolioPopup,
    handlePortfolioPopupData,
    portfolio,
    themeMode,
  } = props;

  const swiperRef = useRef<SwiperRef>(null);
  const [beginning, setBeginning] = useState(true);
  const [endding, setEndding] = useState(false);

  const handleClick = (step: swiperStepType) => {
    step === "prev"
      ? swiperRef.current?.swiper.slidePrev()
      : swiperRef.current?.swiper.slideNext();
  };

  const handlePopup = (item: PortfolioDataType) => {
    handlePortfolioPopupData(item);
    handlePortfolioPopup();
  };

  const sliderSettings = {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
      slidesPerGroup: 1,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
    },
  };
  return (
    <section id="portfolio">
      <div className={`container`}>
        <div className={`${styles.portfolio_stepper_container}`}>
          <div>
            <h5>My Works</h5>
            <h2>Freatured Portfolios</h2>
          </div>
          <div className={`${styles.swiper_button_container}`}>
            <div
              className={`hover_size ${styles.swiper_button} ${
                beginning && styles.swiper_end
              }`}
              onClick={() => handleClick("prev")}
            >
              <img
                src={themeMode === "dark" ? left_dark : left_light}
                alt="left icon"
              />
            </div>
            <div
              className={`hover_size ${styles.swiper_button} ${
                endding && styles.swiper_end
              }`}
              onClick={() => handleClick("next")}
            >
              <img
                src={themeMode === "dark" ? right_dark : right_light}
                alt="right icon"
              />
            </div>
          </div>
        </div>
        <div className={`${styles.seeAll_link_container}`}>
          <Link to="/portfolio" className={`${styles.seeAll_link}`}>
            <div>See all projects</div>
            <div className={`${styles.arrow_img_container}`}>
              <img
                className={`${styles.seeAll_link_arrow}`}
                src={themeMode === "dark" ? darkArrow : arrow}
                alt="..."
              />
            </div>
          </Link>
        </div>
        <div>
          <Swiper
            ref={swiperRef}
            breakpoints={sliderSettings}
            loop={false}
            // loopFillGroupWithBlank={true}
            onBeforeInit={(swiper) => {
              if (swiperRef.current) swiperRef.current.swiper = swiper;
            }}
            onSlideChange={(current) => {
              setBeginning(current.isBeginning);
              setEndding(current.isEnd);
            }}
          >
            {portfolio?.map((item) => (
              <SwiperSlide key={item.id} onClick={() => handlePopup(item)}>
                <div className={`hover_color ${styles.portfolio_swiper}`}>
                  <div className={`${styles.portfolio_thumbnail_container}`}>
                    <img
                      src={item.image}
                      alt="project thumbnail"
                      className={`${styles.portfolio_thumbnail}`}
                    />
                  </div>
                  <div className={`${styles.portfolio_content}`}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <h4 className={`${styles.portfolio_title}`}>
                        {item.title}
                      </h4>
                      {item?.link && (
                        <Link to={item?.link} target="_blank">
                          <img src={link} alt="link icon" />
                        </Link>
                      )}
                    </div>
                    <div className={`${styles.portfolio_details}`}>
                      <div className={`${styles.portfolio_details_buildWith}`}>
                        Build with <span>{item.companyBuiltWith}</span> team
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state: RootState) => ({
  errors: state.errors,
  themeMode: state.themeMode,
});
export default connect(mapStateToProps)(Portfolio);
