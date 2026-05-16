let unlocked = false

export const ADMIN_PASSWORD = 'Manthan@2026Admin'

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