// src/pages/portfolio/Videography.tsx
import { Link } from 'react-router-dom'

const videoProjects = [
  {
    title: 'Stik‑ie Tape Ad',
    type: 'Short film · 1:24',
    role: 'Direction · Cinematography · Editor',
    thumb: 'assets/showreel-thumb.jpg',
    url: 'https://youtu.be/ig9jZU4F1Nw',  // optional
  },
  {
    title: 'UL Diwali Festival 2025',
    type: 'Reel · 0:40',
    role: 'Editor · Transitions',
    thumb: 'assets/Diwali.JPG',
    url: 'https://youtube.com/shorts/bHJ34gBbPQU?feature=share',
  },
]

export default function Videography() {
  return (
    <section className="w-full min-h-screen bg-emerald-950 text-emerald-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-12">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.35em] uppercase text-emerald-300">
              Portfolio · 03
            </p>
            <h1 className="mt-2 text-3xl md:text-4xl font-extrabold uppercase">
              Videography
            </h1>
            <p className="mt-3 max-w-xl text-sm text-emerald-100/80">
              Short films, reels, and event videos that focus on pacing, camera
              movement, and storytelling in the edit.
            </p>
          </div>
          <Link
            to="/portfolio"
            className="text-xs uppercase tracking-[0.25em] text-emerald-200 hover:text-white"
          >
            ← Back
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {videoProjects.map((v) => (
            <article
              key={v.title}
              className="group rounded-2xl bg-emerald-900/70 border border-emerald-800/60 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
            >
              <div className="aspect-video w-full bg-black overflow-hidden">
                <img
                  src={v.thumb}
                  alt={v.title}
                  className="h-full w-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-200"
                />
              </div>
              <div className="p-4 space-y-2">
                <h2 className="font-semibold text-lg">{v.title}</h2>
                <p className="text-xs text-emerald-300">{v.type}</p>
                <p className="text-xs text-emerald-200/80">{v.role}</p>
                {v.url && (
                  <a
                    href={v.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-emerald-300 hover:text-emerald-100"
                  >
                    Watch video →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
