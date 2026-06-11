import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { strengths } from '../data/portfolio'

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="A full-stack engineer focused on durable product systems"
          description="John combines frontend architecture, API implementation, database thinking, and performance work to ship production-grade applications that remain easy to extend."
        />

        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="rounded-lg border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
            <p className="text-lg leading-8 text-stone-700 dark:text-stone-300">
              With 3+ years of experience, John has worked across modern React
              interfaces, Node.js APIs, relational databases, role-based access
              control, and production optimization. His strongest pattern is
              turning repeated product needs into reusable architecture that
              improves speed without sacrificing clarity.
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {strengths.map((item, index) => {
              const Icon = item.icon

              return (
                <Reveal
                  key={item.title}
                  transition={{ delay: index * 0.06, duration: 0.5 }}
                  className="rounded-lg border border-black/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/[0.06]"
                >
                  <div className="mb-4 grid size-10 place-items-center rounded-md bg-teal-500/10 text-teal-700 dark:text-teal-200">
                    <Icon size={19} />
                  </div>
                  <h3 className="text-lg font-semibold text-stone-950 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-stone-300">
                    {item.description}
                  </p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
