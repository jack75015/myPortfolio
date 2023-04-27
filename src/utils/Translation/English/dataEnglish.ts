import { DataTranslationType } from "../../types";

const projectsDataDescription = {
  "Paris Blockchain Society": ["Smart contract ETH", "NFT generation"],
  "Panthéon Business Club": [
    `Web Interface Bubble + Web3 integration`,
    "Mint page",
    "Smart contract ETH",
    "NFT generation",
  ],
  Wecreatures: ["Smart contract EVM", "Mint page Wix"],
  "Furious Alpha Gym Club": [
    "Web Interface React",
    "Mint page",
    "Smart contract ETH",
    "NFT generation",
  ],
  "The Mona Lana": ["NFT generation"],
};

const experiencesDataMissionsDescription = {
  Scorechain:
    "Development of a new risk scenario management feature on the scorechain monitoring application. Optimization of components / resolution of technical problems / clean code for production",

  "Ministère des transports du Luxembourg":
    "Reflection and implementation of a POC to digitize a management system for dangerous goods driving cards for the Luxembourg Ministry of Transport. An approach without and with blockchain (ETH) was presented. Front-End in React / Data management via Hasura / Back-end development of NestJS packages",

  "Banque de France":
    "Development of new features on the MADRE (ETH) blockchain solution. Angular 11 upgrade / GETH Ethereum node optimization / Back-end development with NestJS",

  "Mavryk Finance":
    "Implementation of decentralized oracles on Tezos for the DeFi platform mavryk.finance. Technical decision making / Development of smart contracts in Ligo / Back-end development with NestJS / Integration and continuous deployment",

  Forge:
    "Development of an asset tokenization solution (STO). Development with NestJS, ReactJS and GraphQL / Development of smart contracts in Solidity and SmartPy / Integration and continuous deployment / Active participation in technical decision making",
};

const hobbiesData = {
  Judo: "Judo",
  cook: "Cooking",
  chess: "Chess",
};

const homeData = [
  "Hello 👋",
  "I'm Jacques WEBER and I'm a Fullstack Blockchain developer.",
  "This website is about me and take you through the different projects I've worked on. You'll also find my experiences and how to contact me 🧑‍💻",
];

const skillsDataDescription = {
  eth: "Smart contracts Ethereum & Dapps.",
  tezos: "Smart contracts Tezos & Dapps.",
  blockchain:
    "Data management through ipfs, including image and metadata generation",
  react: "Web Application Front end (ReactJS) + Back end (NestJS, NodeJS",
  aws: "Hosting and deployement of applications",
  code: "Quality oriented code with strong security and latest bests practices",
};

const divider = {
  experiences: "Experiences",
  skills: "Skills",
  projects: "Projects",
  hobbies: "Hobbies",
};

export const dataEnglish: DataTranslationType = {
  projectsDataDescription,
  experiencesDataMissionsDescription,
  hobbiesData,
  homeData,
  skillsDataDescription,
  divider,
};
