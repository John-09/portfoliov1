import {
  Boxes,
  Braces,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  Mail,
  ServerCog,
  ShieldCheck,
  Sparkles,
  TimerReset,
  Workflow,
} from 'lucide-react'
import resumePdf from '../assets/John_Sam_Daniel_FullStack.pdf'

export const profile = {
  name: 'John Sam Daniel P',
  role: 'Full Stack Developer',
  intro:
    'Full Stack Developer with 3+ years of experience building scalable production-grade web applications across React, TypeScript, Node.js, and SQL-backed platforms.',
  location: 'India',
  email: 'johnsd2709@gmail.com',
  resumeUrl: resumePdf,
  githubUrl: 'https://github.com/John-09?tab=repositories',
  linkedinUrl: 'https://www.linkedin.com/in/johnsamp/',
}

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const socials = [
  {
    label: 'GitHub',
    href: profile.githubUrl,
    icon: Code2,
  },
  {
    label: 'LinkedIn',
    href: profile.linkedinUrl,
    icon: BriefcaseBusiness,
  },
  {
    label: 'Email',
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
]

export const strengths = [
  {
    title: 'Frontend architecture',
    description:
      'Designs reusable UI systems, predictable state flows, and component patterns that keep large React applications maintainable.',
    icon: Boxes,
  },
  {
    title: 'API development',
    description:
      'Builds robust Node.js and Express APIs with clean data access, RBAC, and performance-focused query design.',
    icon: ServerCog,
  },
  {
    title: 'Performance optimization',
    description:
      'Improves load times, interaction speed, and release confidence through profiling, caching, and focused refactoring.',
    icon: TimerReset,
  },
  {
    title: 'Full-stack delivery',
    description:
      'Connects UI, state, APIs, and relational databases into reliable product workflows for production teams.',
    icon: Workflow,
  },
]

export const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: ['React.js', 'TypeScript', 'Redux', 'TanStack Query', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    icon: Braces,
    skills: ['Node.js', 'Express.js', 'REST APIs', 'RBAC', 'API optimization'],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['PostgreSQL', 'MySQL', 'Prisma', 'TypeORM', 'Query tuning'],
  },
  {
    title: 'Tools',
    icon: Sparkles,
    skills: ['Vite', 'Git', 'Reusable UI systems', 'Performance profiling'],
  },
  {
    title: 'Cloud Services',
    icon: Cloud,
    skills: ['Scalable deployments', 'Environment management', 'Production monitoring'],
  },
]

export const experience = {
  company: 'KalavAI Digital Private Limited - The Viswa Group',
  role: 'Full Stack Developer',
  period: '3+ years',
  summary:
    'Built and optimized production web applications with a focus on scalable UI architecture, API reliability, RBAC, and measurable product velocity.',
  achievements: [
    'Improved frontend performance by 40% through component optimization and focused rendering improvements.',
    'Accelerated release cycles by 30% with reusable architecture and cleaner implementation patterns.',
    'Reduced production state bugs by 60% through predictable Redux and TanStack Query data flows.',
    'Reduced UI development effort by 50% by creating reusable components and shared interaction patterns.',
    'Implemented RBAC flows and optimized APIs for safer, more reliable product operations.',
  ],
}

export const metrics = [
  { label: 'Frontend performance', value: '40%', tone: 'teal' },
  { label: 'Faster release cycles', value: '30%', tone: 'amber' },
  { label: 'Fewer state bugs', value: '60%', tone: 'sky' },
  { label: 'Less UI effort', value: '50%', tone: 'rose' },
] as const

export const projects = [
  {
    title: 'Enterprise Analytics Dashboard',
    description:
      'A production analytics interface for teams that need fast filtering, reliable data state, and clear operational visibility.',
    stack: ['React', 'TypeScript', 'TanStack Query', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    features: [
      'Metric-rich dashboards with reusable data display components.',
      'Optimized API integration and query caching for responsive analytics flows.',
      'Role-aware screens and cleaner state transitions for production users.',
    ],
    achievement: 'Improved data-heavy UI performance and reduced repeated implementation effort across dashboard screens.',
    accent: 'from-teal-500/20 via-sky-500/10 to-amber-400/20',
  },
  {
    title: 'Tripxing',
    description:
      'A full-stack travel product experience focused on smooth discovery flows, clean UI composition, and scalable backend operations.',
    stack: ['React', 'Redux', 'Express.js', 'MySQL', 'TypeORM', 'Tailwind CSS'],
    features: [
      'Responsive product workflows designed for repeated user actions.',
      'Reusable frontend modules for faster delivery across the travel experience.',
      'API and database work supporting reliable trip-related operations.',
    ],
    achievement: 'Created a more maintainable full-stack product surface with faster UI iteration.',
    accent: 'from-rose-500/20 via-amber-400/10 to-emerald-500/20',
  },
]

export const credentials = [
  {
    group: 'Education',
    items: ['B.E Computer Science', 'KCG College of Technology', 'CGPA: 8.5'],
    icon: ShieldCheck,
  },
  {
    group: 'Certifications',
    items: ['Complete Web Developer 2021 - Udemy', 'Blockchain Basics - Coursera'],
    icon: Boxes,
  },
  {
    group: 'Publication',
    items: ['IEEE - Secure Platform as a Service Using Blockchain Technology'],
    icon: Workflow,
  },
]
