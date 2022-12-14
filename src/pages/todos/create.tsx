import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { FormComponent, NavbarComponent } from '@/components'
import { TodoService } from '@/services'
import type { FormTodo } from '@/types'

export default function TodosContainer() {
  // __STATE <React.Hooks>
  const router = useRouter()

  // __FUNCTION's
  const handleSubmit = useCallback(async (data: FormTodo) => {
    const resp = await TodoService.create(data)
    if (resp) {
      alert('The record has been successfully created.')
      router.push('/todos')
    }
  }, [])

  // __RENDER
  return (
    <div className="ui--todo-container">
      <NavbarComponent>
        <Link className="btn btn-nav" href="/todos">
          <span className="icon bi bi-view-stacked"></span>
          <span className="text">lists</span>
        </Link>
      </NavbarComponent>

      <FormComponent title="Create todo item" onSubmit={handleSubmit} />
    </div>
  )
}
