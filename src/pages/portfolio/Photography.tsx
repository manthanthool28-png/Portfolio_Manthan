// src/pages/portfolio/Photography.tsx
import { Link } from 'react-router-dom'
import AestheticImg from '../../assets/Aesthetic.jpg'
import WorkspaceImg from '../../assets/p2.jpg'

const HeadshotImg = `${import.meta.env.BASE_URL}assets/h3.jpg`

const photoProjects = [
  {
    title: 'Aesthetic Shots',
    location: 'University of Limerick',
    thumb: AestheticImg,
    description:
      'Arched ceilings, long passages, and soft light that turns everyday architecture into calm frames.',
  },
  {
    title: 'Professional Headshots',
    location: 'UL · CS Building',
    thumb: HeadshotImg,
    description:
      'Clean, grayscale portraits focused on expression, posture, and quiet confidence.',
  },
  {
    title: 'Passion in Life',
    location: 'Cappavilla Village',
    thumb: WorkspaceImg,
    description:
      'A warm desk scene that shows the tools, screens, and little objects that power my late‑night work.',
  },
]

export default function Photography() {
  return (
    <section className="w-full min-h-screen bg-emerald-950 text-emerald-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-12">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.35em] uppercase text-emerald-300">
              Portfolio · 02
            </p>
            <h1 className="mt-2 text-3xl md:text-4xl font-extrabold uppercase">
              Photography
            </h1>
            <p className="mt-3 max-w-xl text-sm text-emerald-100/80">
              A mix of aesthetic corridors, portraits, and personal spaces that
              rely on light and depth more than heavy editing.
            </p>
          </div>
          <Link
            to="/portfolio"
            className="text-xs uppercase tracking-[0.25em] text-emerald-200 hover:text-white"
          >
            ← Back
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {photoProjects.map((p) => (
            <figure
              key={p.title}
              className="group rounded-2xl bg-emerald-900/70 border border-emerald-800/60 overflow-hidden hover:-translate-y-1 hover:shadow-lg transition"
            >
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img
                  src={p.thumb}
                  alt={p.title}
                  className="h-full w-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-200"
                />
              </div>
              <figcaption className="p-4 space-y-1">
                <h2 className="font-semibold text-sm">{p.title}</h2>
                <p className="text-[11px] uppercase tracking-[0.2em] text-emerald-300">
                  {p.location}
                </p>
                <p className="text-xs text-emerald-100/80">{p.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
