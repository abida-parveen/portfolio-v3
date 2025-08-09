import React from "react";
import styles from "../../home/Portfolio/portfolio.module.css";
import link from "/assets/icons/link.svg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router";
import type { PortfolioProjectType } from "../../../../types/portfolio.type";

interface AllPorfolioPropType {
  handlePortfolioPopup: () => void;
  handlePortfolioPopupData: (item: PortfolioProjectType) => void;
  portfolio?: PortfolioProjectType[];
}

const AllPortfolio: React.FC<AllPorfolioPropType> = (props) => {
  const { handlePortfolioPopup, handlePortfolioPopupData, portfolio } = props;

  const handlePopup = (item: PortfolioProjectType) => {
    handlePortfolioPopupData(item);
    handlePortfolioPopup();
  };

  return (
    <section>
      <div className={`container`}>
        <div className={`${styles.portfolio_stepper_container}`}>
          <div>
            <h5>My Works</h5>
            <h2>Portfolio</h2>
          </div>
        </div>
        <div>
          <div className={`${styles.seeAllPortfolio_container}`}>
            {portfolio?.map((item: PortfolioProjectType) => (
              <div
                key={item?.id}
                className={`hover_color ${styles.portfolio_cards}`}
                onClick={() => handlePopup(item)}
              >
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllPortfolio;
