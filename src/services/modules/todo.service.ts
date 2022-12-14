import axios from '@/utils/axios'
import type { FormTodo, TodoItem } from '@/types'

export class TodoService {
  static async create(form: FormTodo) {
    try {
      const resp = await axios.post('/todos', form)
      return resp.data
    } catch (error) {
      console.error(error)
    }
  }

  static async getAll() {
    try {
      const resp = await axios.get<TodoItem[]>('/todos')
      return resp.data.map(TodoDto)
    } catch (error) {
      console.error(error)
    }
  }

  static async getOne(id: string) {
    try {
      const resp = await axios.get<TodoItem>(`/todos/${id}`)
      return TodoDto(resp.data)
    } catch (error) {
      console.error(error)
    }
  }

  static async update(id: string, form: FormTodo) {
    try {
      const resp = await axios.put(`/todos/${id}`, form)
      return resp.data
    } catch (error) {
      console.error(error)
    }
  }

  static async delete(id: string) {
    try {
      const resp = await axios.delete(`/todos/${id}`)
      return resp.data
    } catch (error) {
      console.error(error)
    }
  }
}

export function TodoDto({ _id, user_id, ...data }: any): TodoItem {
  return { id: _id, userId: user_id, ...data }
}
