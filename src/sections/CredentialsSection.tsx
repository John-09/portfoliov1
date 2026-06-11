import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { credentials } from '../data/portfolio'

export function CredentialsSection() {
  return (
    <section id="credentials" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Credentials"
          title="Education, certifications, and publication"
          description="A concise credential layer that supports the core engineering profile without pulling focus from product impact."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {credentials.map((credential, index) => {
            const Icon = credential.icon

            return (
              <Reveal
                key={credential.group}
                transition={{ delay: index * 0.07, duration: 0.5 }}
                className="rounded-lg border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.06]"
              >
                <div className="mb-5 grid size-11 place-items-center rounded-md bg-stone-950 text-white dark:bg-white dark:text-stone-950">
                  <Icon size={19} />
                </div>
                <h3 className="text-xl font-semibold text-stone-950 dark:text-white">
                  {credential.group}
                </h3>
                <div className="mt-4 space-y-2">
                  {credential.items.map((item) => (
                    <p key={item} className="leading-7 text-stone-600 dark:text-stone-300">
                      {item}
                    </p>
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
