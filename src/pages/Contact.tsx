// src/pages/Contact.tsx
import ContactPhoto from '../assets/contact-photo.jpg' // change to your image path

export default function Contact() {
  return (
    <section className="w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.6fr)] items-center">
          {/* LEFT: big CONTACT ME + info */}
          <div>
            <h1 className="leading-none font-extrabold text-emerald-50">
              <span className="block text-[clamp(3.2rem,8vw,4.5rem)]">
                CONTACT
              </span>
              <span className="block text-[clamp(3.2rem,8vw,4.5rem)] mt-1">
                ME
              </span>
            </h1>

            <div className="mt-8 space-y-3 text-sm text-emerald-50">
              <div>
                <span className="font-semibold tracking-[0.25em] uppercase text-emerald-200 text-[11px]">
                  Email
                </span>
                <p className="mt-1 text-[14px]">manthanthool28@gmail.com</p>
              </div>

              <div>
                <span className="font-semibold tracking-[0.25em] uppercase text-emerald-200 text-[11px]">
                  Phone
                </span>
                <p className="mt-1 text-[14px]">0899714751</p>
              </div>

              <div>
                <span className="font-semibold tracking-[0.25em] uppercase text-emerald-200 text-[11px]">
                  Behance
                </span>
                <p className="mt-1 text-[14px]">behance.net/manthanthool</p>
              </div>

              <div>
                <span className="font-semibold tracking-[0.25em] uppercase text-emerald-200 text-[11px]">
                  LinkedIn
                </span>
                <p className="mt-1 text-[14px]">linkedin.com/in/manthanthool28</p>
              </div>
            </div>

            <p className="mt-8 max-w-xl text-[13px] text-emerald-100/90 leading-relaxed">
              If you&apos;re hiring, reviewing portfolios, or looking for a UI/UX
              designer to support your product, this is the best place to reach
              me. Drop a message with a brief or link and I&apos;ll reply as soon
              as possible.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <div className="h-px flex-1 bg-emerald-200/60" />
              <span className="text-sm font-semibold tracking-[0.25em] uppercase text-emerald-50">
                Let&apos;s work together
              </span>
            </div>
          </div>

          {/* RIGHT: photo with signature text */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 rotate-3 rounded-3xl bg-emerald-900/40" />
              <div className="relative overflow-hidden rounded-3xl shadow-xl rotate-[-2deg] ring-1 ring-emerald-900/60">
                <img
                  src={ContactPhoto}
                  alt="Manthan standing in a field"
                  className="w-full h-full object-cover"
                />

                {/* handwritten-style signature */}
                {/* handwritten-style signature */}
<div className="absolute bottom-6 right-7 text-black">
  <p className="font-signature text-4xl sm:text-5xl leading-none">
    Manthan
  </p>
  <p className="font-signature text-4xl sm:text-5xl leading-tight">
    Thool
  </p>
</div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
