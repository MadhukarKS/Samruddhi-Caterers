export function RollLabel({ children }: { children: string }) {
  return (
    <span className="relative inline-flex overflow-hidden leading-[1.2]">
      <span className="block transition-transform duration-700 ease-expo group-hover:-translate-y-full group-focus-visible:-translate-y-full">
        {children}
      </span>
      <span
        aria-hidden
        className="absolute inset-0 block translate-y-full transition-transform duration-700 ease-expo group-hover:translate-y-0 group-focus-visible:translate-y-0"
      >
        {children}
      </span>
    </span>
  )
}
