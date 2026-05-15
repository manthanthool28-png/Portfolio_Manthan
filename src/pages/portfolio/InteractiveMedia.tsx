// src/pages/portfolio/InteractiveMedia.tsx
import { Link } from 'react-router-dom'

export default function InteractiveMedia() {
  const projects = [
    {
      type: 'Performance Video',
      title: 'Algorithmic Soundscape',
      desc: 'A live algorithmic music performance using generative soundscapes. Watch how patterns evolve over time.',
      to: '/portfolio/interactive-media/soundscape',
    },
    {
      type: 'Reflective Piece',
      title: 'Personal Reflection',
      desc: 'A contemplative piece reflecting on the process, insights, and takeaways from the interactive performance project.',
      to: '/portfolio/interactive-media/reflective-piece',
    },
    {
      type: 'Detachable Kaleidoscope',
      title: 'Process Video & Reflection',
      desc: 'A dedicated page with the final video and a written reflection on my role, workflow, and what I learned from the project.',
      to: '/portfolio/interactive-media/video-reflection',
    },
  ]

  return (
    <section className="w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-12">
        <Link
          to="/portfolio"
          className="text-emerald-100 hover:text-white text-sm uppercase tracking-wide"
        >
          ← Back to Portfolio
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-12 items-start">
          <div className="lg:col-span-6">
            <div className="pt-2 pb-6 pr-6">
              <h1 className="text-[clamp(2rem,5.5vw,4.5rem)] font-extrabold leading-[1.02] tracking-tight uppercase text-emerald-50 max-w-[18ch]">
                <span className="block">Interactive</span>
                <span className="block">Media</span>
              </h1>
            </div>
          </div>

          <div className="lg:col-span-6 md:pl-4 lg:pl-6">
            <div className="h-px w-28 bg-emerald-100/60 mb-4" />
            <div className="space-y-5 text-[13.5px] leading-relaxed text-emerald-50/90">
              <div>
                <div className="font-semibold uppercase tracking-widest text-emerald-50">
                  Designed to be clicked
                </div>
                <p className="mt-2">
                  This section collects prototypes, motion pieces, and interactive visuals that invite people to tap, scroll, and explore—not just look.
                </p>
              </div>

              <div>
                <p>
                  Some of these pieces live in Figma, some are coded in the browser, and some combine animation with micro-interactions to make interfaces feel alive.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.title}
              to={project.to}
              className="rounded-xl bg-emerald-900/70 border border-emerald-700/60 p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/60 cursor-pointer"
            >
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
                  {project.type}
                </div>
                <h2 className="mt-3 text-lg font-semibold text-emerald-50">
                  {project.title}
                </h2>
                <p className="mt-2 text-[13px] text-emerald-100/85 leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="py-8 text-center text-emerald-100/80 text-xs">
          More interactive pieces coming soon.
        </div>
      </div>
    </section>
  )
}