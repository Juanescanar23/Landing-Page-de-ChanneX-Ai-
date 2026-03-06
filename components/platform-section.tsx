import { Reveal } from "@/components/ui/reveal";
import { platformApps } from "@/lib/landing-data";

type AppCardProps = {
  app: (typeof platformApps)[number];
  delay: number;
  featured?: boolean;
};

function AppCard({ app, delay, featured }: AppCardProps) {
  return (
    <Reveal delay={delay} scale={0.96}>
      <article
        className={`group relative h-full overflow-hidden rounded-[22px] border p-6 transition hover:-translate-y-1.5 hover:border-fuchsia-400/35 hover:shadow-glow ${
          featured
            ? "border-white/15 bg-gradient-to-br from-fuchsia-500/10 to-blue-500/5"
            : "border-white/10 bg-white/[0.04]"
        }`}
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(192,38,211,.08),transparent_60%)] opacity-0 transition group-hover:opacity-100" />
        <div className="relative z-10">
          <span className="absolute right-0 top-0 rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 font-heading text-[0.62rem] font-bold tracking-[0.08em] text-white/35">
            {app.id}
          </span>

          <span
            className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg border text-lg transition ${
              featured
                ? "border-transparent bg-gradient-to-br from-magenta to-violet"
                : "border-white/10 bg-white/[0.04] group-hover:border-fuchsia-400/40"
            }`}
          >
            {app.icon}
          </span>

          <p className="mb-1 text-[0.66rem] font-bold uppercase tracking-[0.12em] text-fuchsia-400">
            {app.label}
          </p>
          <h3 className="mb-2 font-heading text-xl font-bold tracking-[-0.01em]">{app.name}</h3>
          <p className="mb-4 text-sm italic leading-relaxed text-white/45">{app.hook}</p>

          <ul className="mb-4 space-y-2">
            {app.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2 text-sm leading-relaxed text-white/70">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-magenta" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5">
            {app.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-white/10 bg-white/[0.02] px-2 py-1 text-[0.66rem] tracking-[0.03em] text-white/35"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function PlatformSection() {
  const firstRow = platformApps.slice(0, 3);
  const remaining = platformApps.slice(3);

  return (
    <section
      id="plataforma"
      className="section-space bg-[linear-gradient(180deg,transparent,rgba(124,22,232,.03),transparent)]"
    >
      <div className="container-shell">
        <div className="mx-auto mb-12 max-w-[620px] text-center">
          <Reveal>
            <span className="eyebrow">Plataforma</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-[-0.03em] md:text-6xl">
              Cada app resuelve
              <br />
              un <span className="text-grad">punto de fuga real.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-4 text-sm leading-7 text-white/45 md:text-[0.95rem]">
              Desde el primer mensaje hasta la recompra: 9 aplicaciones conectadas que cubren
              todo el ciclo comercial sin herramientas externas ni integraciones complicadas.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr_1fr]">
          {firstRow.map((app, index) => (
            <AppCard
              key={app.id}
              app={app}
              delay={index * 0.06}
              featured={index === 0 || app.featured}
            />
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {remaining.map((app, index) => (
            <AppCard key={app.id} app={app} delay={0.12 + index * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
}
