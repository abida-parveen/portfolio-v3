import type { ContactDataType } from "./contact.type";
import type { EducationDataType } from "./education.type";
import type { PortfolioProjectType } from "./portfolio.type";
import type { ServiceDataType, SkillsDataType } from "./service.type";
import type { TestimonialsDataType } from "./testimonial.type";
import type { WorkExperienceDataType } from "./workExperience.type";

export type HomeDataType = {
  serviceData: ServiceDataType[];
  portfolioData: PortfolioProjectType[];
  workExperienceData: WorkExperienceDataType[];
  testimonialsData: TestimonialsDataType[];
  educationData: EducationDataType[];
  skillsData: SkillsDataType[];
  contactData: ContactDataType[];
};
