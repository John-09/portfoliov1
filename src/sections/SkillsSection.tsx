import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { skillCategories } from '../data/portfolio'

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="border-y border-black/10 bg-white/62 py-20 dark:border-white/10 dark:bg-white/[0.03] sm:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Modern web stack, organized by where it creates leverage"
          description="The stack centers on React, TypeScript, Node.js, SQL databases, and tooling that supports scalable frontend and API delivery."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {skillCategories.map((category, index) => {
            const Icon = category.icon

            return (
              <Reveal
                key={category.title}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="rounded-lg border border-black/10 bg-[#f7f8f5] p-5 shadow-sm transition hover:-translate-y-1 hover:border-teal-500/40 dark:border-white/10 dark:bg-[#0d1116]"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-md bg-stone-950 text-white dark:bg-white dark:text-stone-950">
                    <Icon size={18} />
                  </span>
                  <h3 className="font-semibold text-stone-950 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-black/10 bg-white px-2.5 py-1.5 text-sm font-medium text-stone-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-stone-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
