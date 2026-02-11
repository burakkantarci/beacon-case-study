import { useEffect, useMemo, useState } from 'react'

export type TocItem = {
  id: string
  label: string
  variant?: 'section' | 'child'
}

type TableOfContentsProps = {
  items: TocItem[]
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '')
  const [sectionProgress, setSectionProgress] = useState<Record<string, number>>({})
  const ids = useMemo(() => items.map((item) => item.id), [items])

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => node !== null)

    if (sections.length === 0) {
      return
    }

    const updateActiveSection = () => {
      const activationOffset = window.innerHeight * 0.35
      const activationLine = window.scrollY + activationOffset
      const maxActivationLine =
        document.documentElement.scrollHeight - window.innerHeight + activationOffset
      const nextProgress: Record<string, number> = {}
      let currentSectionId = sections[0].id

      for (let index = 0; index < sections.length; index += 1) {
        const section = sections[index]
        const nextSection = sections[index + 1]
        const sectionStart = section.getBoundingClientRect().top + window.scrollY
        const sectionEnd = nextSection
          ? nextSection.getBoundingClientRect().top + window.scrollY
          : maxActivationLine
        const sectionLength = Math.max(sectionEnd - sectionStart, 1)
        const progress = Math.min(Math.max((activationLine - sectionStart) / sectionLength, 0), 1)

        nextProgress[section.id] = progress

        if (activationLine >= sectionStart) {
          currentSectionId = section.id
        } else {
          break
        }
      }

      setActiveId(currentSectionId)
      setSectionProgress(nextProgress)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [ids])

  return (
    <nav
      aria-label="Page table of contents"
      className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 rounded-2xl border border-fog/10 bg-coal/80 px-3 py-4 backdrop-blur-sm xl:block"
    >
      <p className="px-2 font-mono text-[10px] uppercase tracking-[0.2em] text-sand/80">Contents</p>
      <ul className="mt-2 space-y-1.5">
        {items.map((item) => {
          const isActive = activeId === item.id
          const isSection = item.variant === 'section'
          const isChild = item.variant === 'child'
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`relative flex items-center overflow-hidden rounded-lg px-2 py-1.5 text-xs transition ${
                  isSection
                    ? isActive
                      ? 'font-mono uppercase tracking-[0.14em] text-fog'
                      : 'font-mono uppercase tracking-[0.14em] text-fog/60 hover:bg-fog/5 hover:text-fog/90'
                    : isChild
                      ? isActive
                        ? 'gap-2 pl-4 text-fog'
                        : 'gap-2 pl-4 text-fog/65 hover:bg-fog/5 hover:text-fog/90'
                      : isActive
                        ? 'gap-2 text-fog'
                        : 'gap-2 text-fog/65 hover:bg-fog/5 hover:text-fog/90'
                }`}
              >
                <span
                  className="pointer-events-none absolute inset-y-0 left-0 rounded-lg bg-fog/10"
                  style={{ width: `${(sectionProgress[item.id] ?? 0) * 100}%` }}
                />
                {!isSection && (
                  <span
                    className={`relative z-10 h-1.5 w-1.5 rounded-full ${
                      isChild
                        ? isActive
                          ? 'border border-signal bg-transparent'
                          : 'border border-fog/45 bg-transparent'
                        : isActive
                          ? 'bg-signal'
                          : 'bg-fog/35'
                    }`}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
