import Link from 'next/link'
import { useCallback, useState } from 'react'
import { useMounted } from '@/hooks'
import { ItemComponent, NavbarComponent } from '@/components'
import { TodoService } from '@/services'
import type { TodoItem } from '@/types'

export default function TodosContainer() {
  // __STATE <React.Hooks>
  const [state, setState] = useState<TodoItem[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  // __FUNCTION's
  const handleDelete = useCallback(async (id: string) => {
    const resp = await TodoService.delete(id)
    if (resp) {
      alert('The record has been successfully deleted.')
    }
  }, [])

  // __EFFECT's
  useMounted(async () => {
    const todos = await TodoService.getAll()
    if (todos) {
      setState(todos)
      setIsLoading(false)
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

        <Link className="btn btn-nav" href="/todos/create">
          <span className="icon bi bi-pen"></span>
          <span className="text">create</span>
        </Link>
      </NavbarComponent>

      {isLoading ? (
        <div className="ui--todo-loading">
          <i>Loading...</i>
        </div>
      ) : !state.length ? (
        <div className="ui--todo-empty">
          <div className="box">
            <span className="icon bi bi-folder2-open"></span>
            <i className="text">Empty record.</i>
          </div>
        </div>
      ) : (
        <div className="ui--todo-group">
          <h2 className="ui--todo-group-title">todo items</h2>

          <div className="lorem">
            {state.map((record, index) => (
              <ItemComponent key={index} payload={record} onDelete={handleDelete} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
