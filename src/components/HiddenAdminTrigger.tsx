import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function HiddenAdminTrigger() {
  const [, setClicks] = useState(0)
  const timeoutRef = useRef<number | null>(null)
  const navigate = useNavigate()

  const handleClick = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current)
    }

    setClicks((prev) => {
      const next = prev + 1

      if (next === 3) {
        navigate('/admin-login')
        return 0
      }

      timeoutRef.current = window.setTimeout(() => {
        setClicks(0)
      }, 1200)

      return next
    })
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="fixed bottom-4 right-4 h-10 w-10 rounded-full bg-transparent opacity-0"
      aria-label="Hidden admin trigger"
    >
      Hidden
    </button>
  )
}