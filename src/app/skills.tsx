"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Application Development",
    children:
      "I taught myself the MERN stack - MongoDB, Express, React, and Node.js - and am familiar with a range of front end design systems and frameworks. I have built several applications and am planning on building more. Some of them are listed below.",
  },
  {
    icon: FingerPrintIcon,
    title: "Technical Support",
    children:
      "As a customer service professional, I am especially good at listening closely and empathetically to understand the problem. As a curious technician, I don't shy away from difficult problems or unfamiliar technologies and enjoy the challenge and satisfaction of researching and resolving issues.",
  },
  {
    icon: SwatchIcon,
    title: "Communication",
    children:
      "I honed strong skills in communication working with the public and my colleagues as a flight attendant for American Airlines as well as the year I spent teaching in South Korea. I was also an English major and am excited about good documentation.",
  },
  {
    icon: HashtagIcon,
    title: "System and Network Administration",
    children:
      "I currently help administer cloud and on-premises applications and systems, maintaining and troubleshooting platforms like Intune, Azure, Entra ID, M365, VMware, and Active Directory. I alsoearned my CCNA through self-study and work with several Cisco technologies at work and in my home lab.",
  },
  {
    icon: EyeIcon,
    title: "PowerShell and Bash Scripting",
    children:
      "I am proficient in Bash and PowerShell and enjoy creating scripts and utilities to aid in endpoint administration and common support tasks. I have used multiple tools, modules, and scripts to accomplish administrative and reporting tasks and am excited by automation.",
  },
  {
    icon: DocumentTextIcon,
    title: "Adaptability and Teamwork",
    children:
      "Working as a flight attendant and teacher overseas taught me a lot about adapting to changing circumstances, working with others effectively, and staying calm under pressure. I value professional communication, collaboration, and a positive workplace, and do my best to create one wherever I go.",
  },
];

export function Skills() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Some of my skills
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          I'm a curious technical professional committed to continuously improving my skills and collaborating productively with any team I'm on.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
