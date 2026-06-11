import { Footer } from './layouts/Footer'
import { Navbar } from './layouts/Navbar'
import { AboutSection } from './sections/AboutSection'
import { ContactSection } from './sections/ContactSection'
import { CredentialsSection } from './sections/CredentialsSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { HeroSection } from './sections/HeroSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { SkillsSection } from './sections/SkillsSection'
import { useTheme } from './hooks/useTheme'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f8f5] text-stone-950 dark:bg-[#080a0d] dark:text-stone-50">
      <Navbar onThemeToggle={toggleTheme} theme={theme} />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CredentialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
