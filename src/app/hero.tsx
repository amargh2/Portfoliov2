import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-slate-200/80 bg-slate-50/50"
    >
      <div
        aria-hidden="true"
        className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_at_top,black_25%,transparent_75%)]"
      />

      <div className="relative mx-auto max-w-4xl px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="font-mono text-xs text-slate-500">Chicago, IL</p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Anthony Margherio
            </h1>

            <p className="mt-2 text-base font-medium text-sky-700 sm:text-lg">
              Systems and Infrastructure | Scripting and Development | Microsoft Intune | Entra ID | Azure Virtual Desktop | Linux and Windows Administration
            </p>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              I'm a curious, proactive systems and infrastructure professional with a focus on automation, scripting, and development. Learning and implementing new technologies is a passion of mine, and I value collaborative, knowledge-sharing environments.
              When I'm not tinkering with MCP, local and cloud-based agents, PowerShell, and Python, I enjoy running, traveling, and reading fantasy novels. 
              </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/amargh2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800"
              >
                <FaGithub className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/anthony-margherio-26b26850/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50"
              >
                <FaLinkedin className="h-4 w-4 text-sky-700" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="flex justify-start md:col-span-4 md:justify-end">
            <div className="w-44 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:w-52 md:w-56">
              <Image
                src="/image/headshot.jpg"
                alt="Anthony Margherio"
                width={540}
                height={540}
                priority
                className="aspect-square w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
