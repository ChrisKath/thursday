import { FieldError } from 'react-hook-form'

export function errorMessage(errors?: FieldError) {
  if (!errors) return null

  switch (errors.type) {
    case 'required':
      return errors?.message || 'This Field is required!'

    default:
      return errors?.message
  }
}
