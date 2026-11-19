import type { CSSProperties } from 'react'

/** Styles the artboard wrote inline, kept as React style objects. */
export function styleObject(style: Record<string, string | number>): CSSProperties {
  return style as CSSProperties
}
