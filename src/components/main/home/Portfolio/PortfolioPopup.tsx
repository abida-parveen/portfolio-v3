import React from "react";
import PortfolioPopupCarousel from "./PortfolioPopupCarousel";
import styles from "./portfolio-popup.module.css";
import { Link } from "react-router";
import Clip from "../../../general/Clip";
import type { PortfolioProjectType } from "../../../../types/portfolio.type";

interface PortfolioPopupPropType {
  portfolioPopupData?: PortfolioProjectType | null
}

const PortfolioPopup: React.FC<PortfolioPopupPropType> = (props) => {
  const { portfolioPopupData } = props;

  return (
    <div className={`${styles.portfolio_popup_inner_container}`}>
      <div className={`${styles.portfolio_popup_header}`}>
        <div className={`${styles.portfolio_popup_title}`}>
          {portfolioPopupData?.projectLogo ? (
            <img
              className={`${styles.portfolio_popup_project_logo}`}
              src={portfolioPopupData?.projectLogo}
              alt=""
            />
          ) : (
            portfolioPopupData?.title
          )}
        </div>
      </div>
      <div className={`${styles.portfolio_popup_body}`}>
        <PortfolioPopupCarousel carouselData={portfolioPopupData?.carousel} />
        {portfolioPopupData?.companyBuiltWith && (
          <div className={`${styles.portfolio_section_control}`}>
            <div className={`${styles.portfolio_popup_content}`}>
              <span>{portfolioPopupData?.title} </span> was build with{" "}
              {portfolioPopupData?.companyBuiltWith} Team
            </div>
          </div>
        )}
        <div className={`${styles.portfolio_section_control}`}>
          <div className={`${styles.portfolio_popup_content_title}`}>
            About {portfolioPopupData?.title}{" "}
          </div>
          <div className={`${styles.portfolio_popup_content}`}>
            {portfolioPopupData?.desc}
            {portfolioPopupData?.moreInfoLink && (
              <span>
                {" "}
                To know more about it{" "}
                <Link
                  to={portfolioPopupData?.moreInfoLink}
                  target="_blank"
                  className={`${styles.link}`}
                  rel="noopener noreferrer"
                >
                  click here
                </Link>
              </span>
            )}
          </div>
        </div>
        {portfolioPopupData?.whatIdid && (
          <div className={`${styles.portfolio_section_control}`}>
            <div className={`${styles.portfolio_popup_content_title}`}>
              What I did?
            </div>
            <div className={`${styles.portfolio_popup_content}`}>
              {portfolioPopupData?.whatIdid}
            </div>
          </div>
        )}

        <div className={`${styles.portfolio_section_control}`}>
          <div className={`${styles.portfolio_popup_content_title}`}>
            Skills Used
          </div>
          <div className={`${styles.portfolio_popup_skills_container}`}>
            {portfolioPopupData?.skills.map((item) => (
              <Clip value={item} key={item} />
            ))}
          </div>
        </div>
        {portfolioPopupData?.link && (
          <div className={`${styles.portfolio_section_control}`}>
            <div className={`${styles.portfolio_popup_content}`}>
              Visit Website:{" "}
              <a
                className={`${styles.link}`}
                href={portfolioPopupData?.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {portfolioPopupData?.link}
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioPopup;
