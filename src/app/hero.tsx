"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            Hi there, I'm Anthony
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            I&apos;m a growing IT professional with a passion for technology and helping people. Prior to my move to IT,
            I was a flight attendant for eight years. While I loved my time flying,
            I'm enjoying working in a different type of cloud. In my spare time you can find me running, reading, or traveling.
            
          </Typography>
        </div>
        <div className='p-32'><Image
          width={1024}
          height={1024}
          alt="team work"
          src="/image/melondon.jpg"
          className="rounded-xl"
        /></div>
      </div>
    </header>
  );
}

export default Hero;
