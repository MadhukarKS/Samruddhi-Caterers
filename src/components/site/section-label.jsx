import { cn } from '@/lib/utils.js'

export function SectionLabel({ index, children, className }) {
  return (
    <p className={cn('flex items-center gap-3 text-xs uppercase tracking-[0.25em]', className)}>
      <span className="font-mono text-saffron">({index})</span>
      <span>{children}</span>
    </p>
  )
}
