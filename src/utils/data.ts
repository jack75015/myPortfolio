import { CardProjectType, ExperienceType, SkillType } from "./types";

export const twitterLink = "https://twitter.com/JackFurieux";
export const githubLink = "https://github.com/jack75015";
export const linkedinLink = "https://www.linkedin.com/in/jacques-weber/";

export const projectsData: CardProjectType[] = [
  {
    title: "Paris Blockchain Society",
    date: "2023",
    link: "https://www.linkedin.com/company/paris-blockchain-society/",
    imagePath: "images/projects/pbs.jpg",
    descriptions: ["Smart contract ETH", "NFT génération"],
  },
  {
    title: "Pantheon Business Club",
    date: "2022",
    link: "https://www.pantheonbusinessclub.com/",
    imagePath: "images/projects/pbc.jpg",
    descriptions: [
      "Interface Web Bubble + intégration web3",
      "Mint page",
      "Smart contract ETH",
      "NFT génération",
    ],
  },
  {
    title: "Wecreatures",
    date: "2022",
    link: "https://www.wecreatures.com/",
    imagePath: "images/projects/wecreatures.jpg",
    descriptions: ["Smart contract EVM", "Mint page Wix"],
  },
  {
    title: "Furious Alpha Gym Club",
    date: "2021",
    link: "https://furiousalphagymclub.com/",
    imagePath: "images/projects/fagc.jpg",
    descriptions: [
      "Interface Web React",
      "Mint page",
      "Smart contract ETH",
      "NFT génération",
    ],
  },
  {
    title: "The Mona Lana",
    date: "2021",
    link: "https://opensea.io/collection/themonalana",
    imagePath: "images/projects/themonalana.jpg",
    descriptions: ["NFT génération"],
  },
];

export const experiencesData: ExperienceType[] = [
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
          "Réflexion et mise en place d'un POC pour digitaliser un système de gestion des cartes de conduite de marchandises dangereuses pour le Ministère des Transports luxembourgeois. Une approche sans et avec blockchain (ETH) a été présentée. Front-End en React / Gestion des données via Hasura / Développement back-end de packages NestJS",
      },
      {
        title: "Banque de France",
        date: "2022",
        description:
          "Développement de nouvelles fonctionnalités sur la solution Blockchain MADRE (ETH). Mise à niveau Angular 11 / Optimisation du nœud GETH Ethereum / Développement back-end avec NestJS",
      },
      {
        title: "Mavryk Finance",
        date: "2022",
        description:
          "Mise en place d'oracles décentralisés sur Tezos pour la plateforme DeFi mavryk.finance. Prises de décision technique / Développement de smart contracts en Ligo / Développement back-end avec NestJS / Intégration et déploiement continu",
      },
      {
        title: "Forge",
        date: "2020 - 2022",
        description:
          "Développement d'une solution de tokenisation d'actifs (STO). Développement avec NestJS, ReactJS et GraphQL / Développement de smart contracts en Solidity et SmartPy / Intégration et déploiement continu / Participation active à la prise de décision technique",
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
];

export const skillsData: SkillType[] = [
  {
    image: "images/skills/eth.png",
    description: "Smart contracts Ethereum & Dapps.",
  },
  {
    image: "images/skills/tezos.png",
    description: "Smart contracts Tezos & Dapps.",
  },
  {
    image: "images/skills/blockchain.png",
    description:
      "Gestion des données via IPFS, y compris la génération d'images et des metadata",
  },
  {
    image: "images/skills/react.png",
    description:
      "Application Web Front end (ReactJS) + Back end (NestJS, NodeJS",
  },
  {
    image: "images/skills/aws.png",
    description: "Déploiement et hébergement d'applications",
  },
  {
    image: "images/skills/code.png",
    description:
      "Code orienté qualité/sécurité avec les dernières best practices",
  },
];

export const hobbiesData: SkillType[] = [
  {
    image: "images/hobbies/judo.png",
    description: "Judo",
  },
  {
    image: "images/hobbies/cook.png",
    description: "Cuisine",
  },
  {
    image: "images/hobbies/chess.png",
    description: "Echecs",
  },
];

export const homeData: string[] = [
  "Salut 👋",
  "Je m'appelle Jacques WEBER et je suis développeur Fullstack Blockchain.",
  "Ce site a pour but de me présenter, et de vous faire découvrir les différents projets sur lesquels j'ai travaillé. Vous trouverez également mes expériences et comment me contacter 🧑‍💻",
];
