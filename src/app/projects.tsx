"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    img: "/image/weatherapp.png",
    title: "Weather App",
    desc: "Just a simple weather app. It's built in React and incorporates two API's - one to get coordinates with MapBox, and the other to get the weather.",
  },
  {
    img: "/image/BattleShip.jpg",
    title: "Battleship",
    desc: "Battleship built in object oriented vanilla JavaScript. Uses drag and drop DOM API for ship placement and includes a computer opponent.",
  },
  {
    img: "/image/crystal-shop.png",
    title: "Crystal Shop",
    desc: "A simple front end for selling all your favorite rocks and crystals. Built in React using state management, components and styled with Tailwind.",
  },
  {
    img: "/image/discourse.png",
    title: "The Discourse",
    desc: "A message board with user accounts and authentication, message board, and messaging system. Built with Express and styled with SASS.",
  },
  {
    img: "/image/fantasy-shop-updated.png",
    title: "Fantasy Shop",
    desc: "My first full-stack application. Uses the Model-View-Controller design pattern. Back end built with MongoDB and Express and front end built with Bootstrap.",
  },
  {
    img: "/image/twitter.png",
    title: "Twitter Front End By Eye",
    desc: "My attempt at building Twitter's front end by eye using SASS and Next.js. Includes Google authentication with Next Auth and basic posting system.",
  },
];

export function Projects() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          My Projects
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          I learned a lot building these and have a lot more to learn. Most of them were assignments from The Odin Project, an open source self-paced development course that encourages learning by doing.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
