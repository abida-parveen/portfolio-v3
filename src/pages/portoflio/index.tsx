import type React from "react";
import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import type { RootState } from "../../state-management/store";
import { clearErrors } from "../../state-management/actions/errors";
import { getHomeData } from "../../state-management/actions/home";
import Header from "../../components/layout/Header";
import Popup from "../../components/general/popup/Popup";
import PortfolioPopup from "../../components/main/home/Portfolio/PortfolioPopup";
import AllPortfolio from "../../components/main/portfolio/AllPortfolio";
import type HomeDataType from "../../models/state-types/HomeDataType";
import type PortfolioDataType from "../../models/state-types/PortfolioDataType";

interface PortfolioPropsType {
  clearErrors: () => void;
  getHomeData: () => void;
  homeData?: HomeDataType;
}

const Portfolio: React.FC<PortfolioPropsType> = (props) => {
  const { clearErrors, getHomeData, homeData } = props;

  const [portfolioPopupShow, setPortfolioPopupShow] = useState<boolean>(false);
  const [portfolioPopupData, setPortfolioPopupData] =
    useState<PortfolioDataType | null>(null);

  const handlePortfolioPopup = () => {
    setPortfolioPopupShow((prev) => !prev);
  };

  const handlePortfolioPopupData = (data: PortfolioDataType) => {
    setPortfolioPopupData(data);
  };

  const portfolioPopup = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getHomeData();
    return () => {
      clearErrors();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflowY = portfolioPopupShow ? "hidden" : "auto";
  }, [portfolioPopupShow]);
  return (
    <div>
      <div ref={portfolioPopup}>
        {portfolioPopupShow && (
          <Popup handlePopup={handlePortfolioPopup}>
            <PortfolioPopup portfolioPopupData={portfolioPopupData} />
          </Popup>
        )}
      </div>
      <Header />
      <AllPortfolio
        portfolio={homeData?.portfolioData}
        handlePortfolioPopup={handlePortfolioPopup}
        handlePortfolioPopupData={handlePortfolioPopupData}
      />
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  errors: state.errors,
  homeData: state.homeData,
});
export default connect(mapStateToProps, { clearErrors, getHomeData })(
  Portfolio
);

