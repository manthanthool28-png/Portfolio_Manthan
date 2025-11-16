// src/App.tsx
import { Outlet } from 'react-router-dom'
import TopNav from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopNav /> {/* sticky top bar */}
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-8">
          <Outlet />
        </div>
      </main>
      <Footer /> {/* compact white footer */}
    </div>
  )
}
