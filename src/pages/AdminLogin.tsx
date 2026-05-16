import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { unlockAdmin } from '../admin/adminAuth'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (unlockAdmin(password)) {
      navigate('/control-room')
    } else {
      setError('Wrong password')
    }
  }

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl bg-emerald-950/90 border border-emerald-800 p-6 shadow-xl">
        <h1 className="text-2xl font-bold text-emerald-50 uppercase tracking-wide">
          Private Access
        </h1>
        <p className="mt-2 text-sm text-emerald-100/80">
          Enter password to open full control.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full rounded-lg border border-emerald-700 bg-emerald-900/60 px-4 py-3 text-emerald-50 outline-none focus:ring-2 focus:ring-emerald-300"
          />

          {error && (
            <p className="text-sm text-red-300">{error}</p>
          )}

          <button
            type="submit"
            className="w-full rounded-lg bg-emerald-200 text-emerald-950 font-semibold px-4 py-3 hover:bg-white"
          >
            Unlock Admin
          </button>
        </form>
      </div>
    </section>
  )
}