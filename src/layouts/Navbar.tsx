import { Menu, Moon, Sun } from 'lucide-react'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Container } from '../components/Container'
import { navigation, profile } from '../data/portfolio'
import { cn } from '../lib/utils'

type NavbarProps = {
  theme: 'dark' | 'light'
  onThemeToggle: () => void
}

export function Navbar({ theme, onThemeToggle }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[#f7f8f5]/82 backdrop-blur-xl dark:border-white/10 dark:bg-[#080a0d]/82">
      <Container className="flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-3 font-semibold">
          <span className="grid size-9 place-items-center rounded-md bg-stone-950 text-sm text-white dark:bg-white dark:text-stone-950">
            JS
          </span>
          <span className="hidden text-sm text-stone-800 sm:block dark:text-stone-100">
            {profile.name}
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-stone-600 transition hover:bg-black/5 hover:text-stone-950 dark:text-stone-300 dark:hover:bg-white/10 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onThemeToggle}
            className="grid size-10 place-items-center rounded-md border border-black/10 bg-white/70 text-stone-800 transition hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-stone-100 dark:hover:bg-white/15"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="grid size-10 place-items-center rounded-md border border-black/10 bg-white/70 text-stone-800 md:hidden dark:border-white/10 dark:bg-white/10 dark:text-stone-100"
            aria-label="Toggle navigation"
            title="Toggle navigation"
          >
            <Menu size={19} />
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {isOpen ? (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-black/10 bg-[#f7f8f5] md:hidden dark:border-white/10 dark:bg-[#080a0d]"
            aria-label="Mobile"
          >
            <Container className="grid gap-1 py-3">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'rounded-md px-3 py-3 text-sm font-medium',
                    'text-stone-700 hover:bg-black/5 hover:text-stone-950',
                    'dark:text-stone-200 dark:hover:bg-white/10 dark:hover:text-white',
                  )}
                >
                  {item.label}
                </a>
              ))}
            </Container>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
