import { Reveal } from "@/components/ui/reveal";
import { metrics } from "@/lib/landing-data";

export function MetricsBar() {
  return (
    <section className="section-space-sm">
      <div className="container-shell">
        <div className="grid overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.04] sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <Reveal key={metric.label} delay={index * 0.06}>
              <article
                className={`bg-[#0b0e28] p-8 text-center transition hover:bg-[#111535] ${
                  index < 3 ? "border-b border-white/10 lg:border-b-0" : ""
                } ${index % 2 === 0 ? "sm:border-r sm:border-white/10 lg:border-r" : ""} ${
                  index === 3 ? "lg:border-r-0" : ""
                }`}
              >
                <span className="block bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text font-heading text-4xl font-extrabold text-transparent">
                  {metric.value}
                </span>
                <span className="mt-1 block text-xs tracking-[0.03em] text-white/45">
                  {metric.label}
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
