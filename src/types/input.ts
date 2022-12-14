import { ReactNode } from 'react'
import { FieldError, UseFormRegister, RegisterOptions } from 'react-hook-form'

export interface InputAttrs {
  key: string
  vid?: string
  name: string
  label: string
  icon?: string
  register: UseFormRegister<any>
  errors?: FieldError
  rules?: RegisterOptions
  children?: ReactNode
  disabled?: boolean
  readonly?: boolean
  required?: boolean
}
