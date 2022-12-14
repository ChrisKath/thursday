import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback, useMemo, useState } from 'react'
import { useMounted } from '@/hooks'
import { NavbarComponent } from '@/components'
import { TodoService } from '@/services'
import type { TodoItem } from '@/types'
import { format } from 'date-fns'

export default function TodosContainer() {
  // __STATE <React.Hooks>
  const router = useRouter()
  const id = useMemo(() => router.query.id as string, [router.query])

  const [state, setState] = useState<TodoItem>()

  // __FUNCTION's
  const handleDelete = useCallback(async () => {
    const resp = await TodoService.delete(id)
    if (resp) {
      alert('The record has been successfully deleted.')
      router.push('/todos')
    }
  }, [id])

  // EFFECT's
  useMounted(async () => {
    const todo = await TodoService.getOne(id)
    if (todo) setState(todo)
  })

  // __RENDER
  return (
    <div className="ui--todo-container">
      <NavbarComponent>
        <Link className="btn btn-nav" href="/todos">
          <span className="icon bi bi-view-stacked"></span>
          <span className="text">lists</span>
        </Link>

        <Link className="btn btn-nav" href={`/todos/${id}/edit`}>
          <span className="icon bi bi-pencil-square"></span>
          <span className="text">edit</span>
        </Link>

        <button className="btn btn-nav" onClick={handleDelete}>
          <span className="icon bi bi bi-trash3"></span>
          <span className="text">delete</span>
        </button>
      </NavbarComponent>

      {state ? (
        <div className="ui--todo-detail">
          <h2 className="title">{state.title}</h2>
          <i className="date">{format(new Date(state.createdAt), 'PP p')}</i>
          <p className="desc">{state.description}</p>
        </div>
      ) : (
        <div className="ui--todo-loading">
          <i>Loading...</i>
        </div>
      )}
    </div>
  )
}
