import type { ReactNode } from 'react'

/**
 * Elegant modern frame around a painting — warm mat, fine gold edge,
 * deep soft shadow lifting it off the teal ground.
 */
export default function ArtworkFrame({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[#fdfbf6] border border-[#c8b088] p-2.5 sm:p-3.5 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.85)]">
      <div className="border border-[#cbbfa4] overflow-hidden">{children}</div>
    </div>
  )
}
