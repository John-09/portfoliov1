import { Container } from '../components/Container'
import { profile, socials } from '../data/portfolio'

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white/50 py-8 dark:border-white/10 dark:bg-white/[0.03]">
      <Container className="flex flex-col gap-4 text-sm text-stone-600 sm:flex-row sm:items-center sm:justify-between dark:text-stone-400">
        <p>© 2026 {profile.name}. Built with React, TypeScript, Tailwind CSS, and Vite.</p>
        <div className="flex items-center gap-3">
          {socials.map((social) => {
            const Icon = social.icon

            return (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                className="grid size-9 place-items-center rounded-md border border-black/10 bg-white text-stone-700 transition hover:-translate-y-0.5 hover:text-teal-700 dark:border-white/10 dark:bg-white/10 dark:text-stone-200 dark:hover:text-teal-200"
                aria-label={social.label}
                title={social.label}
              >
                <Icon size={17} />
              </a>
            )
          })}
        </div>
      </Container>
    </footer>
  )
}
