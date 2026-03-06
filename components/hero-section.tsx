import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { heroStats } from "@/lib/landing-data";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pb-20 pt-36 md:pt-40">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="hero-pulse absolute left-1/2 top-[-40%] h-[900px] w-[900px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(124,22,232,.12),transparent_70%)]" />
      </div>

      <div className="container-shell z-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-fuchsia-400/30 bg-fuchsia-400/10 px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-fuchsia-300">
                  Plataforma B2B de Conversión con IA
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mb-6 font-heading text-5xl font-extrabold leading-[0.98] tracking-[-0.04em] sm:text-6xl md:text-7xl">
                Centraliza.
                <br />
                Califica.
                <br />
                <span className="text-grad">Convierte.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mb-10 max-w-[520px] text-base leading-relaxed text-white/70 md:text-lg md:leading-8">
                ChanneX AI conecta todos tus canales de comunicación, califica leads en 90
                segundos con inteligencia artificial y automatiza el seguimiento para que tu
                equipo comercial solo hable con quien ya está listo para comprar.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mb-10 flex flex-wrap items-center gap-3">
                <Link href="#precios" className="btn-primary">
                  Conocer los planes
                </Link>
                <Link href="#plataforma" className="btn-ghost">
                  Ver la plataforma
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="grid gap-0 border-t border-white/10 sm:grid-cols-3">
                {heroStats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`py-6 ${index > 0 ? "sm:border-l sm:border-white/10 sm:pl-6" : "pr-6"}`}
                  >
                    <span className="block bg-gradient-to-r from-white to-fuchsia-300 bg-clip-text font-heading text-4xl font-extrabold leading-none text-transparent">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-xs font-medium tracking-[0.02em] text-white/45">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.25} x={32} className="hidden lg:block">
            <div className="relative">
              <div className="float-bob absolute -right-6 -top-4 rounded-xl border border-fuchsia-400/35 bg-ink/90 px-4 py-2">
                <p className="text-[0.62rem] uppercase tracking-[0.08em] text-white/45">Lead calificado</p>
                <p className="font-heading text-sm font-bold">
                  MQL-A <span className="text-emerald-400">↑ 94%</span>
                </p>
              </div>

              <div className="glass-card relative overflow-hidden rounded-[28px] border-white/15 p-6 shadow-[0_40px_100px_rgba(0,0,0,.5)]">
                <div className="absolute inset-0 rounded-[28px] bg-[linear-gradient(135deg,rgba(192,38,211,.22),transparent_55%,rgba(59,130,246,.18))]" />
                <div className="relative z-10">
                  <div className="mb-4 flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                    <span className="ml-auto font-heading text-[0.66rem] uppercase tracking-[0.08em] text-white/25">
                      ChanneX AI Inbox Omnicanal
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-start gap-2.5">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[0.62rem] font-bold">
                        👤
                      </div>
                      <div className="max-w-[230px] rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs leading-relaxed text-white/70">
                        Hola, manejo una plaza en Bogotá, necesito frutas y verduras para esta
                        semana.
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-violet-600 text-[0.62rem] font-bold">
                        AI
                      </div>
                      <div className="max-w-[250px] rounded-xl border border-fuchsia-400/30 bg-fuchsia-500/15 px-3 py-2 text-xs leading-relaxed">
                        Perfecto. ¿Qué volumen manejas por semana? Así verifico condiciones y
                        disponibilidad para ti.
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[0.62rem] font-bold">
                        👤
                      </div>
                      <div className="max-w-[230px] rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs leading-relaxed text-white/70">
                        Aproximadamente 300 kg. Necesito para el lunes, es urgente.
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-violet-600 text-[0.62rem] font-bold">
                        AI
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2">
                        <div className="flex gap-1">
                          <span className="typing-dot h-1 w-1 rounded-full bg-fuchsia-300" />
                          <span className="typing-dot h-1 w-1 rounded-full bg-fuchsia-300" />
                          <span className="typing-dot h-1 w-1 rounded-full bg-fuchsia-300" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-2">
                      <p className="font-heading text-sm font-bold text-emerald-400">A</p>
                      <p className="text-[0.64rem] text-white/45">Prioridad</p>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-2">
                      <p className="font-heading text-sm font-bold">300 kg</p>
                      <p className="text-[0.64rem] text-white/45">Volumen</p>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-2">
                      <p className="font-heading text-sm font-bold text-emerald-400">→ SQL</p>
                      <p className="text-[0.64rem] text-white/45">Pipeline</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="float-bob absolute -bottom-4 -left-6 rounded-xl border border-fuchsia-400/35 bg-ink/90 px-4 py-2 [animation-direction:alternate-reverse]">
                <p className="text-[0.62rem] uppercase tracking-[0.08em] text-white/45">Asignado a</p>
                <p className="font-heading text-sm font-bold">Carlos · Zona Norte</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
