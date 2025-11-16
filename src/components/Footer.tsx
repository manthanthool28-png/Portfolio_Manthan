// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-6 text-center">
        <div className="mx-auto h-12 w-12 rounded-full bg-emerald-600/15 ring-1 ring-emerald-600/25 grid place-items-center">
          <span className="text-emerald-700 text-base font-extrabold select-none">M</span>
        </div>
        <p className="mt-2 text-[11px] leading-5 text-slate-500">
          © {new Date().getFullYear()} Manthan Thool. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
