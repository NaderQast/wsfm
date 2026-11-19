export const CONTACT = {
  phoneDisplay: '0451 022 405',
  phoneHref: 'tel:0451022405',
  email: 'admin@westernsydfacilitymaintenance.com.au',
}

/** Intrinsic pixel sizes so the browser can reserve space before load. */
export const IMAGE_SIZE: Record<string, { width: number; height: number }> = {
  '/assets/hero-industrial-washdown.jpg': { width: 1403, height: 791 },
  '/assets/service-commercial-lobby.jpg': { width: 632, height: 791 },
  '/assets/service-residential-stairwell.jpg': { width: 632, height: 791 },
  '/assets/service-hygiene-silicone.jpg': { width: 1030, height: 776 },
  '/assets/project-boardup.jpg': { width: 1031, height: 775 },
}

export const BRAND = {
  legalName: 'Western Sydney Facility Maintenance Pty Ltd',
  shortName: 'WSFM',
  abn: 'ABN 26 698 731 047',
  acn: 'ACN 698 731 047',
  year: 2026,
}

/**
 * Only the Home page is built. Destinations that land on a Home section point at
 * its anchor so every click does something. The rest keep the path they will get
 * when those pages exist, and are collected here so that swap is one edit.
 */
const ANCHORS: Record<string, string> = {
  home: '#top',
  services: '#services',
  about: '#about',
  government: '#government',
  projects: '#work',
  reviews: '#reviews',
  contact: '#contact',
  quote: '#quote',
  residential: '#services',
  commercial: '#services',
  industrial: '#services',
  hygiene: '#services',
  handover: '#services',
  handyman: '#services',
}

export function hrefFor(page: keyof typeof ANCHORS): string {
  return ANCHORS[page]
}

export type NavItem = { label: string; page: keyof typeof ANCHORS }

export const NAV: NavItem[] = [
  { label: 'Services', page: 'services' },
  { label: 'About', page: 'about' },
  { label: 'Government work', page: 'government' },
  { label: 'Projects', page: 'projects' },
  { label: 'Reviews', page: 'reviews' },
  { label: 'Contact', page: 'contact' },
]

export type ServiceLink = {
  title: string
  note: string
  page: keyof typeof ANCHORS
}

export const SERVICE_LINKS: ServiceLink[] = [
  {
    title: 'Residential services',
    note: 'Homes, apartments and residential portfolios',
    page: 'residential',
  },
  {
    title: 'Commercial services',
    note: 'Offices, retail, strata and managed buildings',
    page: 'commercial',
  },
  {
    title: 'Industrial services',
    note: 'Warehouses, depots and industrial sites',
    page: 'industrial',
  },
  {
    title: 'Hygiene services',
    note: 'Shared, high-touch and public-facing spaces',
    page: 'hygiene',
  },
  {
    title: 'Handover and fit-out cleans',
    note: 'Ready a property for its next stage of use',
    page: 'handover',
  },
  {
    title: 'Handyman and property maintenance',
    note: 'Board-ups, siliconing, make-safe, removals',
    page: 'handyman',
  },
  {
    title: 'All services',
    note: 'Everything WSFM does, on one page',
    page: 'services',
  },
]

export const HERO_PROOF = [
  'One point of contact for cleaning, hygiene and handyman work',
  'Every job checked, signed off and photo-documented',
  '87 suburbs on our regular list, from Western Sydney to Wollongong',
]

export const QUOTE_SERVICES = [
  'Wet-area siliconing',
  'Regular scheduled cleaning',
  'One-off or deep cleaning',
  'Hygiene services',
  'Board-ups',
  'Property make-safe works',
  'Minor property repairs',
  'Large item removal',
  'Property clearance',
  'Handover or fit-out clean',
  'Other or mixed scope',
]

export const QUOTE_PROPERTY_TYPES = [
  'Commercial',
  'Residential',
  'Industrial',
  'Strata',
  'Government',
]

export const BAND_LINKS: { label: string; page: keyof typeof ANCHORS }[] = [
  { label: 'Scheduled cleaning', page: 'services' },
  { label: 'Hygiene', page: 'hygiene' },
  { label: 'Board-ups', page: 'handyman' },
  { label: 'Wet-area siliconing', page: 'handyman' },
  { label: 'Make-safe works', page: 'handyman' },
  { label: 'Handover cleans', page: 'handover' },
  { label: 'Large item removals', page: 'handyman' },
  { label: 'Property clearances', page: 'handyman' },
  { label: 'Industrial washdowns', page: 'industrial' },
]

export type PhotoTile = {
  title: string
  note: string
  page: keyof typeof ANCHORS
  src: string
  alt: string
  objectPosition: string
}

export const BENTO_PHOTOS: PhotoTile[] = [
  {
    title: 'Industrial services',
    note: 'Warehouses, depots and industrial sites',
    page: 'industrial',
    src: '/assets/hero-industrial-washdown.jpg',
    alt: 'A worker pressure washes a warehouse loading dock at dawn',
    objectPosition: '70% 55%',
  },
  {
    title: 'Commercial services',
    note: 'Offices, retail, strata and managed buildings',
    page: 'commercial',
    src: '/assets/service-commercial-lobby.jpg',
    alt: 'A cleaner runs a floor scrubber across an office lobby',
    objectPosition: '55% 60%',
  },
  {
    title: 'Residential',
    note: 'Homes and residential portfolios',
    page: 'residential',
    src: '/assets/service-residential-stairwell.jpg',
    alt: 'A cleaner mops the steps of an apartment stairwell',
    objectPosition: '50% 30%',
  },
  {
    title: 'Hygiene',
    note: 'Shared and high-touch spaces',
    page: 'hygiene',
    src: '/assets/service-hygiene-silicone.jpg',
    alt: 'Gloved hands reseal a shower edge',
    objectPosition: '50% 50%',
  },
]

export const BENTO_HANDYMAN = {
  title: 'Handyman and property maintenance',
  page: 'handyman' as const,
  items: [
    'Board-ups',
    'Wet-area siliconing',
    'Make-safe works',
    'Minor repairs',
    'Large item removals',
    'Property clearances',
  ],
  more: 'Handyman services',
}

export const BENTO_HANDOVER = {
  title: 'Handover and fit-out cleans',
  page: 'handover' as const,
  body:
    'The detail clean that follows the trades and readies a property to be handed over, re-let or opened.',
  more: 'Handover cleans',
}

export const AUDIENCE = [
  {
    name: 'Residential',
    page: 'residential' as const,
    desc:
      'Homes, apartments and residential portfolios. Regular, one-off and deep cleaning with handyman support.',
    src: '/assets/service-residential-stairwell.jpg',
    objectPosition: '50% 30%',
  },
  {
    name: 'Commercial',
    page: 'commercial' as const,
    desc:
      'Offices, retail, strata and managed buildings. Scheduled cleaning, common areas and hygiene programs.',
    src: '/assets/service-commercial-lobby.jpg',
    objectPosition: '55% 60%',
  },
  {
    name: 'Industrial',
    page: 'industrial' as const,
    desc:
      'Warehouses, depots and industrial sites. Heavy-duty cleaning, external works and waste clearance.',
    src: '/assets/hero-industrial-washdown.jpg',
    objectPosition: '75% 55%',
  },
  {
    name: 'Government subcontracts',
    page: 'government' as const,
    desc:
      'Subcontracted cleaning, hygiene and maintenance scopes for a Tier 1 contract holder.',
    src: '/assets/project-boardup.jpg',
    objectPosition: '60% 40%',
  },
]

export const STORY_STEPS = [
  {
    title: 'Audit',
    body:
      'Tell us about the property. We review the scope and flag any safety or presentation issues to address.',
  },
  {
    title: 'Quote and plan',
    body:
      'We confirm the quote and, for ongoing work, set a maintenance plan and schedule.',
  },
  {
    title: 'Clean and maintain',
    body:
      'The agreed cleaning or maintenance work is carried out to a consistent standard.',
  },
  {
    title: 'QA inspection',
    body: 'A quality check confirms the work meets the agreed standard.',
  },
  {
    title: 'Sign-off and records',
    body: 'The job is signed off and you receive the photos and documentation.',
  },
]

export const GOV_EXPERIENCE = [
  'Cleaning services',
  'Hygiene-related services',
  'Board-ups',
  'Wet-area siliconing',
  'General handyman and property maintenance works',
  'Large item removals',
]

export const SPEC = [
  {
    term: 'Safety and compliance',
    detail:
      'Fewer hazards and a property that’s presentable for staff, visitors and inspections.',
  },
  {
    term: 'Longer asset life',
    detail:
      'Regular, professional upkeep protects surfaces, fixtures and fittings.',
  },
  {
    term: 'Consistent hygiene',
    detail: 'The same thorough standard of clean on every visit.',
  },
  {
    term: 'One point of contact',
    detail: 'Cleaning, hygiene, handyman and maintenance under one contact.',
  },
  {
    term: 'Clear communication',
    detail: 'Direct contact with people who can make a decision on your job.',
  },
]

export type WorkItem = {
  overline: string
  title: string
  body: string
  src: string
  alt: string
  objectPosition: string
}

export const WORK_MAIN: WorkItem = {
  overline: 'Industrial, Eastern Creek',
  title: 'Industrial warehouse sweep',
  body:
    'Heavy-duty floor clean and debris clearance across a large warehouse and loading dock.',
  src: '/assets/hero-industrial-washdown.jpg',
  alt: 'A worker pressure washes a warehouse loading dock',
  objectPosition: '75% 55%',
}

export const WORK_SIDE: WorkItem[] = [
  {
    overline: 'Commercial, Parramatta',
    title: 'Common-area and stairwell program',
    body: 'Scheduled cleaning across lobbies, stairwells and corridors.',
    src: '/assets/service-residential-stairwell.jpg',
    alt: 'A cleaner mops an apartment stairwell',
    objectPosition: '50% 35%',
  },
  {
    overline: 'Handyman, Blacktown',
    title: 'Wet-area silicone renewal',
    body:
      'Degraded silicone removed and the shower and bath perimeter resealed.',
    src: '/assets/service-hygiene-silicone.jpg',
    alt: 'Gloved hands reseal a shower edge with silicone',
    objectPosition: '50% 50%',
  },
  {
    overline: 'Handyman, Mt Druitt',
    title: 'Board-up and make-safe',
    body:
      'A damaged opening secured and make-safe works completed after a vacancy.',
    src: '/assets/project-boardup.jpg',
    alt: 'A worker fixes plywood over a window',
    objectPosition: '60% 40%',
  },
]

export const REVIEWS = ['[CLIENT REVIEW 1]', '[CLIENT REVIEW 2]', '[CLIENT REVIEW 3]']

export const COVERAGE = [
  { region: 'Western Sydney', count: 20 },
  { region: 'South-West Sydney', count: 16 },
  { region: 'Inner West', count: 13 },
  { region: 'Sydney Metro and Eastern Suburbs', count: 14 },
  { region: 'Sutherland and St George', count: 12 },
  { region: 'Wollongong and South Coast', count: 12 },
]

export const FOOTER_COLUMNS = [
  {
    heading: 'Services',
    links: [
      { label: 'All services', page: 'services' as const },
      { label: 'Residential services', page: 'residential' as const },
      { label: 'Commercial services', page: 'commercial' as const },
      { label: 'Industrial services', page: 'industrial' as const },
      { label: 'Hygiene services', page: 'hygiene' as const },
      { label: 'Handover and fit-out cleans', page: 'handover' as const },
      {
        label: 'Handyman and property maintenance',
        page: 'handyman' as const,
      },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About us', page: 'about' as const },
      { label: 'Government experience', page: 'government' as const },
      { label: 'Projects', page: 'projects' as const },
      { label: 'Reviews', page: 'reviews' as const },
      { label: 'Contact', page: 'contact' as const },
    ],
  },
]

export const SHEET_GROUPS = [
  {
    title: 'Services',
    links: SERVICE_LINKS.map((s) => ({ label: s.title, page: s.page })),
  },
  {
    title: 'Company',
    links: [
      { label: 'About us', page: 'about' as const },
      { label: 'Government work', page: 'government' as const },
      { label: 'Projects', page: 'projects' as const },
      { label: 'Reviews', page: 'reviews' as const },
      { label: 'Contact', page: 'contact' as const },
    ],
  },
]
