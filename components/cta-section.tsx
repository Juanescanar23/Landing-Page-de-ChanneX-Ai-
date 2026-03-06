import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

export function CtaSection() {
  return (
    <section className="section-space-sm">
      <div className="container-shell">
        <Reveal scale={0.97}>
          <div className="relative overflow-hidden rounded-[40px] border border-fuchsia-400/35 bg-gradient-to-br from-fuchsia-500/15 to-blue-500/10 px-6 py-14 text-center md:px-12 md:py-20">
            <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(192,38,211,.16),transparent_70%)]" />

            <div className="relative z-10 mx-auto max-w-[560px]">
              <span className="eyebrow justify-center">¿Listo para automatizar?</span>
              <h2 className="mt-3 font-heading text-4xl font-bold leading-[1.06] tracking-[-0.03em] md:text-6xl">
                Más ventas.
                <br />
                Mismo equipo. <span className="text-grad">Menos fricción.</span>
              </h2>
              <p className="mt-4 text-base leading-8 text-white/70">
                En 3 a 4 semanas tu operación comercial puede estar funcionando con IA.
                Agenda una llamada de diagnóstico sin costo y te mostramos exactamente qué
                implementaríamos para tu negocio.
              </p>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <Link href="https://wa.me/5210000000000" className="btn-primary">
                  Agendar diagnóstico gratuito
                </Link>
                <Link href="mailto:hello@channexai.com" className="btn-ghost">
                  hello@channexai.com
                </Link>
              </div>

              <p className="mt-3 text-xs text-white/35">
                Sin compromiso · Respuesta en menos de 2 horas · MEX | COL
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
