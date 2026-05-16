// src/App.tsx
import { Outlet, useLocation } from 'react-router-dom'
import TopNav from './components/Navbar'
import Footer from './components/Footer'
import HiddenAdminTrigger from './components/HiddenAdminTrigger'

export default function App() {
  const location = useLocation()

  // ✅ HashRouter fix — extract real route from hash
  const path = location.hash.replace('#', '')

  // Let portfolio detail pages control their own layout
  const isFullWidth = path.startsWith('/portfolio/')

  return (
    <div className="min-h-screen flex flex-col">
      <TopNav />

      <main className="flex-1">
        {isFullWidth ? (
          // portfolio detail pages handle their own spacing
          <Outlet />
        ) : (
          // default constrained layout
          <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-8">
            <Outlet />
          </div>
        )}
      </main>

      <Footer />
      <HiddenAdminTrigger />
    </div>
  )
}