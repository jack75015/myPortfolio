export type SkillType = {
  image: string;
  description: string;
};

export type CardProjectType = {
  title: string;
  date: string;
  imagePath: string;
  link: string;
  descriptions: string[];
};

export type MissionType = {
  title: string;
  date?: string;
  description: string;
};

export type ExperienceType = {
  title: string;
  date: string;
  imagePath: string;
  link: string;
  job: string;
  missions: MissionType[];
};

export type DividerType = {
  title?: string;
};

export type SectionType = {
  children: JSX.Element;
};

export type DataType = {
  homeData: string[];
  projectsData: CardProjectType[];
  experiencesData: ExperienceType[];
  skillsData: SkillType[];
  hobbiesData: SkillType[];
  divider: any;
};

export type DataTranslationType = {
  projectsDataDescription: any;
  experiencesDataMissionsDescription: any;
  hobbiesData: any;
  homeData: string[];
  skillsDataDescription: any;
  divider: any;
};

export const enum Language {
  FR = "FR",
  EN = "EN",
}
