import projImg1 from "../assets/img/immo_project.png";
import projImg2 from "../assets/img/projet_pays.png";
import projImg3 from "../assets/img/react_movies.png";
import projImg4 from "../assets/img/shope.png";
import { FaReact } from "react-icons/fa";

export const projects = [
  {
    title: "Immo project",
    description: "Design & Development",
    imgUrl: projImg1,
  },
  {
    title: "Projet Pays",
    description:
      "Application web utilisant une API de liste de pays du monde. Il comprend des informations telles que la capitale, la population, le drapeau et un système de tri pour organiser les pays. Ce projet a été un défi passionnant et j'ai appris à utiliser les API pour intégrer des données dans une application mobile.",
    imgUrl: projImg2,
    icon: <FaReact />,
  },
  {
    title: "React movies",
    description:
      "Application utilisant une API de films notés sur IMDb. Il permet de rechercher des films via une barre de recherche, de mettre en favoris les coups de coeur et de trier les films en fonction du nombre d'étoiles, du mieux noté au moins noté ou inversement. Il y a également des informations sur le genre et une courte description des films.",
    imgUrl: projImg3,
  },
  {
    title: "Shope projet react",
    description: "Design & Development",
    imgUrl: projImg4,
  },
];
