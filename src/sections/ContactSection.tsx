import { BriefcaseBusiness, Check, Clipboard, Code2, Mail } from 'lucide-react'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { profile } from '../data/portfolio'

export function ContactSection() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '')
    const message = String(formData.get('message') ?? '')
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || 'Visitor'}`)
    const body = encodeURIComponent(message)

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section
      id="contact"
      className="border-t border-black/10 bg-stone-950 py-20 text-white dark:border-white/10 sm:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build reliable web products"
          description="For full-stack development, frontend architecture, API work, or product optimization conversations, reach out through email or social channels."
          inverse
        />

        <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          <Reveal className="rounded-lg border border-white/10 bg-white/[0.06] p-6">
            <p className="text-sm font-semibold uppercase text-teal-200">Direct channels</p>
            <h3 className="mt-4 text-2xl font-semibold">{profile.name}</h3>
            <p className="mt-2 text-stone-300">{profile.role}</p>

            <div className="mt-8 space-y-3">
              <button
                type="button"
                onClick={copyEmail}
                className="flex w-full items-center justify-between gap-3 rounded-md border border-white/10 bg-white/[0.06] px-4 py-3 text-left transition hover:bg-white/[0.1]"
              >
                <span className="flex min-w-0 items-center gap-3">
                  <Mail size={18} className="shrink-0 text-teal-200" />
                  <span className="truncate text-sm">{profile.email}</span>
                </span>
                {copied ? <Check size={18} /> : <Clipboard size={18} />}
              </button>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.06] px-4 py-3 text-sm transition hover:bg-white/[0.1]"
              >
                <BriefcaseBusiness size={18} className="text-sky-200" /> LinkedIn
              </a>
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.06] px-4 py-3 text-sm transition hover:bg-white/[0.1]"
              >
                <Code2 size={18} className="text-amber-200" /> GitHub
              </a>
            </div>
          </Reveal>

          <Reveal className="rounded-lg border border-white/10 bg-white p-6 text-stone-950 shadow-2xl shadow-black/30 dark:bg-white/[0.07] dark:text-white">
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold">
                  Name
                  <input
                    name="name"
                    type="text"
                    autoComplete="name"
                    className="rounded-md border border-black/10 bg-white px-3 py-3 text-sm outline-none transition focus:border-teal-500 dark:border-white/10 dark:bg-white/10"
                    required
                  />
                </label>
                <label className="grid gap-2 text-sm font-semibold">
                  Email
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="rounded-md border border-black/10 bg-white px-3 py-3 text-sm outline-none transition focus:border-teal-500 dark:border-white/10 dark:bg-white/10"
                    required
                  />
                </label>
              </div>
              <label className="grid gap-2 text-sm font-semibold">
                Message
                <textarea
                  name="message"
                  rows={6}
                  className="resize-none rounded-md border border-black/10 bg-white px-3 py-3 text-sm outline-none transition focus:border-teal-500 dark:border-white/10 dark:bg-white/10"
                  required
                />
              </label>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-stone-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-stone-800 dark:bg-white dark:text-stone-950 dark:hover:bg-stone-200"
              >
                Send Message <Mail size={17} />
              </button>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
