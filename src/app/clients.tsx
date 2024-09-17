"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const CLIENTS = [
  "ccna",
  "a+",
  "s+",
  "net+"
];

export function Clients() {
  return (
    <section className="px-8 py-28">
      <div className="container mx-auto text-center">
      <Typography variant="h1" color="blue-gray" className="mb-4">
          My Certifications
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-20">
          {CLIENTS.map((logo, key) => (
            <Image
              key={key}
              alt={logo}
              width={768}
              height={768}
              className="w-52"
              src={`/image/${logo}.png`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
