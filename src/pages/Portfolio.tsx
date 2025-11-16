// src/pages/Portfolio.tsx
import { Link } from 'react-router-dom'
import imgEvent from '../assets/Event.jpg'
import imgLandscape from '../assets/Landscape.jpg'
import imgTravel from '../assets/Portfolio.jpg'
import imgPortrait from '../assets/Portraits.jpg'

export default function Portfolio() {
  return (
    <section className="w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-12">
        {/* Header block */}
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Left: giant heading with padding and smaller clamp */}
          <div className="lg:col-span-6">
            <div className="mt-6 pt-2 pb-6 pr-6">
              <h1 className="text-[clamp(2rem,6.2vw,5.25rem)] font-extrabold leading-[1.02] tracking-tight uppercase text-emerald-50 max-w-[18ch]">
                <span className="block">Portfolio</span>
                <span className="block">Highlights</span>
              </h1>
            </div>
          </div>

          {/* Right: content */}
          <div className="lg:col-span-6 md:pl-4 lg:pl-6">
            <div className="h-px w-28 bg-emerald-100/60 mb-4" />
            <div className="space-y-6 text-[13.5px] leading-relaxed text-emerald-50/90">
              <div>
                <div className="font-semibold uppercase tracking-widest text-emerald-50">Creating with clarity</div>
                <p className="mt-2">
                  UI Design, Photography, Videography, and Events. Four ways I tell stories with intention.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <div className="font-semibold uppercase tracking-widest text-emerald-50">UI Design</div>
                  <p className="mt-2">It consist of Case studies, Typography, and clickable prototypes .</p>
                </div>
                <div>
                  <div className="font-semibold uppercase tracking-widest text-emerald-50">Photography</div>
                  <p className="mt-2">I’ve captured aesthetic moments, wide open landscapes, and professional headshots.</p>
                </div>
                <div>
                  <div className="font-semibold uppercase tracking-widest text-emerald-50">Videography</div>
                  <p className="mt-2">I’ve created short films, choreographed dance videos, and fast paced travel reels.</p>
                </div>
                <div>
                  <div className="font-semibold uppercase tracking-widest text-emerald-50">Events</div>
                  <p className="mt-2">A glimpse of the events I’ve volunteered at and organized.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cards row (white cards with emerald headers) */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            { img: imgEvent, tag: 'UI Design', num: '01', to: '/portfolio/ui-design' },
            { img: imgLandscape, tag: 'Photography', num: '02', to: '/portfolio/photography' },
            { img: imgTravel, tag: 'Videography', num: '03', to: '/portfolio/videography' },
            { img: imgPortrait, tag: 'Events', num: '04', to: '/portfolio/events' },
          ].map((c) => (
            <Link
              key={c.num}
              to={c.to}
              className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-emerald-800 rounded-md"
            >
              <article className="rounded-md bg-white text-emerald-900 shadow-sm ring-1 ring-emerald-900/5 overflow-hidden transition-transform duration-200 ease-out group-hover:-translate-y-1 group-hover:shadow-lg group-hover:ring-emerald-300/60">
                <div className="flex items-center justify-between px-4 py-3 bg-emerald-50 border-b border-emerald-200/70">
                  <div className="font-extrabold uppercase tracking-widest text-emerald-800">{c.tag}</div>
                  <div className="font-extrabold text-emerald-700">{c.num}</div>
                </div>
                <div className="h-[220px] w-full">
                  <img
                    src={c.img}
                    alt={c.tag}
                    className="h-full w-full object-cover transition-transform duration-200 ease-out group-hover:scale-[1.02]"
                  />
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* page number / marker */}
        <div className="py-8 text-center text-emerald-100/80"></div>
      </div>
    </section>
  )
}
