import { Reveal } from './Reveal'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
  inverse?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  inverse = false,
}: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
      <p className="mb-3 text-sm font-semibold uppercase text-teal-700 dark:text-teal-300">
        {eyebrow}
      </p>
      <h2 className={inverse ? 'text-3xl font-semibold text-white sm:text-4xl' : 'text-3xl font-semibold text-stone-950 sm:text-4xl dark:text-white'}>
        {title}
      </h2>
      <p className={inverse ? 'mt-4 text-base leading-7 text-stone-300' : 'mt-4 text-base leading-7 text-stone-600 dark:text-stone-300'}>
        {description}
      </p>
    </Reveal>
  )
}
