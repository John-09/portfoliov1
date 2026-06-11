import { Code2, ExternalLink } from 'lucide-react'
import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { projects, profile } from '../data/portfolio'

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="border-y border-black/10 bg-white/62 py-20 dark:border-white/10 dark:bg-white/[0.03] sm:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Selected full-stack product work"
          description="Project cards highlight stack choices, production features, and the business-facing improvements behind each build."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              transition={{ delay: index * 0.08, duration: 0.55 }}
              className="group overflow-hidden rounded-lg border border-black/10 bg-[#f7f8f5] shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-[#0d1116]"
            >
              <div className={`h-44 border-b border-black/10 bg-gradient-to-br ${project.accent} p-5 dark:border-white/10`}>
                <div className="h-full rounded-md border border-black/10 bg-white/72 p-4 backdrop-blur dark:border-white/10 dark:bg-stone-950/60">
                  <div className="mb-5 flex items-center gap-2">
                    <span className="size-3 rounded-full bg-rose-400" />
                    <span className="size-3 rounded-full bg-amber-400" />
                    <span className="size-3 rounded-full bg-teal-400" />
                  </div>
                  <div className="grid grid-cols-[0.8fr_1.2fr] gap-3">
                    <div className="space-y-3">
                      <div className="h-4 rounded-md bg-stone-950/18 dark:bg-white/20" />
                      <div className="h-4 w-2/3 rounded-md bg-stone-950/12 dark:bg-white/14" />
                      <div className="h-16 rounded-md bg-stone-950/10 dark:bg-white/10" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-md bg-teal-500/18" />
                      <div className="rounded-md bg-sky-500/18" />
                      <div className="col-span-2 rounded-md bg-amber-500/16" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-stone-950 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-3 leading-7 text-stone-600 dark:text-stone-300">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-black/10 bg-white px-2.5 py-1.5 text-sm font-medium text-stone-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-stone-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="mt-5 space-y-3">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3 text-sm leading-6 text-stone-600 dark:text-stone-300"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-teal-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <p className="mt-5 rounded-md border border-amber-500/20 bg-amber-500/10 p-4 text-sm leading-6 text-amber-800 dark:text-amber-100">
                  {project.achievement}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={profile.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-black/10 bg-white px-4 py-2.5 text-sm font-semibold text-stone-800 transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/10 dark:text-white"
                  >
                    <Code2 size={16} /> GitHub
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-md bg-stone-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-stone-950"
                  >
                    Demo Details <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
