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

        <div className="mt-6 grid gap-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.55fr)] bg-emerald-950/90 rounded-2xl overflow-hidden shadow-lg ring-1 ring-emerald-900/40">
          {/* Left side */}
          <div className="bg-emerald-900/95 px-6 sm:px-8 py-10 text-emerald-50 flex flex-col justify-between min-w-0">
            <div>
              <h1 className="text-[clamp(1.9rem,3.2vw,3rem)] leading-[0.98] font-extrabold tracking-tight uppercase max-w-[10ch]">
                <span className="block">Detachable</span>
                <span className="block">Kaleidoscope</span>
              </h1>

              <div className="mt-7 space-y-6 text-[13.5px] leading-relaxed">
                <div>
                  <h2 className="text-xs font-semibold tracking-[0.35em] uppercase text-emerald-100">
                    Reflection
                  </h2>
                  <p className="mt-2 opacity-90">
                    Detachable Kaleidoscope was a group interactive sculpture project where I took responsibility for the core technical development of the piece. I worked on the concept, completed the full wiring, built the Arduino setup, developed the logic of the interaction, and created the Pure Data file that connected the physical system to its digital response.
                  </p>
                  <p className="mt-2 opacity-90">
                    A major part of my process was making the sculpture function reliably as a detachable and interactive object. This involved testing connections, refining the system logic, and solving practical issues between hardware and software so the experience felt smooth and intentional.
                  </p>
                  <p className="mt-2 opacity-90">
                    Because it was a group project, collaboration was important, but my main contribution was turning the idea into a working interactive system. I also helped create the final project video, which allowed us to present both the concept and the making process clearly.
                  </p>
                  <p className="mt-2 opacity-90">
                    This project strengthened my confidence in working across concept, electronics, coding, and presentation at the same time. It showed me how interactive design becomes most effective when the technical build and the creative idea are developed together.
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

          {/* Right side */}
          <div className="bg-emerald-50/95 p-4 sm:p-6 flex flex-col items-center justify-start min-w-0">
            <div className="w-full max-w-3xl rounded-lg overflow-hidden shadow-sm ring-1 ring-slate-200 bg-black">
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/QLhWnRbSY3s"
                title="Detachable Kaleidoscope Reflection Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <p className="mt-3 text-xs text-center text-emerald-900/80">
              Watch the video and read the reflection alongside it.
            </p>

            <div className="mt-6 w-full max-w-3xl rounded-xl border border-emerald-900/10 bg-white/70 p-4 text-emerald-900">
              <h3 className="text-xs font-semibold tracking-[0.35em] uppercase text-emerald-900">
                Key responsibilities
              </h3>
              <ul className="mt-3 space-y-2 list-disc pl-5 text-[13px] leading-relaxed">
                <li>Developed the project concept and technical direction.</li>
                <li>Completed the full wiring and Arduino setup.</li>
                <li>Built the Pure Data file and interaction logic.</li>
                <li>Tested and refined the system for reliable interaction.</li>
                <li>Supported the final video and project presentation.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}