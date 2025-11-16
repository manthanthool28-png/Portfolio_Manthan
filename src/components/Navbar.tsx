// src/components/TopNav.tsx
import { NavLink } from 'react-router-dom'

const linkCls = ({ isActive }: { isActive: boolean }) =>
  [
    'px-3 py-2 rounded-md text-sm uppercase tracking-widest',
    isActive
      ? 'text-emerald-600 font-extrabold'
      : 'text-slate-900 hover:text-emerald-700',
  ].join(' ')

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 h-14 flex items-center justify-between">
        <div className="text-lg font-extrabold tracking-tight text-slate-900">
          Manthan
        </div>
        <div className="flex items-center gap-2">
          <NavLink to="/" className={linkCls} end>Home</NavLink>
          <NavLink to="/about" className={linkCls}>About</NavLink>
          <NavLink to="/portfolio" className={linkCls}>Portfolio</NavLink>
          <NavLink to="/blog" className={linkCls}>Blog</NavLink>
          <NavLink to="/contact" className={linkCls}>Contact</NavLink>
        </div>
      </div>
    </nav>
  )
}
