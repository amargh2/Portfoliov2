import React from "react";
import {
  Navbar as MTNavbar,
  Typography,
} from "@material-tailwind/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";


const NAV_MENU = [
  {
    name: "GitHub",
    icon: FaGithub,
    href: 'https://www.github.com/amargh2'
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/anthony-margherio-26b26850/'
  }
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  return (
    <MTNavbar shadow={true} fullWidth className="border-0 sticky top-0 z-50">
      <div className="container mx-auto flex items-center">
        <Typography color="blue-gray" className="text-lg font-bold">
          Anthony Margherio
        </Typography>
        <ul className="ml-10 items-center gap-8 flex">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5" />
              {name}
            </NavItem>
          ))}
        </ul>
      </div>
      
    </MTNavbar>
  );
}

export default Navbar;
