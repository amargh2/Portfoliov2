interface Role {
  title: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  summary: string;
}

const ROLES: Role[] = [
  {
    title: "IT Support Analyst",
    company: "CC Industries / Henry Crown",
    location: "Chicago, IL",
    period: "Dec 2025 – Present",
    current: true,
    summary:
      "Focused on Azure Virtual Desktop image consolidation and Nerdio automation, Intune app packaging (PSADT) and Proactive Remediations, CrowdStrike/Tenable compliance, SharePoint Online migrations, and adopting Microsoft Admin/Azure MCP tooling for tenant audits.",
  },
  {
    title: "Service Desk Administrator",
    company: "Chicago Teachers’ Pension Fund",
    location: "Chicago, IL",
    period: "Oct 2023 – Aug 2025",
    summary:
      "Served as M365 Global Admin automating user lifecycle and RBAC via PowerShell and Graph API, built an OSDCloud-to-Autopilot deployment pipeline, implemented VPN split tunneling and firewall changes, and co-administered hybrid Linux and Windows servers.",
  },
  {
    title: "Flight Attendant",
    company: "American Airlines",
    location: "Chicago, IL",
    period: "Mar 2014 – May 2022",
    summary:
      "Eight years managing safety, operational logistics, and high-pressure situations across domestic and international flights.",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-slate-800/80 py-16 lg:py-20"
    >
      <div className="mx-auto max-w-4xl px-6">
        <p className="font-mono text-xs uppercase tracking-wider text-cyan-400/90">
          Experience
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-50">
          Career Timeline
        </h2>

        <div className="relative mt-8 space-y-6 before:absolute before:bottom-2 before:left-[7px] before:top-2 before:w-px before:bg-slate-800">
          {ROLES.map((role) => (
            <div key={`${role.company}-${role.period}`} className="relative pl-8">
              <span
                aria-hidden="true"
                className={`absolute left-0 top-5 h-3.5 w-3.5 rounded-full border-2 ${
                  role.current
                    ? "border-cyan-400 bg-cyan-400/20 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                    : "border-slate-600 bg-slate-950"
                }`}
              />

              <div className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-5">
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <div>
                    <h3 className="text-base font-semibold text-slate-100">
                      {role.title}
                    </h3>
                    <p className="text-sm text-cyan-300/90">
                      {role.company}{" "}
                      <span className="text-slate-500">· {role.location}</span>
                    </p>
                  </div>
                  <span className="font-mono text-xs text-slate-500">
                    {role.period}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {role.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
