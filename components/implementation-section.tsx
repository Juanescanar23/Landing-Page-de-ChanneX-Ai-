import { Reveal } from "@/components/ui/reveal";
import { timelineSteps } from "@/lib/landing-data";

export function ImplementationSection() {
  return (
    <section
      id="implementacion"
      className="section-space-sm bg-[linear-gradient(180deg,transparent,rgba(124,22,232,.04),transparent)]"
    >
      <div className="container-shell">
        <div className="mx-auto max-w-[620px] text-center">
          <Reveal>
            <span className="eyebrow">Plan de integración</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-[-0.03em] md:text-6xl">
              Operativo en
              <br />
              <span className="text-grad-green">3 a 4 semanas.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-4 text-[0.95rem] leading-7 text-white/70">
              10 sesiones de onboarding presencial o remoto, con implementación guiada semana
              a semana para que tu equipo opere con seguridad sin interrumpir la operación
              actual. Reducimos estos tiempos conforme mejoramos nuestra tecnología.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-5 hidden h-0.5 bg-gradient-to-r from-magenta via-violet to-blue-500 xl:block" />

          {timelineSteps.map((step, index) => (
            <Reveal key={step.week} delay={index * 0.08}>
              <article>
                <div className="mb-5 flex items-center">
                  <span
                    className={`inline-flex h-6 w-6 items-center justify-center rounded-full font-heading text-[0.64rem] font-extrabold ${
                      step.done
                        ? "bg-gradient-to-br from-emerald-400 to-cyan-400"
                        : "bg-gradient-to-br from-magenta to-violet"
                    }`}
                  >
                    {index + 1}
                  </span>
                </div>
                <div
                  className={`rounded-xl border p-5 transition hover:border-fuchsia-400/35 ${
                    step.done
                      ? "border-emerald-400/25 bg-emerald-500/10"
                      : "border-white/10 bg-white/[0.04]"
                  }`}
                >
                  <p
                    className={`mb-1 text-[0.68rem] font-bold uppercase tracking-[0.1em] ${
                      step.done ? "text-emerald-300" : "text-fuchsia-400"
                    }`}
                  >
                    {step.week}
                  </p>
                  <h3 className="mb-3 font-heading text-sm font-bold tracking-[-0.01em]">
                    {step.title}
                  </h3>
                  <ul className="space-y-1.5">
                    {step.apps.map((app) => (
                      <li key={app} className="flex items-start gap-2 text-xs leading-relaxed text-white/45">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-magenta" />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
