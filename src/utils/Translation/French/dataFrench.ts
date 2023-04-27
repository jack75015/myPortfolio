import { DataTranslationType } from "../../types";

const projectsDataDescription = {
  "Paris Blockchain Society": ["Smart contract ETH", "NFT génération"],
  "Panthéon Business Club": [
    `Interface Web Bubble + Intégration Web3`,
    "Mint page",
    "Smart contract ETH",
    "NFT génération",
  ],
  Wecreatures: ["Smart contract EVM", "Mint page Wix"],
  "Furious Alpha Gym Club": [
    "Interface Web React",
    "Mint page",
    "Smart contract ETH",
    "NFT génération",
  ],
  "The Mona Lana": ["NFT génération"],
};

const experiencesDataMissionsDescription = {
  Scorechain:
    "Developpement d’une nouvelle feature de gestion de risk scenario sur l’application de monitoring de scorechain. Optimisation de components / résolutions de problèmes techniques / clean code pour la mise en production",

  "Ministère des transports du Luxembourg":
    "Réflexion et mise en place d'un POC pour digitaliser un système de gestion des cartes de conduite de marchandises dangereuses pour le Ministère des Transports luxembourgeois. Une approche sans et avec blockchain (ETH) a été présentée. Front-End en React / Gestion des données via Hasura / Développement back-end de packages NestJS",

  "Banque de France":
    "Développement de nouvelles fonctionnalités sur la solution Blockchain MADRE (ETH). Mise à niveau Angular 11 / Optimisation du nœud GETH Ethereum / Développement back-end avec NestJS",

  "Mavryk Finance":
    "Mise en place d'oracles décentralisés sur Tezos pour la plateforme DeFi mavryk.finance. Prises de décision technique / Développement de smart contracts en Ligo / Développement back-end avec NestJS / Intégration et déploiement continu",

  Forge:
    "Développement d'une solution de tokenisation d'actifs (STO). Développement avec NestJS, ReactJS et GraphQL / Développement de smart contracts en Solidity et SmartPy / Intégration et déploiement continu / Participation active à la prise de décision technique",
};

const hobbiesData = {
  Judo: "Judo",
  cook: "Cuisine",
  chess: "Echecs",
};

const homeData = [
  "Salut 👋",
  "Je m'appelle Jacques WEBER et je suis développeur Fullstack Blockchain.",
  "Ce site a pour but de me présenter, et de vous faire découvrir les différents projets sur lesquels j'ai travaillé. Vous trouverez également mes expériences et comment me contacter 🧑‍💻",
];

const skillsDataDescription = {
  eth: "Smart contracts Ethereum & Dapps.",
  tezos: "Smart contracts Tezos & Dapps.",
  blockchain:
    "Gestion des données via IPFS, y compris la génération d'images et des metadata",
  react: "Application Web Front end (ReactJS) + Back end (NestJS, NodeJS",
  aws: "Déploiement et hébergement d'applications",
  code: "Code orienté qualité/sécurité avec les dernières best practices",
};

const divider = {
  experiences: "Expériences",
  skills: "Compétences",
  projects: "Projets",
  hobbies: "Activités",
};

export const dataFrench: DataTranslationType = {
  projectsDataDescription,
  experiencesDataMissionsDescription,
  hobbiesData,
  homeData,
  skillsDataDescription,
  divider,
};
