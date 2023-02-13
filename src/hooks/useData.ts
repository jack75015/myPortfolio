import { dataFrench } from "../utils/Translation/French/dataFrench";
import { DataTranslationType, DataType, Language } from "../utils/types";
import { dataEnglish } from "../utils/Translation/English/dataEnglish";
import LanguageContext from "../containers/Languages";
import { useContext } from "react";

export const twitterLink = "https://twitter.com/JackFurieux";
export const githubLink = "https://github.com/jack75015";
export const linkedinLink = "https://www.linkedin.com/in/jacques-weber/";

export const data = (dataTranslation: DataTranslationType): DataType => {
  return {
    projectsData: [
      {
        title: "Paris Blockchain Society",
        date: "2023",
        link: "https://www.linkedin.com/company/paris-blockchain-society/",
        imagePath: "images/projects/pbs.jpg",
        descriptions:
          dataTranslation.projectsDataDescription["Paris Blockchain Society"],
      },
      {
        title: "Panthéon Business Club",
        date: "2022",
        link: "https://www.pantheonbusinessclub.com/",
        imagePath: "images/projects/pbc.jpg",
        descriptions:
          dataTranslation.projectsDataDescription["Panthéon Business Club"],
      },
      {
        title: "Wecreatures",
        date: "2022",
        link: "https://www.wecreatures.com/",
        imagePath: "images/projects/wecreatures.jpg",
        descriptions: dataTranslation.projectsDataDescription["Wecreatures"],
      },
      {
        title: "Furious Alpha Gym Club",
        date: "2021",
        link: "https://furiousalphagymclub.com/",
        imagePath: "images/projects/fagc.jpg",
        descriptions:
          dataTranslation.projectsDataDescription["Furious Alpha Gym Club"],
      },
      {
        title: "The Mona Lana",
        date: "2021",
        link: "https://opensea.io/collection/themonalana",
        imagePath: "images/projects/themonalana.jpg",
        descriptions: dataTranslation.projectsDataDescription["The Mona Lana"],
      },
    ],
    experiencesData: [
      {
        title: "Neofacto Paris",
        job: "Blockchain Senior Developer",
        date: "2020 - 2023",
        link: "https://www.neofacto.com/",
        imagePath: "images/experiences/neofacto.jpg",
        missions: [
          {
            title: "Ministère des transports du Luxembourg",
            date: "2023",
            description:
              dataTranslation.experiencesDataMissionsDescription[
                "Ministère des transports du Luxembourg"
              ],
          },
          {
            title: "Banque de France",
            date: "2022",
            description:
              dataTranslation.experiencesDataMissionsDescription[
                "Banque de France"
              ],
          },
          {
            title: "Mavryk Finance",
            date: "2022",
            description:
              dataTranslation.experiencesDataMissionsDescription[
                "Mavryk Finance"
              ],
          },
          {
            title: "Forge",
            date: "2020 - 2022",
            description:
              dataTranslation.experiencesDataMissionsDescription["Forge"],
          },
        ],
      },
      {
        title: "ECE Paris",
        date: "2022 - 2023",
        job: "Professor Workshop Blockchain",
        link: "https://www.ece.fr/",
        imagePath: "images/experiences/ece.jpg",
        missions: [
          {
            title: "Professeur Master OCRES Workshop Blockchain",
            description:
              "En tant que professeur de travaux pratiques blockchain, j'ai enseigné à des élèves de dernières années de master spécialisée en IOT à l'école d'ingénieurs ECE Paris. Nous avons abordé des sujets varié comme : Blockchain et Transactions / Smart Contracts (ETH) / Tokens / NFT",
          },
        ],
      },
      {
        title: "Sopra Steria",
        date: "2018 - 2020",
        job: "Blockchain Junior Developer",
        link: "https://www.soprasteria.fr/",
        imagePath: "images/experiences/sopraSteria.jpg",
        missions: [
          {
            title: "Projet EasyId",
            description:
              "Application complète (Web app + Android) permettant la gestion des identités dans le respect des réglementations GDPR et PSD2 (Ethereum)",
          },
          {
            title: "Projet DGDDI",
            description:
              "Application Web de gestion de la traçabilité pour les douanes françaises (Hyperledger Fabric)",
          },
          {
            title: "Formation Blockchain",
            description:
              "Co-réalisation de formations Blockchain Ethereum/Hyperledger fabric. Cours pour la Sopra Steria Academy / écoles d'ingénieurs / écoles de commerce",
          },
        ],
      },
    ],
    hobbiesData: [
      {
        image: "images/hobbies/judo.png",
        description: dataTranslation.hobbiesData["Judo"],
      },
      {
        image: "images/hobbies/cook.png",
        description: dataTranslation.hobbiesData["cook"],
      },
      {
        image: "images/hobbies/chess.png",
        description: dataTranslation.hobbiesData["chess"],
      },
    ],
    skillsData: [
      {
        image: "images/skills/eth.png",
        description: dataTranslation.skillsDataDescription["eth"],
      },
      {
        image: "images/skills/tezos.png",
        description: dataTranslation.skillsDataDescription["tezos"],
      },
      {
        image: "images/skills/blockchain.png",
        description: dataTranslation.skillsDataDescription["blockchain"],
      },
      {
        image: "images/skills/react.png",
        description: dataTranslation.skillsDataDescription["react"],
      },
      {
        image: "images/skills/aws.png",
        description: dataTranslation.skillsDataDescription["aws"],
      },
      {
        image: "images/skills/code.png",
        description: dataTranslation.skillsDataDescription["code"],
      },
    ],
    homeData: dataTranslation.homeData,
    divider: dataTranslation.divider,
  };
};

export const useData = (): DataType => {
  const { language } = useContext(LanguageContext);
  console.log(language);

  switch (language) {
    case Language.FR:
      return data(dataFrench);
    case Language.EN:
      return data(dataEnglish);
    default:
      return data(dataEnglish);
  }
};
