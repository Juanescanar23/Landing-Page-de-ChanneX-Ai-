import { Reveal } from "@/components/ui/reveal";
import { bottomDataStats, topDataStats, type DataStat } from "@/lib/landing-data";

const toneClass: Record<DataStat["tone"], string> = {
  violet: "text-fuchsia-300",
  amber: "text-amber-400",
  emerald: "text-emerald-400",
  blue: "text-blue-400",
  cyan: "text-cyan-400",
};

const roiBlocks = [
  {
    value: "Hoy",
    label: "47h de respuesta promedio\n80% de leads sin seguimiento",
    valueClass: "text-white/55",
  },
  {
    value: "90 seg",
    label: "Calificación automática\ncon ChanneX AI",
    valueClass: "text-grad",
  },
  {
    value: "100%",
    label: "De leads con seguimiento\nautomático hasta el cierre",
    valueClass: "text-emerald-400",
  },
  {
    value: "ROI",
    label: "Estimado en el primer trimestre\nsegún tu volumen de leads",
    valueClass: "text-amber-400",
  },
];

function DataCard({ stat, wide = false }: { stat: DataStat; wide?: boolean }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-fuchsia-400/35 ${
        wide ? "md:p-8" : ""
      }`}
    >
      <span
        className={`mb-2 block font-heading text-5xl font-extrabold leading-none tracking-[-0.03em] ${toneClass[stat.tone]}`}
      >
        {stat.value}
      </span>
      <h3 className="mb-1 text-[0.9rem] font-semibold leading-snug text-white">{stat.title}</h3>
      <p className="text-sm leading-relaxed text-white/45">{stat.description}</p>
      <span className="mt-3 block text-[0.65rem] uppercase tracking-[0.04em] text-white/25">
        Fuente: {stat.source}
      </span>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-fuchsia-500/90 to-transparent opacity-0 transition group-hover:opacity-100" />
    </article>
  );
}

export function DataSection() {
  return (
    <section id="datos" className="section-space">
      <div className="container-shell">
        <div className="mx-auto mb-12 max-w-[680px] text-center">
          <Reveal>
            <span className="eyebrow">El costo de no actuar</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-[-0.03em] md:text-6xl">
              Los números que
              <br />
              tu competencia <span className="text-grad">ya conoce.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-4 text-sm leading-7 text-white/45 md:text-[0.95rem]">
              Benchmarks B2B verificados que muestran el costo real de operar sin un sistema de
              respuesta y calificación automatizado.
            </p>
          </Reveal>
        </div>

        <div className="mb-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {topDataStats.map((stat, index) => (
            <Reveal key={stat.title} delay={index * 0.06} scale={0.97}>
              <DataCard stat={stat} />
            </Reveal>
          ))}
        </div>

        <div className="mb-10 grid gap-6 md:grid-cols-2">
          {bottomDataStats.map((stat, index) => (
            <Reveal key={stat.title} delay={0.12 + index * 0.08} scale={0.97}>
              <DataCard stat={stat} wide />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="rounded-[28px] border border-fuchsia-400/25 bg-gradient-to-br from-fuchsia-500/10 to-blue-500/10 p-8 md:p-10">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {roiBlocks.map((block) => (
                <div
                  key={block.value}
                  className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-center"
                >
                  <span
                    className={`block font-heading text-2xl font-extrabold tracking-[-0.02em] ${
                      block.valueClass
                    }`}
                  >
                    {block.value}
                  </span>
                  <p className="mt-1 whitespace-pre-line text-xs leading-relaxed text-white/50">
                    {block.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
