// src/pages/Home.tsx
import { Link } from 'react-router-dom'

export default function Home() {
  const handleScrollToProjects = () => {
    const el = document.getElementById('home-projects')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="w-full">
      {/* HERO */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-24">
        <div className="text-center animate-fade-in">
          <p className="text-xs font-semibold tracking-[0.3em] text-emerald-200 uppercase">
            UI/UX Designer 
          </p>

          <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
            Hi, I&apos;m Manthan Thool
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-emerald-100 text-lg">
            Designing and refining thoughtful user interfaces, focused on clean visuals, consistent systems, and intuitive user flows.
          </p>

          <p className="mt-3 text-sm text-emerald-200">
            Based in Limerick · Open to remote product and portfolio projects.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              to="portfolio"
              className="inline-flex items-center justify-center rounded-md bg-white text-emerald-900 px-5 py-3 font-semibold shadow-sm hover:bg-emerald-50 hover:-translate-y-0.5 transform transition"
            >
              View My Work
            </Link>
            <Link
              to="contact"
              className="inline-flex items-center justify-center rounded-md border border-emerald-200 text-white px-5 py-3 font-semibold hover:bg-white/10 hover:-translate-y-0.5 transform transition"
            >
              Contact
            </Link>
          </div>

          {/* scroll cue */}
          <button
            type="button"
            onClick={handleScrollToProjects}
            className="mt-10 inline-flex flex-col items-center text-emerald-100 text-xs tracking-[0.25em] uppercase hover:text-white transition animate-bounce-slow"
          >
            <span>Scroll to projects</span>
            <span className="mt-1 text-lg">⌄</span>
          </button>
        </div>
      </div>

      {/* SIMPLE HOME PROJECTS PREVIEW SECTION */}
      <div
        id="home-projects"
        className="container mx-auto px-4 sm:px-6 lg:px-10 pb-16 pt-4"
      >
        <h2 className="text-xl sm:text-2xl font-semibold text-white">
          Featured projects
        </h2>
        <p className="mt-2 text-sm text-emerald-100">
          A quick look at a few interfaces and visuals I&apos;ve been working on.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            to="portfolio"
            className="group rounded-xl border border-emerald-700/60 bg-emerald-900/40 p-4 hover:-translate-y-1 hover:border-emerald-400 hover:bg-emerald-900/70 transition transform"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-200">
              UI Design
            </p>
            <h3 className="mt-2 font-semibold text-white">
              Dashboard & web app layouts
            </h3>
            <p className="mt-2 text-sm text-emerald-100">
              Clean, component‑based screens focused on clarity and readability.
            </p>
            <span className="mt-3 inline-flex text-xs font-semibold text-emerald-300">
              View in portfolio →
            </span>
          </Link>

          <Link
            to="portfolio"
            className="group rounded-xl border border-emerald-700/60 bg-emerald-900/40 p-4 hover:-translate-y-1 hover:border-emerald-400 hover:bg-emerald-900/70 transition transform"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-200">
              Front‑end
            </p>
            <h3 className="mt-2 font-semibold text-white">
              React & TypeScript builds
            </h3>
            <p className="mt-2 text-sm text-emerald-100">
              Responsive interfaces wired with smooth navigation and state.
            </p>
            <span className="mt-3 inline-flex text-xs font-semibold text-emerald-300">
              View in portfolio →
            </span>
          </Link>

          <Link
            to="blog"
            className="group rounded-xl border border-emerald-700/60 bg-emerald-900/40 p-4 hover:-translate-y-1 hover:border-emerald-400 hover:bg-emerald-900/70 transition transform"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-200">
              Visuals
            </p>
            <h3 className="mt-2 font-semibold text-white">
              Photography & showreel
            </h3>
            <p className="mt-2 text-sm text-emerald-100">
              Shots and motion pieces that influence how interfaces feel.
            </p>
            <span className="mt-3 inline-flex text-xs font-semibold text-emerald-300">
              Visit blog →
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
