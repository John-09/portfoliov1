import { CheckCircle2 } from 'lucide-react'
import { Container } from '../components/Container'
import { MetricCard } from '../components/MetricCard'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { experience, metrics } from '../data/portfolio'

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Production engineering with measurable outcomes"
          description="The experience section emphasizes recruiter-friendly results: performance, release speed, state reliability, reusable UI systems, RBAC, and API optimization."
        />

        <div className="grid gap-6 lg:grid-cols-[0.74fr_1.26fr]">
          <Reveal className="rounded-lg border border-black/10 bg-stone-950 p-6 text-white shadow-xl shadow-stone-950/10 dark:border-white/10">
            <p className="text-sm font-semibold text-teal-200">{experience.period}</p>
            <h3 className="mt-4 text-2xl font-semibold">{experience.role}</h3>
            <p className="mt-2 text-stone-300">{experience.company}</p>
            <p className="mt-6 leading-7 text-stone-300">{experience.summary}</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {metrics.map((metric) => (
                <MetricCard key={metric.label} {...metric} />
              ))}
            </div>
          </Reveal>

          <div className="relative">
            <div className="absolute bottom-0 left-4 top-0 w-px bg-black/10 dark:bg-white/10" />
            <div className="space-y-4">
              {experience.achievements.map((achievement, index) => (
                <Reveal
                  key={achievement}
                  transition={{ delay: index * 0.06, duration: 0.5 }}
                  className="relative pl-11"
                >
                  <span className="absolute left-0 top-1 grid size-8 place-items-center rounded-md border border-teal-500/30 bg-teal-500/10 text-teal-700 dark:text-teal-200">
                    <CheckCircle2 size={17} />
                  </span>
                  <div className="rounded-lg border border-black/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
                    <p className="leading-7 text-stone-700 dark:text-stone-300">
                      {achievement}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
