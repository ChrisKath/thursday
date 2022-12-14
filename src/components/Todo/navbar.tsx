import { useRouter } from 'next/router'
import { ReactNode, useCallback } from 'react'
import { AuthService } from '@/services'

export interface Props {
  children?: ReactNode
}

export function NavbarComponent({ children }: Props) {
  // __STATE <React.Hooks>
  const router = useRouter()

  // __FUNCTION's
  const handleLogout = useCallback(() => {
    const isConfirmed = confirm('Confirm to logout?')
    if (isConfirmed) {
      AuthService.signout(() => router.push('/auth'))
    }
  }, [])

  // __RENDER
  return (
    <div className="ui--todo-navbar">
      <div className="columns">{children}</div>

      <div className="columns">
        <button className="btn btn-nav btn-logout" title="Logout" onClick={handleLogout}>
          <span className="icon bi bi bi-power"></span>
        </button>
      </div>
    </div>
  )
}
