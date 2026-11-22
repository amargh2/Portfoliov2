import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50/70">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row">
        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="text-slate-700">Anthony Margherio</span>
          <span aria-hidden="true">·</span>
          <span>Chicago, IL</span>
          <span aria-hidden="true">·</span>
          <span>{year}</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/amargh2"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-600 transition-colors hover:text-sky-700"
          >
            <FaGithub className="h-4 w-4" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/anthony-margherio-26b26850/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-600 transition-colors hover:text-sky-700"
          >
            <FaLinkedin className="h-4 w-4" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
