import type { TodoItem } from '@/types'
import { format } from 'date-fns'
import Link from 'next/link'
import { useCallback, useMemo } from 'react'

export interface Props {
  payload: TodoItem
  onDelete: (id: string) => void
}

export function ItemComponent({ payload, onDelete }: Props) {
  // __STATE <React.Hooks>
  const [date, time] = useMemo(
    () => [format(new Date(payload.createdAt), 'd MMM'), format(new Date(payload.createdAt), 'H:mm')],
    [payload]
  )

  // __FUNCTION's
  const handleDelete = useCallback(() => {
    const isConfirmed = confirm(`Confirm to delete "${payload.title}"?`)
    if (isConfirmed) onDelete(payload.id)
  }, [payload])

  // __RENDER
  return (
    <div className="ui--todo-item">
      <div className="columns">
        <Link className="title" href={`/todos/${payload.id}`}>
          {payload.title}
        </Link>
        <p className="desc">{payload.description}</p>
      </div>

      <div className="columns">
        <p className="date">{date}</p>
        <p className="time">{time}</p>
      </div>

      <div className="columns">
        <Link className="btn btn-action" title="Edit" href={`/todos/${payload.id}/edit`}>
          <span className="icon p bi bi-pencil-square"></span>
        </Link>

        <button className="btn btn-action" title="Delete" onClick={handleDelete}>
          <span className="icon r bi bi bi-trash3"></span>
        </button>
      </div>
    </div>
  )
}
