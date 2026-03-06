import { Reveal } from "@/components/ui/reveal";
import { painPoints, solutionSteps } from "@/lib/landing-data";

export function ProblemSection() {
  return (
    <section id="problema" className="section-space">
      <div className="container-shell">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="eyebrow">El problema que resolvemos</span>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mb-4 font-heading text-4xl font-bold leading-[1.05] tracking-[-0.03em] md:text-6xl">
                Tu equipo responde.
                <br />
                Pero los leads <span className="text-grad">ya se fueron.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mb-8 max-w-[500px] text-base leading-8 text-white/70">
                No es un problema de talento. Es un problema de sistema. La comunicación
                comercial hoy es fragmentada, lenta y manual, y eso le cuesta ventas reales
                cada día a tu negocio.
              </p>
            </Reveal>

            <div className="space-y-3">
              {painPoints.map((pain, index) => (
                <Reveal key={pain.title} delay={0.2 + index * 0.06}>
                  <article className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:translate-x-1.5 hover:border-fuchsia-400/40 hover:bg-fuchsia-500/10">
                    <div className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-gradient-to-b from-magenta to-violet transition group-hover:scale-y-100" />
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-rose-500/10 text-sm">
                      {pain.icon}
                    </div>
                    <div>
                      <h3 className="mb-1 text-sm font-semibold text-white">{pain.title}</h3>
                      <p className="text-sm leading-relaxed text-white/45">{pain.description}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.2} x={24}>
            <div className="glass-card sticky top-24 overflow-hidden rounded-[28px] p-8">
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(124,22,232,.18),transparent_70%)]" />
              <div className="relative z-10">
                <span className="eyebrow mb-5">Cómo lo resolvemos</span>
                <div className="space-y-3">
                  {solutionSteps.map((step, index) => (
                    <div key={step.title}>
                      <div className="flex items-start gap-3 rounded-xl p-3 transition hover:bg-white/[0.02]">
                        <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-magenta to-violet font-heading text-[0.7rem] font-bold">
                          {index + 1}
                        </span>
                        <div>
                          <h3 className="text-sm font-semibold text-white">{step.title}</h3>
                          <p className="text-xs leading-relaxed text-white/45">{step.description}</p>
                        </div>
                      </div>
                      {index < solutionSteps.length - 1 && (
                        <div className="ml-3.5 h-3 w-0.5 bg-gradient-to-b from-fuchsia-400/40 to-transparent" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
