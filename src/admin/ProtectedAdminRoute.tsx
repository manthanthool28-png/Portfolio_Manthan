import type { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { isAdminUnlocked } from './adminAuth'

export default function ProtectedAdminRoute({
  children,
}: {
  children: ReactNode
}) {
  if (!isAdminUnlocked()) {
    return <Navigate to="/admin-login" replace />
  }

  return <>{children}</>
}