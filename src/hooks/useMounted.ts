import { useEffect, useRef } from 'react'

export function useMounted(func: () => void) {
  // __STATE <React.Hooks>
  const nodeRef = useRef<boolean>(true)

  // __EFFECT's
  useEffect(() => {
    if (nodeRef.current) {
      nodeRef.current = false
      func()
    }
  }, [])

  // __RETURN
  return void 0
}
