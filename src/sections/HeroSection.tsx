import { ArrowDown, Download, Mail, MoveRight } from 'lucide-react'
import { motion } from 'framer-motion'
import heroImg from '../assets/hero.png'
import { Container } from '../components/Container'
import { MetricCard } from '../components/MetricCard'
import { profile, metrics, socials } from '../data/portfolio'

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden border-b border-black/10 pt-24 dark:border-white/10"
    >
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(20,184,166,0.16),transparent_36%,rgba(14,165,233,0.12)_68%,rgba(245,158,11,0.14))] dark:bg-[linear-gradient(115deg,rgba(20,184,166,0.18),transparent_36%,rgba(14,165,233,0.14)_68%,rgba(244,63,94,0.1))]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(8,10,13,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(8,10,13,0.05)_1px,transparent_1px)] bg-[size:44px_44px] dark:bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)]" />

      <Container className="relative grid gap-12 py-16 lg:grid-cols-[1.03fr_0.97fr] lg:items-center lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-5 inline-flex rounded-md border border-teal-500/25 bg-teal-500/10 px-3 py-1.5 text-sm font-semibold text-teal-800 dark:text-teal-200">
            {profile.role} · {profile.location}
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] text-stone-950 sm:text-6xl lg:text-7xl dark:text-white">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700 dark:text-stone-300">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-stone-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-stone-800 dark:bg-white dark:text-stone-950 dark:hover:bg-stone-200"
            >
              View Projects <MoveRight size={17} />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center justify-center gap-2 rounded-md border border-black/10 bg-white/75 px-5 py-3 text-sm font-semibold text-stone-800 transition hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
            >
              Download Resume <Download size={17} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-black/10 px-5 py-3 text-sm font-semibold text-stone-800 transition hover:-translate-y-0.5 hover:bg-black/5 dark:border-white/10 dark:text-white dark:hover:bg-white/10"
            >
              Contact Me <Mail size={17} />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {socials.map((social) => {
              const Icon = social.icon

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="grid size-11 place-items-center rounded-md border border-black/10 bg-white/70 text-stone-700 transition hover:-translate-y-0.5 hover:text-teal-700 dark:border-white/10 dark:bg-white/10 dark:text-stone-200 dark:hover:text-teal-200"
                  aria-label={social.label}
                  title={social.label}
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="rounded-lg border border-black/10 bg-white/76 p-4 shadow-2xl shadow-stone-950/10 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.07] dark:shadow-black/40">
            <div className="rounded-md border border-black/10 bg-stone-950 p-5 text-white dark:border-white/10">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm text-stone-400">Production profile</p>
                  <p className="mt-1 font-semibold">Full-stack systems</p>
                </div>
                <img src={heroImg} alt="" className="h-20 w-20 object-contain" />
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {metrics.map((metric) => (
                  <MetricCard key={metric.label} {...metric} />
                ))}
              </div>
              <div className="mt-5 rounded-md border border-white/10 bg-white/[0.06] p-4">
                <p className="font-mono text-sm text-teal-200">focusAreas.map(build)</p>
                <p className="mt-3 text-sm leading-6 text-stone-300">
                  Frontend architecture, API development, state management,
                  performance optimization, and reusable delivery systems.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>

      <a
        href="#about"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 rounded-md border border-black/10 bg-white/70 p-2 text-stone-700 backdrop-blur transition hover:bg-white lg:block dark:border-white/10 dark:bg-white/10 dark:text-stone-200 dark:hover:bg-white/15"
        aria-label="Scroll to about section"
        title="Scroll to about section"
      >
        <ArrowDown size={18} />
      </a>
    </section>
  )
}
