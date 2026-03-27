// src/pages/EventsPage.tsx
import { Link } from 'react-router-dom'

const events = [
  {
    name: 'Campus Tech Fest',
    role: 'Photography & video coverage',
    location: 'University auditorium',
    year: '2024',
    notes:
      'Captured crowd energy, speakers on stage, and behind‑the‑scenes setup moments.',
  },
  {
    name: 'Dance Showcase Night',
    role: 'Videographer',
    location: 'Student centre',
    year: '2023',
    notes:
      'Multi‑angle coverage of performances with quick highlight edits for social media.',
  },
]

export default function EventsPage() {
  return (
    <section className="w-full min-h-screen bg-emerald-950 text-emerald-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-12 space-y-8">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.35em] uppercase text-emerald-300">
              Portfolio · 04
            </p>
            <h1 className="mt-2 text-3xl md:text-4xl font-extrabold uppercase">
              Events
            </h1>
            <p className="mt-3 max-w-xl text-sm text-emerald-100/80">
              A glimpse into the events I have volunteered at or covered with
              photo and video.
            </p>
          </div>
          <Link
            to="/portfolio"
            className="text-xs uppercase tracking-[0.25em] text-emerald-200 hover:text-white"
          >
            ← Back
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {events.map((e) => (
            <article
              key={e.name}
              className="rounded-2xl bg-emerald-900/70 p-5 border border-emerald-800/60"
            >
              <header className="flex items-baseline justify-between gap-2">
                <h2 className="text-lg font-semibold">{e.name}</h2>
                <span className="text-xs text-emerald-300">{e.year}</span>
              </header>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-emerald-300">
                {e.location} · {e.role}
              </p>
              <p className="mt-3 text-sm text-emerald-100/85">{e.notes}</p>
              <p className="mt-4 text-xs text-emerald-200/80">
                Space for 2–3 highlight photos or a short recap video.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
