import type { CarouselItemType } from "../component-types/CarouselItemType";

export default interface PortfolioDataType {
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
  carousel: CarouselItemType[];
  skills: string[];
};
