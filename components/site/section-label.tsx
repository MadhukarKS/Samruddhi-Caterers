import { cn } from '@/lib/utils'

export function SectionLabel({
  index,
  children,
  className,
}: {
  index: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <p className={cn('flex items-center gap-3 text-xs uppercase tracking-[0.25em]', className)}>
      <span className="font-mono text-saffron">({index})</span>
      <span>{children}</span>
    </p>
  )
}
