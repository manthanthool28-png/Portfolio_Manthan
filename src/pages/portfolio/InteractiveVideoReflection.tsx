// src/pages/portfolio/InteractiveMediaReflectivePiece.tsx
import { Link } from 'react-router-dom'

export default function InteractiveMediaReflectivePiece() {
  return (
    <section className="w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-12">
        <Link
          to="/portfolio/interactive-media"
          className="text-emerald-100 hover:text-white text-sm uppercase tracking-wide"
        >
          ← Back to Interactive Media
        </Link>

        <div className="mt-6 grid gap-0 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.9fr)] bg-emerald-950/90 rounded-2xl overflow-hidden shadow-lg ring-1 ring-emerald-900/40">
          <div className="bg-emerald-900/95 px-8 sm:px-10 py-10 text-emerald-50 flex flex-col justify-between">
            <div>
              <h1 className="text-[clamp(2rem,4vw,3.25rem)] leading-tight font-extrabold tracking-tight uppercase max-w-[12ch]">
                Detachable Kaleidoscope
              </h1>

              <div className="mt-7 space-y-6 text-[13.5px] leading-relaxed">
                <div>
                  <h2 className="text-xs font-semibold tracking-[0.35em] uppercase text-emerald-100">
                    Overview
                  </h2>
                  <p className="mt-2 opacity-90">
                    A group interactive sculpture project combining physical making, sound, and digital response.
                  </p>
                </div>

                <div>
                  <h2 className="text-xs font-semibold tracking-[0.35em] uppercase text-emerald-100">
                    My contribution
                  </h2>
                  <p className="mt-2 opacity-90">
                    I developed the concept, completed the wiring, built the Arduino setup, created the Pure Data patch, and shaped the main interaction logic.
                  </p>
                </div>

                <div>
                  <h2 className="text-xs font-semibold tracking-[0.35em] uppercase text-emerald-100">
                    Reflection
                  </h2>
                  <p className="mt-2 opacity-90">
                    This project strengthened my understanding of how technical systems and creative ideas must work together. I was proud to help build the interactive core of the piece and support its final video presentation.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-emerald-700/60">
              <div className="text-xs uppercase tracking-[0.35em] text-emerald-200">
                By Manthan Thool
              </div>
            </div>
          </div>

          <div className="bg-emerald-50/95 p-6 flex flex-col items-center justify-center">
            <div className="w-full max-w-3xl rounded-lg overflow-hidden shadow-sm ring-1 ring-slate-200 bg-black">
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/QLhWnRbSY3s"
                title="Detachable Kaleidoscope Reflection Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <p className="mt-3 text-xs text-emerald-900/80">
              Watch the video and read the reflection alongside it.
            </p>

            <div className="mt-6 w-full max-w-3xl rounded-xl border border-emerald-900/10 bg-white/70 p-4 text-emerald-900">
              <h3 className="text-xs font-semibold tracking-[0.3em] uppercase text-emerald-900">
                Key responsibilities
              </h3>
              <ul className="mt-3 space-y-2 text-[13px] leading-relaxed">
                <li>Concept development.</li>
                <li>Wiring and Arduino setup.</li>
                <li>Pure Data patch and logic.</li>
                <li>Testing and refinement.</li>
                <li>Final video support.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}