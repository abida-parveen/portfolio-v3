import { useEffect, useRef, useState } from "react";
import Header from "../../components/layout/Header";
import Contact from "../../components/main/home/Contact";
import type { RootState } from "../../state-management/store";
import { connect } from "react-redux";
import { clearErrors } from "../../state-management/actions/errors";
import { getHomeData } from "../../state-management/actions/home";
import Popup from "../../components/general/popup/Popup";
import PortfolioPopup from "../../components/main/home/Portfolio/PortfolioPopup";
import Portfolio from "../../components/main/home/Portfolio";
import Services from "../../components/main/home/Services";
import WorkExperience from "../../components/main/home/WorkExperience";
import Education from "../../components/main/home/Education";
import type HomeDataType from "../../models/state-types/HomeDataType";
import type PortfolioDataType from "../../models/state-types/PortfolioDataType";

interface HomePropsType {
  clearErrors: () => void;
  getHomeData: () => void;
  homeData?: HomeDataType;
}

const Home: React.FC<HomePropsType> = (props) => {
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
      <Services services={homeData?.serviceData} />
      <Portfolio
        portfolio={homeData?.portfolioData}
        handlePortfolioPopup={handlePortfolioPopup}
        handlePortfolioPopupData={handlePortfolioPopupData}
      />
      <WorkExperience experience={homeData?.workExperienceData} />
      <Education
        education={homeData?.educationData}
        skills={homeData?.skillsData}
      />
      <Contact contact={homeData?.contactData} />
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  errors: state.errors,
  themeMode: state.themeMode,
  homeData: state.homeData,
});

export default connect(mapStateToProps, { clearErrors, getHomeData })(Home);
