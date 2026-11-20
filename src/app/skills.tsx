const STACK_GROUPS = [
  {
    title: "Endpoint & Cloud",
    skills: [
      "Microsoft Intune",
      "Proactive Remediations",
      "Azure Virtual Desktop (AVD)",
      "Nerdio Manager",
      "Entra ID",
      "Windows Autopilot",
      "OSDCloud",
      "SharePoint Online",
    ],
  },
  {
    title: "Automation & AI Tooling",
    skills: [
      "PowerShell",
      "PSADT",
      "Microsoft Graph API",
      "MCP (Admin & Azure)",
      "Python",
      "TypeScript",
      "Ansible",
      "Bash",
      "Git",
    ],
  },
  {
    title: "Systems & Virtualization",
    skills: [
      "Linux Server Admin",
      "Hybrid Windows",
      "Proxmox",
      "KVM / QEMU",
      "Docker",
      "Cisco Modeling Labs",
    ],
  },
  {
    title: "Networking & Security",
    skills: [
      "CrowdStrike Falcon",
      "Tenable",
      "LAPS",
      "RBAC",
      "Firewalls",
      "VPN & Split Tunneling",
      "Cisco IOS",
      "VLANs",
    ],
  },
];

export function Skills() {
  return (
    <section
      id="stack"
      className="border-b border-slate-800/80 py-16 lg:py-20"
    >
      <div className="mx-auto max-w-4xl px-6">
        <p className="font-mono text-xs uppercase tracking-wider text-cyan-400/90">
          Stack
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-50">
          What I Work With
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {STACK_GROUPS.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-5"
            >
              <h3 className="text-sm font-semibold text-slate-100">
                {group.title}
              </h3>
              <div className="mt-3.5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-slate-800 bg-slate-950/80 px-2.5 py-1 font-mono text-xs text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
