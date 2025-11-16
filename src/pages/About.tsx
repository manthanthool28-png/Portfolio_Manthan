// src/pages/About.tsx
import illustration from '../assets/me.jpg'
const portrait = illustration as string

export default function About() {
  return (
    // Default/global background
    <div className="min-h-screen w-full">
      {/* Slightly reduced top padding under sticky nav */}
      <div className="pt-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-6">
          {/* Compact bottom gap so the footer is closer but not touching */}
          <section className="mb-6 rounded-2xl bg-white/90 backdrop-blur shadow-sm p-6 md:p-8 lg:p-10 text-slate-900">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Text column */}
              <div className="lg:col-span-7">
                <div className="md:pr-6 lg:pr-8">
                  <h1 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight">
                    <span className="block">ABOUT THE</span>
                    <span className="block">DESIGNER</span>
                  </h1>

                  <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-slate-700">
                    <p>
                      Hi I&apos;m Manthan. I&apos;m a UI Designer based in India with a background in theatre
                      and a deep love for color, emotion, and storytelling.
                    </p>
                    <p>
                      My toolkit spans pen & pencil sketches to digital platforms like Figma and the Adobe
                      Creative Suite. I enjoy blending hands‑on creativity with digital precision.
                    </p>
                  </div>

                  <div className="mt-5 flex items-center gap-5 text-slate-600">
                    <a href="#" aria-label="Instagram" className="inline-flex items-center justify-center hover:text-emerald-700">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5Zm10 2H7a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3Zm-5 3a5 5 0 110 10 5 5 0 010-10Zm5.5-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5Z"/></svg>
                    </a>
                    <a href="#" aria-label="LinkedIn" className="inline-flex items-center justify-center hover:text-emerald-700">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 11-.02 5.001 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20 8.65 21 11 21 14.23V21h-4v-5.8c0-1.38-.02-3.16-1.93-3.16-1.93 0-2.22 1.5-2.22 3.06V21H9z"/></svg>
                    </a>
                    <a href="#" aria-label="Mail" className="inline-flex items-center justify-center hover:text-emerald-700">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
                    </a>
                  </div>

                  <div className="mt-6 space-y-4">
                    {[
                      { title: 'TuteDude Design Hackathon', label: 'Winner', year: '2022' },
                      { title: 'Design Fusion Hackathon', label: 'Top 5', year: '2023' },
                      { title: 'IFP Design Hackathon', label: 'Top 20', year: '2024' },
                    ].map((a) => (
                      <div key={a.title} className="grid grid-cols-[1fr_auto] items-baseline gap-3">
                        <div>
                          <div className="font-semibold">{a.title}</div>
                          <div className="text-xs uppercase tracking-wider text-slate-600">{a.label}</div>
                        </div>
                        <div className="text-sm text-slate-500">{a.year}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image column */}
              <figure className="lg:col-span-5">
                <div className="lg:ml-2 xl:ml-4">
                  <img
                    src={portrait}
                    alt="Portrait"
                    className="w-full max-w-[560px] h-[460px] rounded-md shadow-md object-cover object-center"
                  />
                </div>
              </figure>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
