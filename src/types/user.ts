import { UserRole } from '@/constants'

export interface User {
  id: number
  role: UserRole
  displayName: string
  avatar: string
  email: string
  bio?: string
}
