import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { FaGithub, FaLink } from "react-icons/fa";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
  github: string;
  live: string;
}

export function ProjectCard({ img, title, desc, github, live }: ProjectCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-60">
        <Image
          src={img}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="p-0">
        <div className='flex justify-center items-center px-4 gap-6'>
          <Typography variant="h5" className="mb-2">
            {title}
          </Typography>
        <div>
            <a href={github}>
                <FaGithub size={24}/>
            </a>
        </div>
        <div>  
          <a href={live}>
              <FaLink size={24} />
            </a>
          </div>
          </div>
        <Typography className="mb-6 font-normal !text-gray-500">
          {desc}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default ProjectCard;
