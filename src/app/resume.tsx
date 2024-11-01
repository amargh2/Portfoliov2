"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { TbCertificate } from "react-icons/tb";
import { ResumeItem } from "@/components";

const RESUME_ITEMS = [
  {
    icon: AcademicCapIcon,
    children: "Bachelor of Arts in English Literature",
  },
  {
    icon: TbCertificate,
    children: "Cisco Certified Network Associate (CCNA)",
  },
  {
    icon: TbCertificate,
    children: "CompTIA A+, Network+, and Security+",
  },
];

export function Resume() {
  return (
    <section className="px-8 py-24">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <Typography variant="h2" color="blue-gray">
            My background
          </Typography>
          <Typography className="mb-4 mt-3 w-9/12 font-normal !text-gray-500">
            A former flight attendant and current IT professional with self-taught technical skills, active technical certifications, and a degree in English.
          </Typography>
            <a href='https://www.linkedin.com/in/anthony-margherio-26b26850/'>
              <Button
                variant="text"
                color="gray"
                className="flex items-center gap-2"
              >
                Linkedin
                <ArrowRightIcon
                  strokeWidth={3}
                  className="h-3.5 w-3.5 text-gray-900"
                />
              </Button>
            </a>  
        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {RESUME_ITEMS.map((props, idx) => (
            <ResumeItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
