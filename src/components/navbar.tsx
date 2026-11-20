import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SECTION_LINKS = [
  { name: "Stack", href: "#stack" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Credentials", href: "#credentials" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link
          href="#top"
          className="text-sm font-semibold tracking-tight text-slate-100 transition-colors hover:text-cyan-300"
        >
          Anthony Margherio
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {SECTION_LINKS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-slate-400 transition-colors hover:text-slate-100"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/amargh2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-slate-100"
          >
            <FaGithub className="h-4 w-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/anthony-margherio-26b26850/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-slate-100"
          >
            <FaLinkedin className="h-4 w-4" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
