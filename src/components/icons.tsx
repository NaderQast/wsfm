import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = {
  'aria-hidden': true,
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

export function ChevronDown(props: IconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" strokeWidth={2.4} {...base} {...props}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

export function MenuIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" strokeWidth={2.2} {...base} {...props}>
      <path d="M5 8h14M5 16h14" />
    </svg>
  )
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" strokeWidth={2} {...base} {...props}>
      <path d="M5 3.5h4l2 5-2.5 1.5a11 11 0 0 0 5.5 5.5L15.5 13l5 2v4a1.5 1.5 0 0 1-1.5 1.5A16.5 16.5 0 0 1 3.5 5 1.5 1.5 0 0 1 5 3.5z" />
    </svg>
  )
}

export function PhoneSmall(props: IconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" strokeWidth={2} {...base} {...props}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2" />
    </svg>
  )
}

export function CameraIcon(props: IconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" strokeWidth={2} {...base} {...props}>
      <path d="M4 8h3l2-3h6l2 3h3v11H4z" />
      <circle cx="12" cy="13" r="3.5" />
    </svg>
  )
}

export function PinIcon(props: IconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" strokeWidth={2} {...base} {...props}>
      <path d="M12 21s-7-6.2-7-11.5A7 7 0 0119 9.5C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  )
}

export function InfoIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" strokeWidth={2} {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5M12 8h.01" />
    </svg>
  )
}

export function CheckIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" strokeWidth={2.6} {...base} {...props}>
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  )
}

export function BandChevron(props: IconProps) {
  return (
    <svg
      width="40"
      height="22"
      viewBox="0 0 40 22"
      fill="none"
      stroke="#C3CEDA"
      strokeWidth={3}
      strokeLinecap="square"
      aria-hidden="true"
      {...props}
    >
      <path d="M2 20L20 3l18 17" />
    </svg>
  )
}
