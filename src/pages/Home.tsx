// src/pages/Home.tsx
export default function Home() {
  return (
    <section className="w-full">
      {/* Use global background only */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-24">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
            Hi, I&apos;m Manthan Thool
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-emerald-100 text-lg">
            Web Developer focused on React, TypeScript, and delightful UX.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-md bg-white text-emerald-900 px-5 py-3 font-semibold shadow-sm hover:bg-emerald-50 transition"
            >
              View My Work
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-emerald-200 text-white px-5 py-3 font-semibold hover:bg-white/10 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Compact spacer so footer isn’t glued to hero */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-10" />
    </section>
  )
}
