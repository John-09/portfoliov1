import { cn } from '../lib/utils'

const toneClasses = {
  teal: 'border-teal-500/30 bg-teal-500/10 text-teal-700 dark:text-teal-200',
  amber: 'border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-200',
  sky: 'border-sky-500/30 bg-sky-500/10 text-sky-700 dark:text-sky-200',
  rose: 'border-rose-500/30 bg-rose-500/10 text-rose-700 dark:text-rose-200',
}

type MetricCardProps = {
  value: string
  label: string
  tone: keyof typeof toneClasses
}

export function MetricCard({ value, label, tone }: MetricCardProps) {
  return (
    <div
      className={cn(
        'rounded-lg border p-4 shadow-sm backdrop-blur-sm',
        toneClasses[tone],
      )}
    >
      <p className="text-3xl font-semibold">{value}</p>
      <p className="mt-2 text-sm font-medium text-stone-600 dark:text-stone-300">
        {label}
      </p>
    </div>
  )
}
