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
      "Custom Model Context Protocol (MCP) servers written in Python and TypeScript to query Entra ID, pull reports, and run routine endpoint and identity checks through Microsoft Graph.",
    stack: ["Python", "TypeScript", "MCP", "Microsoft Graph API", "Entra ID"],
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
    stack: ["Proxmox", "KVM/QEMU", "Ansible", "Docker", "Linux", "Cisco CML"],
  },
  {
    title: "Endpoint Provisioning & Packaging Workflows",
    tag: "Automation",
    description:
      "Reusable PowerShell scripts, PSADT templates, Proactive Remediations, and OSDCloud-to-Autopilot pipelines for standardizing OS deployments and reducing manual touchpoints.",
    stack: ["PowerShell", "PSADT", "OSDCloud", "Autopilot", "Intune"],
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="border-b border-slate-800/80 py-16 lg:py-20"
    >
      <div className="mx-auto max-w-4xl px-6">
        <p className="font-mono text-xs uppercase tracking-wider text-cyan-400/90">
          Projects &amp; Lab
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-50">
          Things I Build &amp; Tinker With
        </h2>

        <div className="mt-8 space-y-4">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-5 transition-colors hover:border-slate-700"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-base font-semibold text-slate-100">
                    {project.title}
                  </h3>
                  <span className="rounded border border-slate-800 bg-slate-950 px-2 py-0.5 font-mono text-[11px] text-slate-400">
                    {project.tag}
                  </span>
                </div>

                {project.link && (
                  <a
                    href={project.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-xs text-cyan-300 transition-colors hover:text-cyan-200"
                  >
                    <span>{project.link.label}</span>
                    <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>

              <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
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
