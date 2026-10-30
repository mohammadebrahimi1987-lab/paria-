import { useCallback, useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react'
import { createPortal } from 'react-dom'
import type { Artwork } from '@/content'
import { content } from '@/content'
import { useLanguage, useT } from '@/hooks/useLanguage'

export interface LightboxState {
  artworks: Artwork[]
  index: number
}

interface LightboxProps {
  state: LightboxState | null
  onClose: () => void
  onNavigate: (index: number) => void
}

export default function Lightbox({ state, onClose, onNavigate }: LightboxProps) {
  const t = useT()
  const { lang } = useLanguage()
  const [visible, setVisible] = useState(false)
  const [dragX, setDragX] = useState(0)
  const [dragging, setDragging] = useState(false)
  const gesture = useRef({
    pointerId: -1,
    startX: 0,
    startY: 0,
    currentX: 0,
    axis: 'unknown' as 'unknown' | 'x' | 'y',
  })

  const open = state !== null
  const count = state?.artworks.length ?? 0

  const prev = useCallback(() => {
    if (!state) return
    onNavigate((state.index - 1 + count) % count)
  }, [state, count, onNavigate])

  const next = useCallback(() => {
    if (!state) return
    onNavigate((state.index + 1) % count)
  }, [state, count, onNavigate])

  useEffect(() => {
    if (open) {
      setVisible(true)
      document.body.style.overflow = 'hidden'
      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose()
        if (e.key === 'ArrowLeft') prev()
        if (e.key === 'ArrowRight') next()
      }
      window.addEventListener('keydown', onKey)
      return () => {
        window.removeEventListener('keydown', onKey)
        document.body.style.overflow = ''
      }
    } else {
      setVisible(false)
    }
  }, [open, onClose, prev, next])

  /* Reset the gesture whenever another artwork is shown. */
  useEffect(() => {
    setDragX(0)
    setDragging(false)
    gesture.current.axis = 'unknown'
  }, [state?.index])

  if (!state) return null
  const art = state.artworks[state.index]

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return
    gesture.current = {
      pointerId: e.pointerId,
      startX: e.clientX,
      startY: e.clientY,
      currentX: e.clientX,
      axis: 'unknown',
    }
    e.currentTarget.setPointerCapture(e.pointerId)
    setDragging(true)
  }

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const g = gesture.current
    if (g.pointerId !== e.pointerId) return
    g.currentX = e.clientX
    const dx = e.clientX - g.startX
    const dy = e.clientY - g.startY

    /* Decide the direction only after a small movement, so a vertical
       touch scroll is never mistaken for an artwork swipe. */
    if (g.axis === 'unknown' && Math.hypot(dx, dy) > 8) {
      g.axis = Math.abs(dx) > Math.abs(dy) * 1.15 ? 'x' : 'y'
    }
    if (g.axis === 'x') {
      if (e.cancelable) e.preventDefault()
      setDragX(dx)
    }
  }

  const finishGesture = (e: ReactPointerEvent<HTMLDivElement>, cancelled = false) => {
    const g = gesture.current
    if (g.pointerId !== e.pointerId) return
    const dx = g.currentX - g.startX
    const threshold = Math.max(48, Math.min(90, window.innerWidth * 0.16))

    if (!cancelled && g.axis === 'x' && Math.abs(dx) >= threshold) {
      if (dx < 0) next()
      else prev()
    }

    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId)
    }
    gesture.current.pointerId = -1
    gesture.current.axis = 'unknown'
    setDragX(0)
    setDragging(false)
  }

  return createPortal(
    <div
      className={`lightbox-fade fixed inset-0 z-50 bg-paper-3 flex flex-col ${visible ? 'opacity-100' : 'opacity-0'}`}
      role="dialog"
      aria-modal="true"
      aria-label={t(art.title)}
    >
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-5 sm:px-8 h-[72px] shrink-0 text-ink/85"
        style={{ paddingTop: 'env(safe-area-inset-top)' }}
      >
        <span className="text-[11px] tracking-[0.3em]">
          {String(state.index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
        </span>
        <button
          onClick={onClose}
          aria-label={t(content.ui.close)}
          className="flex items-center gap-3 min-h-[44px] min-w-[44px] justify-end text-[11px] tracking-[0.3em] uppercase hover:text-ink active:text-ink transition-colors"
        >
          <span className="hidden sm:inline">{t(content.ui.close)}</span>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 4 L18 18 M18 4 L4 18" />
          </svg>
        </button>
      </div>

      {/* Image: click zones on desktop, direct swipe/drag on every device */}
      <div className="relative flex-1 min-h-0 flex">
        <button className="cursor-zone-prev hidden md:block w-[18%] shrink-0" onClick={prev} aria-label={t(content.ui.prev)} />
        <div
          className={`flex-1 min-w-0 flex items-center justify-center p-2 sm:p-4 overflow-hidden select-none ${
            dragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{ touchAction: 'pan-y' }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={(e) => finishGesture(e)}
          onPointerCancel={(e) => finishGesture(e, true)}
        >
          <div
            className="flex h-full w-full items-center justify-center"
            style={{
              transform: `translate3d(${dragX}px, 0, 0)`,
              transition: dragging ? 'none' : 'transform 350ms cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            <img
              key={art.src}
              src={art.src}
              alt={t(art.title)}
              className="lightbox-fade max-h-full max-w-full object-contain pointer-events-none"
              draggable={false}
            />
          </div>
        </div>
        <button className="cursor-zone-next hidden md:block w-[18%] shrink-0" onClick={next} aria-label={t(content.ui.next)} />
      </div>

      {/* Caption + mobile arrows */}
      <div
        className="shrink-0 px-5 sm:px-8 pt-4 flex items-end justify-between gap-6 text-ink"
        style={{ paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom))' }}
      >
        <div>
          <p className={`font-light text-lg sm:text-xl ${lang === 'zh' ? 'serif-zh tracking-[0.06em]' : 'serif-latin italic'}`}>
            {t(art.title)}
          </p>
          <p className="mt-1 text-[12px] tracking-[0.12em] text-ink-soft">
            {t(art.medium)} · {art.size}
          </p>
          <p className="md:hidden mt-2 text-[10px] tracking-[0.18em] uppercase text-ink-soft/65">
            {t({ en: '← Swipe to browse →', zh: '← 左右滑动浏览 →' })}
          </p>
        </div>
        <div className="flex md:hidden gap-2">
          <button
            onClick={prev}
            aria-label={t(content.ui.prev)}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center border border-ink/30 transition-transform active:scale-90"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 5 L8 12 L15 19" /></svg>
          </button>
          <button
            onClick={next}
            aria-label={t(content.ui.next)}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center border border-ink/30 transition-transform active:scale-90"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 5 L16 12 L9 19" /></svg>
          </button>
        </div>
      </div>
    </div>,
    document.body,
  )
}
