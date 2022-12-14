export type { InputAttrs } from './input'
export type { User } from './user'

export interface FormLogin {
  username: string
  password: string
}

export interface FormTodo {
  title: string
  description: string
}

export interface TodoItem {
  id: string
  userId: string
  title: string
  description: string
  createdAt: Date | string
  updatedAt: Date | string
}
