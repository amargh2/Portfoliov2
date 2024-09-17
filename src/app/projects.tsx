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
    desc: "A simple front end for selling all your favorite rocks and crystals. Built in React using state management, components and styled simply with Tailwind.",
  },
  {
    img: "/image/discourse.png",
    title: "The Discourse",
    desc: "A message board with user accounts and authentication, ",
  },
  {
    img: "/image/fantasy-shop-updated.png",
    title: "Mobile App Development",
    desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
  },
  {
    img: "/image/blog2.svg",
    title: "Landing Page Development",
    desc: "Promotional landing page for a  fitness website Summer Campaign. Form development included.",
  },
  {
    img: "/image/blog3.svg",
    title: "Mobile App Development",
    desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
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
          Whether you have a mobile app idea that needs to come to life or a
          website that requires a facelift, I&apos;m here to turn your digital
          dreams into reality.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
