import Image from "next/image";
import {
  AcademicCapIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export function Certifications() {
  return (
    <section id="credentials" className="py-16 lg:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <p className="font-mono text-xs uppercase tracking-wider text-cyan-400/90">
          Credentials
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-50">
          Certifications &amp; Education
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex items-start gap-3.5 rounded-xl border border-slate-800/80 bg-slate-900/40 p-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-slate-800 bg-slate-950 p-1">
              <Image
                src="/image/ccna.png"
                alt="CCNA"
                width={64}
                height={64}
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-100">
                Cisco CCNA
              </h3>
              <p className="mt-0.5 font-mono text-xs text-emerald-400/90">
                Active
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 rounded-xl border border-slate-800/80 bg-slate-900/40 p-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-800 bg-slate-950 text-cyan-400">
              <ShieldCheckIcon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-100">
                CompTIA CySA+
              </h3>
              <p className="mt-0.5 font-mono text-xs text-cyan-400/90">
                In Progress
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 rounded-xl border border-slate-800/80 bg-slate-900/40 p-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-800 bg-slate-950 text-slate-300">
              <AcademicCapIcon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-100">
                B.A. in English
              </h3>
              <p className="mt-0.5 text-xs text-slate-400">
                Univ. of Illinois at Chicago
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
