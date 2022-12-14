import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback, useMemo, useState } from 'react'
import { useMounted } from '@/hooks'
import { FormComponent, NavbarComponent } from '@/components'
import { TodoService } from '@/services'
import type { FormTodo } from '@/types'

export default function TodosContainer() {
  // __STATE <React.Hooks>
  const router = useRouter()
  const id = useMemo(() => router.query.id as string, [router.query])

  const [state, setState] = useState<FormTodo>()

  // __FUNCTION's
  const handleSubmit = useCallback(async (data: FormTodo) => {
    const resp = await TodoService.update(id, data)
    if (resp) {
      alert('The record has been successfully updated.')
      router.push('/todos')
    }
  }, [])

  // EFFECT's
  useMounted(async () => {
    const todo = await TodoService.getOne(id)
    if (todo) {
      setState({
        title: todo.title,
        description: todo.description
      })
    }
  })

  // __RENDER
  return (
    <div className="ui--todo-container">
      <NavbarComponent>
        <Link className="btn btn-nav" href="/todos">
          <span className="icon bi bi-view-stacked"></span>
          <span className="text">lists</span>
        </Link>
      </NavbarComponent>

      {state ? (
        <FormComponent title="Create todo item" defaultValues={state} onSubmit={handleSubmit} />
      ) : (
        <div className="ui--todo-loading">
          <i>Loading...</i>
        </div>
      )}
    </div>
  )
}
