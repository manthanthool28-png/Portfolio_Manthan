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
          {/* Left content */}
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
                    Detachable Kaleidoscope was a group interactive sculpture project that combined modular physical construction with digital interaction. The main aim was to create a playful object that could be assembled and experienced physically, while also responding through sound and system logic in a meaningful way.
                  </p>
                </div>

                <div>
                  <h2 className="text-xs font-semibold tracking-[0.35em] uppercase text-emerald-100">
                    My contribution
                  </h2>
                  <p className="mt-2 opacity-90">
                    My role focused heavily on the technical and interactive backbone of the project. I worked on developing the concept into a functional system, completed the wiring, built the full Arduino setup, created the Pure Data patch, and worked out the logic that connected the physical sculpture to its digital behaviour.
                  </p>
                  <p className="mt-2 opacity-90">
                    I was responsible for making sure the interaction was not just visually interesting, but also technically reliable. This involved connecting the hardware and software in a way that allowed the sculpture to respond clearly and consistently when used.
                  </p>
                </div>

                <div>
                  <h2 className="text-xs font-semibold tracking-[0.35em] uppercase text-emerald-100">
                    Process
                  </h2>
                  <p className="mt-2 opacity-90">
                    A large part of my process involved building the system from the inside out. Because the sculpture was detachable and modular, the wiring and logic had to support repeated assembly while still keeping the interaction stable. I spent time testing connections, refining the circuit layout, and solving issues between the Arduino setup and the Pure Data file so the whole experience worked as one system.
                  </p>
                  <p className="mt-2 opacity-90">
                    I also focused on how the technical structure could support the concept rather than sit separately from it. The coding and logic were important because they shaped the way the interaction was understood by the audience, helping the piece feel intentional instead of random.
                  </p>
                </div>

                <div>
                  <h2 className="text-xs font-semibold tracking-[0.35em] uppercase text-emerald-100">
                    Reflection
                  </h2>
                  <p className="mt-2 opacity-90">
                    This project taught me a lot about how interactive work depends on both concept and execution. It was not enough for the sculpture to look interesting; the electronics, coding, and interaction logic all had to support the same experience for the audience.
                  </p>
                  <p className="mt-2 opacity-90">
                    As this was a group project, collaboration was an important part of the final outcome, but my main contribution was turning the technical side of the idea into a working interactive piece. I handled the wiring, the Arduino setup, the Pure Data patch, the coding logic, and also contributed to the final video that documented and presented the project.
                  </p>
                  <p className="mt-2 opacity-90">
                    Looking back, I am most proud of creating the full interactive backbone of the piece. This project strengthened my confidence in working across concept development, physical computing, coding, and presentation, and showed me how rewarding it is to build an experience that is both tactile and responsive.
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

          {/* Right video */}
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
                <li>Concept development and interaction planning.</li>
                <li>Full wiring and Arduino setup.</li>
                <li>Pure Data patch and system logic.</li>
                <li>Testing, refinement, and technical problem solving.</li>
                <li>Support on the final project video and presentation.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}