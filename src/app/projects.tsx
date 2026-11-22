import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

interface ProjectItem {
  title: string;
  tag: string;
  description: string;
  stack: string[];
  link?: {
    label: string;
    href: string;
  };
}

const PROJECTS: ProjectItem[] = [
  {
    title: "Microsoft Graph & Entra ID MCP Servers",
    tag: "Tooling",
    description:
      "Custom Model Context Protocol (MCP) servers written in Python and TypeScript to query Exchange and Intune, pull reports, and run routine endpoint and identity checks through Microsoft Graph.",
    stack: ["Python", "TypeScript", "MCP", "Microsoft Graph API", "Entra ID", "Exchange Online", "Intune"],
    link: {
      label: "GitHub",
      href: "https://github.com/amargh2",
    },
  },
  {
    title: "Multi-Node Proxmox & Network Lab",
    tag: "Home Lab",
    description:
      "A multi-node Proxmox and KVM/QEMU lab running Linux servers, Docker Compose stacks, Ansible playbooks, and Cisco Modeling Labs (CML) for testing network configs and automation workflows.",
    stack: ["Proxmox", "KVM/QEMU", "Ansible", "Python", "Docker", "Linux", "Cisco CML"],
  },
  {
    title: "MERN Stack Web Apps, API integrations, PSADT, and Local and Cloud-Based Agents",
    tag: "Automation",
    description:
      "Reducing manual work through automation scripts and tools, integrating systems, and creating applications.",
    stack: ["MERN Stack", "PowerShell", "PSADT", "Python", "Agentic Automation", "API Integrations"],
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="border-b border-slate-200/80 bg-slate-50/40 py-16 lg:py-20"
    >
      <div className="mx-auto max-w-4xl px-6">
        <p className="font-mono text-xs uppercase tracking-wider text-sky-700">
          Projects &amp; Lab
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
          Things I Build &amp; Tinker With
        </h2>

        <div className="mt-8 space-y-4">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.03)] transition-colors hover:border-slate-300"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-base font-semibold text-slate-900">
                    {project.title}
                  </h3>
                  <span className="rounded border border-slate-200 bg-slate-50 px-2 py-0.5 font-mono text-[11px] text-slate-600">
                    {project.tag}
                  </span>
                </div>

                {project.link && (
                  <a
                    href={project.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-xs text-sky-700 transition-colors hover:text-sky-900"
                  >
                    <span>{project.link.label}</span>
                    <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>

              <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs text-slate-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
