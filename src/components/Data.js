import projImg1 from "../assets/img/immo_project.png";
import projImg2 from "../assets/img/projet_pays.png";
import projImg3 from "../assets/img/react_movies.png";
import projImg4 from "../assets/img/shope.png";
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaSass } from "react-icons/fa";
import { DiJavascript, DiMongodb } from "react-icons/di";
import { SiRedux } from "react-icons/si";

export const icons = [
  {
    logo: <FaHtml5 />,
    name: "HTML",
  },
  {
    logo: <FaCss3 />,
    name: "CSS 3",
  },
  {
    logo: <DiJavascript />,
    name: "Javascript",
  },
  {
    logo: <FaReact />,
    name: "React",
  },
  {
    logo: <SiRedux />,
    name: "Redux",
  },
  {
    logo: <FaNodeJs />,
    name: "NodeJs",
  },
  {
    logo: <DiMongodb />,
    name: "MongoDB",
  },
  {
    logo: <FaSass />,
    name: "Sass",
  },
];

export const experiences = [
  {
    id: 1,
    year: "2022",
    position: "Developpeur Web",
    company: "Ncrowl",
  },
  {
    id: 2,
    year: "2021",
    position: "Developpeur fullstack javascript",
    company: "La passerelle ( formation )",
  },
  {
    id: 3,
    year: "2020",
    position: "Developpeur / intégrateur Web ",
    company: "Celuga",
  },
  {
    id: 4,
    year: "2019",
    position: "Developpeur Web Junior",
    company: "OpenClassrooms ( formation )",
  },
];

export const projects = [
  {
    title: "Immo project",
    description: "Design & Development",
    imgUrl: projImg1,
    icon: <FaNodeJs />,
    icon2: <FaSass />,
    category: "nodeJs",
  },
  {
    title: "Projet Pays",
    description:
      "Application web utilisant une API de liste de pays du monde. Il comprend des informations telles que la capitale, la population, le drapeau et un système de tri pour organiser les pays. Ce projet a été un défi passionnant et j'ai appris à utiliser les API pour intégrer des données dans une application mobile.",
    imgUrl: projImg2,
    icon: <FaReact />,
    icon2: <FaSass />,
    category: "react",
  },
  {
    title: "React movies",
    description:
      "Application utilisant une API de films notés sur IMDb. Il permet de rechercher des films via une barre de recherche, de mettre en favoris les coups de coeur et de trier les films en fonction du nombre d'étoiles, du mieux noté au moins noté ou inversement. Il y a également des informations sur le genre et une courte description des films.",
    imgUrl: projImg3,
    icon: <FaReact />,
    icon2: <FaSass />,
    category: "react",
  },
  {
    title: "Shope projet react",
    description: "Design & Development",
    imgUrl: projImg4,
    icon: <FaReact />,
    category: "react",
  },
];
