import { stats } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Stats() {
  return (
    <section aria-label="Research highlights" className="border-y border-line bg-surface">
      <div className="container-page py-10 sm:py-12">
        <dl className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 70}>
              <div className="flex flex-col border-l-2 border-accent/40 pl-4 sm:pl-5">
                <dt className="order-2 mt-1 text-sm font-medium text-foreground">
                  {stat.label}
                </dt>
                <dd className="order-1 font-display text-3xl font-bold tracking-tight text-accent sm:text-4xl">
                  {stat.value}
                </dd>
                {stat.sub ? (
                  <dd className="order-3 mt-1 text-xs text-muted">{stat.sub}</dd>
                ) : null}
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
