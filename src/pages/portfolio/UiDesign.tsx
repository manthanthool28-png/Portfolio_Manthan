// src/pages/UiDesignPage.tsx
import { Link } from 'react-router-dom'

type UiProject = {
  title: string
  role: string
  year: string
  summary: string
  cover: string
  liveUrl?: string
  caseStudyUrl?: string
  tags: string[]
  embedType?: 'figma' | 'iframe'
  embedSrc?: string
}

const uiProjects: UiProject[] = [
  {
    title: 'Nom nom – Recipe Planner',
    role: 'Product design · Mobile app',
    year: '2025',
    summary:
      'Helps students plan meals, reuse ingredients, and reduce food waste with a calm, mobile‑first flow.',
    cover: '/ui/nu-thumb.jpg',
    liveUrl: 'https://www.figma.com/file/your-nu-link',
    caseStudyUrl: 'https://www.behance.net/gallery/your-nu-case-study',
    tags: ['Mobile', 'Product thinking', 'Prototype'],
    embedType: 'figma',
    embedSrc:
      'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/your-nu-link',
  },
  {
    title: 'Travel Stories Landing',
    role: 'Marketing site · Web',
    year: '2024',
    summary:
      'A landing page for a travel brand with bold type and story‑driven sections.',
    cover: '/ui/travel-thumb.jpg',
    liveUrl: 'https://www.figma.com/file/your-travel-link',
    tags: ['Web', 'Landing page', 'Layout'],
  },
  {
    title: 'Box Office Dashboard',
    role: 'Analytics dashboard',
    year: '2024',
    summary:
      'Ticket sales, seat maps, and revenue in a compact, dark‑theme dashboard.',
    cover: '/ui/boxoffice-thumb.jpg',
    liveUrl: 'https://www.behance.net/gallery/your-boxoffice-case',
    tags: ['Dashboard', 'Data viz', 'Dark theme'],
  },
  {
    title: 'Portfolio Home Concept',
    role: 'Personal site · Concept',
    year: '2023',
    summary:
      'A home page and grid that inspired this portfolio layout.',
    cover: '/ui/portfolio-home-thumb.jpg',
    liveUrl: 'https://www.figma.com/file/your-portfolio-home',
    caseStudyUrl: 'https://www.behance.net/gallery/your-portfolio-home',
    tags: ['Concept', 'Grid', 'Hero section'],
    embedType: 'figma',
    embedSrc:
      'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/your-portfolio-home',
  },
  {
    title: 'Dance Class Booking',
    role: 'End‑to‑end booking flow',
    year: '2023',
    summary:
      'Onboarding and booking for a dance studio, designed around speed and clarity.',
    cover: '/ui/dance-thumb.jpg',
    liveUrl: 'https://www.figma.com/file/your-dance-link',
    tags: ['Flow', 'Onboarding', 'Mobile'],
  },
  {
    title: 'Event Highlights Microsite',
    role: 'One‑page event site',
    year: '2022',
    summary:
      'A microsite to showcase speakers, schedule, and media for a campus event.',
    cover: '/ui/events-thumb.jpg',
    liveUrl: 'https://www.behance.net/gallery/your-events-microsite',
    tags: ['Microsite', 'Events', 'Responsive'],
  },
]

const uiLinks = [
  {
    label: 'Behance – UI & product collection',
    href: 'https://www.behance.net/manthanthool',
  },
  {
    label: 'Figma – Selected prototypes',
    href: 'https://www.figma.com/@manthanthool',
  },
  {
    label: 'View / download resume (PDF)',
    href: 'https://your-site.com/files/Manthan_UI_Resume.pdf',
  },
]


export default function UiDesignPage() {
  return (
    <section className="w-full min-h-screen bg-emerald-950 text-emerald-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-12 space-y-10">
        {/* Header */}
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.35em] uppercase text-emerald-300">
              Portfolio . 01
            </p>
            <h1 className="mt-2 text-3xl md:text-4xl font-extrabold uppercase">
              UI Design
            </h1>
            <p className="mt-3 max-w-xl text-sm text-emerald-100/80">
              Case studies, flows, and interactive prototypes – some embedded
              directly on this page so you can click through them.
            </p>
          </div>
          <Link
            to="/portfolio"
            className="text-xs uppercase tracking-[0.25em] text-emerald-200 hover:text-white"
          >
            ← Back
          </Link>
        </div>

        {/* Top row: featured + links */}
        <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="rounded-2xl bg-emerald-900/70 p-6 border border-emerald-700/40">
            <p className="text-xs tracking-[0.3em] uppercase text-emerald-300">
              Featured case study
            </p>
            <h2 className="mt-2 text-xl font-semibold">
              Nu – Recipe Planner App
            </h2>
            <p className="mt-2 text-sm text-emerald-100/85">
              A calm, mobile‑first experience for planning meals and tracking
              ingredients. Designed around single‑handed use, clear hierarchy,
              and minimal friction.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2 text-[11px] text-emerald-50/90">
              <li className="rounded-full bg-emerald-700/60 px-3 py-1">
                Product thinking
              </li>
              <li className="rounded-full bg-emerald-700/60 px-3 py-1">
                Interaction design
              </li>
              <li className="rounded-full bg-emerald-700/60 px-3 py-1">
                High‑fidelity prototype
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-emerald-900/40 p-5 border border-emerald-800/40">
            <p className="text-xs tracking-[0.3em] uppercase text-emerald-300">
              Links & resources
            </p>
            <ul className="mt-3 space-y-3 text-sm">
              {uiLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-between w-full rounded-lg bg-emerald-950/40 px-3 py-2 border border-emerald-800/60 hover:bg-emerald-900/80 transition"
                  >
                    <span>{l.label}</span>
                    <span className="text-xs text-emerald-300">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Projects grid */}
        <div className="space-y-3">
          <p className="text-xs tracking-[0.3em] uppercase text-emerald-300">
            Selected projects
          </p>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {uiProjects.map((p) => (
              <article
                key={p.title}
                className="group rounded-2xl bg-emerald-900/70 border border-emerald-800/60 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
              >
                {p.embedType && p.embedSrc ? (
                  <div className="aspect-[4/3] w-full bg-emerald-950 overflow-hidden">
                    <iframe
                      src={p.embedSrc}
                      title={p.title}
                      className="w-full h-full border-0"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="aspect-video w-full bg-emerald-950 overflow-hidden">
                    <img
                      src={p.cover}
                      alt={p.title}
                      className="h-full w-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-200"
                    />
                  </div>
                )}

                <div className="p-4 space-y-2">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-semibold text-base md:text-lg">
                      {p.title}
                    </h3>
                    <span className="text-[11px] text-emerald-300">
                      {p.year}
                    </span>
                  </div>
                  <p className="text-xs text-emerald-300">{p.role}</p>
                  <p className="text-sm text-emerald-100/85">{p.summary}</p>

                  <div className="mt-2 flex flex-wrap gap-1.5 text-[10px]">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-emerald-800/70 px-2 py-0.5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-3 flex flex-wrap gap-3 text-sm">
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-emerald-300 hover:text-emerald-100"
                      >
                        Open prototype →
                      </a>
                    )}
                    {p.caseStudyUrl && (
                      <a
                        href={p.caseStudyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-emerald-300/80 hover:text-emerald-100"
                      >
                        View Behance
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
