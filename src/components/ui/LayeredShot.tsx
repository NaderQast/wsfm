import type { CSSProperties } from 'react'
import { IMAGE_SIZE } from '../../data/site'

type LayeredProps = {
  src: string
  alt: string
  objectPosition: string
  /** Clip-path and scroll classes on the wrapper, e.g. "shot cut scroll". */
  className?: string
  /** Extra style on the wrapper, e.g. { minHeight: '560px' }. */
  style?: CSSProperties
  eager?: boolean
}

const cover = (objectPosition: string): CSSProperties => ({ objectPosition })

/**
 * Grey base image, a navy tint, and the colour layer that washes in.
 * The design repeats this stack in the hero, the why-us panel and the work grid.
 */
export function LayeredShot({
  src,
  alt,
  objectPosition,
  className = 'shot',
  style,
  eager = false,
}: LayeredProps) {
  const size = IMAGE_SIZE[src]
  return (
    <figure className={className} style={style}>
      <img
        className="base"
        src={src}
        alt=""
        aria-hidden="true"
        width={size?.width}
        height={size?.height}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : undefined}
        decoding="async"
        style={cover(objectPosition)}
      />
      <span className="tint" aria-hidden="true" />
      <img
        className="top"
        src={src}
        alt={alt}
        width={size?.width}
        height={size?.height}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : undefined}
        decoding="async"
        style={cover(objectPosition)}
      />
    </figure>
  )
}

/**
 * Hero variant of the same stack: the colour layer is clipped by the pitch
 * and a light edge sweeps across it on load. Crop comes from the stylesheet.
 */
export function HeroPhoto({ src, alt }: { src: string; alt: string }) {
  const size = IMAGE_SIZE[src]
  return (
    <div className="hero-photo">
      <img
        className="base"
        src={src}
        alt=""
        aria-hidden="true"
        width={size?.width}
        height={size?.height}
        fetchPriority="high"
      />
      <span className="tint" aria-hidden="true" />
      <img
        className="reveal-top"
        src={src}
        alt={alt}
        width={size?.width}
        height={size?.height}
        fetchPriority="high"
      />
      <span className="wash-edge" aria-hidden="true" />
    </div>
  )
}
