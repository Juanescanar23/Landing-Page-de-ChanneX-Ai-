import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400">
      <path
        d="M20 6 9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type PlanFeature = {
  text: string;
  sub?: string;
};

function PlanFeatureList({ items }: { items: PlanFeature[] }) {
  return (
    <div className="flex flex-col gap-2.5">
      {items.map((item) => (
        <div key={item.text} className="flex items-start gap-2 text-[0.82rem] leading-relaxed text-white/70">
          <CheckIcon />
          <div>
            <span className="font-medium text-white">{item.text}</span>
            {item.sub ? <span className="mt-0.5 block text-[0.7rem] text-white/25">{item.sub}</span> : null}
          </div>
        </div>
      ))}
    </div>
  );
}

export function PricingSection() {
  const implementationFeatures = [
    "9 apps configuradas para tu industria",
    "10 sesiones de onboarding presencial o remoto",
    "Sistema operativo en 3 a 4 semanas",
    "Pago diferido hasta 12 meses",
  ];

  const professionalFeatures: PlanFeature[] = [
    { text: "9 apps activas con mantenimiento continuo" },
    { text: "2 usuarios incluidos", sub: "Adicionales: COP $10.000 / usuario / mes" },
    { text: "Soporte prioritario por WhatsApp y email" },
    { text: "Acceso anticipado a nuevas apps en desarrollo" },
  ];

  const enterpriseFeatures: PlanFeature[] = [
    { text: "Todo lo de Professional incluido" },
    { text: "Usuarios ilimitados" },
    { text: "Manager de cuenta dedicado" },
    { text: "Integraciones a medida (ERP, POS, WMS)" },
    { text: "SLA garantizado por contrato" },
  ];

  return (
    <section id="precios" className="section-space">
      <div className="container-shell">
        <div className="mx-auto mb-12 max-w-[620px] text-center">
          <Reveal>
            <span className="eyebrow">Inversión</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-[-0.03em] md:text-6xl">
              Así funciona
              <br />
              el <span className="text-grad">modelo de precios.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-4 text-[0.95rem] leading-7 text-white/70">
              Una sola implementación para activar el sistema. Luego eliges el plan mensual que
              se ajusta al tamaño de tu operación.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 flex max-w-[1080px] flex-col gap-12">
          <div>
            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-magenta to-violet font-heading text-[0.72rem] font-extrabold">
                  1
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-white/70">
                  Implementación única — activa las 9 apps y deja el sistema listo
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <article className="relative grid gap-8 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-8 xl:grid-cols-[1fr_auto_1fr_auto_1fr_auto_auto] xl:items-center">
                <span className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-magenta to-violet" />

                <div>
                  <p className="mb-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-fuchsia-300">
                    Pago único · no se repite
                  </p>
                  <h3 className="mb-1 font-heading text-3xl font-extrabold tracking-[-0.02em]">
                    Implementación
                  </h3>
                  <p className="max-w-[320px] text-sm leading-relaxed text-white/45">
                    Configuramos las 9 aplicaciones para tu operación, entrenamos a tu equipo y
                    dejamos el sistema operativo en 3 a 4 semanas.
                  </p>
                </div>

                <div className="hidden h-[60px] w-px bg-white/10 xl:block" />

                <div>
                  <p className="text-sm text-white/25 line-through">COP $4.800.000</p>
                  <p className="mt-1 font-heading text-5xl font-extrabold leading-none tracking-[-0.03em]">
                    <span className="align-super text-base font-semibold">COP </span>3.9M
                  </p>
                  <span className="mt-2 inline-block rounded-md border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[0.7rem] font-semibold text-emerald-300">
                    Ahorras $900K · Oferta de lanzamiento
                  </span>
                </div>

                <div className="hidden h-[60px] w-px bg-white/10 xl:block" />

                <div className="space-y-2">
                  {implementationFeatures.map((feature) => (
                    <div key={feature} className="flex items-start gap-2 text-[0.82rem] leading-relaxed text-white/70">
                      <CheckIcon />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="hidden h-[60px] w-px bg-white/10 xl:block" />

                <div>
                  <Link
                    href="mailto:hello@channexai.com"
                    className="btn-outline whitespace-nowrap px-5 py-2.5 text-xs"
                  >
                    Solicitar propuesta
                  </Link>
                </div>
              </article>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="flex items-center justify-center gap-4 px-3">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#111535] font-heading text-xl font-light text-white/30">
                +
              </span>
              <span className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-magenta to-violet font-heading text-[0.72rem] font-extrabold">
                  2
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-white/70">
                  Elige tu plan mensual — según el tamaño de tu operación
                </p>
              </div>
            </Reveal>

            <div className="grid gap-6 md:grid-cols-2">
              <Reveal delay={0.06} scale={0.97}>
                <article className="relative flex h-full flex-col rounded-[26px] border border-fuchsia-400/35 bg-gradient-to-br from-fuchsia-500/10 to-blue-500/10 p-7 shadow-[0_0_48px_rgba(192,38,211,.08)]">
                  <span className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-md bg-magenta px-4 py-1 text-[0.62rem] font-bold uppercase tracking-[0.1em] text-white">
                    Más elegido
                  </span>

                  <div className="pt-5">
                    <p className="mb-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-white/30">
                      Suscripción mensual
                    </p>
                    <h3 className="font-heading text-4xl font-extrabold tracking-[-0.02em]">
                      Professional
                    </h3>
                  </div>

                  <div className="my-5">
                    <p className="text-sm text-white/30 line-through">COP $3.200.000 / mes</p>
                    <p className="mt-1 font-heading text-5xl font-extrabold leading-none tracking-[-0.03em]">
                      <span className="align-super text-base font-semibold">COP </span>2.4M
                      <span className="text-xl font-medium text-white/45"> /mes</span>
                    </p>
                    <span className="mt-2 inline-block rounded-md border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[0.7rem] font-semibold text-emerald-300">
                      Precio especial de lanzamiento
                    </span>
                  </div>

                  <p className="mb-5 text-sm leading-relaxed text-white/45">
                    Para empresas con un equipo comercial de hasta 5 personas que quieren
                    automatizar su ciclo de ventas completo — desde el primer mensaje hasta la
                    recompra.
                  </p>

                  <div className="flex flex-1 flex-col">
                    <PlanFeatureList items={professionalFeatures} />
                  </div>

                  <div className="my-5 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
                    <span className="text-xs text-white/50">Inversión total el primer mes</span>
                    <span className="font-heading text-sm font-bold text-white">
                      COP 6.3M <span className="text-xs font-normal text-white/45">= 3.9M + 2.4M</span>
                    </span>
                  </div>

                  <Link href="https://wa.me/5210000000000" className="btn-primary w-full justify-center">
                    Comenzar con Professional →
                  </Link>
                </article>
              </Reveal>

              <Reveal delay={0.12} scale={0.97}>
                <article className="flex h-full flex-col rounded-[26px] border border-white/10 bg-white/[0.04] p-7">
                  <div className="pt-5">
                    <p className="mb-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-white/30">
                      Suscripción mensual
                    </p>
                    <h3 className="font-heading text-4xl font-extrabold tracking-[-0.02em]">
                      Enterprise
                    </h3>
                  </div>

                  <div className="my-5">
                    <p className="text-sm text-white/30 line-through">COP $6.000.000 / mes</p>
                    <p className="mt-1 font-heading text-5xl font-extrabold leading-none tracking-[-0.03em]">
                      <span className="align-super text-base font-semibold">COP </span>4.8M
                      <span className="text-xl font-medium text-white/45"> /mes</span>
                    </p>
                    <span className="mt-2 inline-block rounded-md border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[0.7rem] font-semibold text-emerald-300">
                      Para operaciones con escala
                    </span>
                  </div>

                  <p className="mb-5 text-sm leading-relaxed text-white/45">
                    Para empresas con equipos comerciales grandes, múltiples sedes o canales, y
                    necesidad de integración con sistemas propios (ERP, POS, WMS). SLA garantizado.
                  </p>

                  <div className="flex flex-1 flex-col">
                    <PlanFeatureList items={enterpriseFeatures} />
                  </div>

                  <div className="my-5 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
                    <span className="text-xs text-white/50">Inversión total el primer mes</span>
                    <span className="font-heading text-sm font-bold text-white">
                      COP 8.7M <span className="text-xs font-normal text-white/45">= 3.9M + 4.8M</span>
                    </span>
                  </div>

                  <Link href="mailto:hello@channexai.com" className="btn-outline w-full justify-center">
                    Hablar con el equipo →
                  </Link>
                </article>
              </Reveal>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-white/35">
          Todos los precios en COP · MEX | COL · Pago diferido disponible ·{" "}
          <Link
            href="mailto:hello@channexai.com"
            className="font-medium text-fuchsia-300 transition hover:text-white"
          >
            hello@channexai.com
          </Link>
        </p>
      </div>
    </section>
  );
}
