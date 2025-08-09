export type PortfolioCarouselDataType = {
  id: number;
  img: string;
  desc: string;
  title: string;
};

export type PortfolioProjectType = {
  id: number;
  title: string;
  companyBuiltWith: string;
  desc: string;
  projectColor?: string;
  whatIdid?: string;
  link?: string;
  moreInfoLink?: string;
  projectLogo?: string;
  image: string;
  status: string;
  carousel: PortfolioCarouselDataType[];
  skills: string[];
};

export type swiperStepType = "prev" | "next";