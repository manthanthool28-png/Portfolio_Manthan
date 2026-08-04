let unlocked = false

export const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD as string

export function isAdminUnlocked() {
  return unlocked
}

export function unlockAdmin(password: string) {
  if (password === ADMIN_PASSWORD) {
    unlocked = true
    return true
  }
  return false
}

export function lockAdmin() {
  unlocked = false
}