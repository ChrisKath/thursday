import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Input, Textarea } from '@/components'
import type { FormTodo } from '@/types'

export interface Props {
  title?: string
  defaultValues?: FormTodo
  onSubmit: (data: FormTodo) => void
}

export function FormComponent({ title, defaultValues, onSubmit }: Props) {
  // __STATE <React.Hooks>
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<FormTodo>({})

  // __EFFECT's
  useEffect(() => {
    if (defaultValues) {
      setValue('title', defaultValues.title)
      setValue('description', defaultValues.description)
    }
  }, [defaultValues])

  // __RENDER
  return (
    <form className="ui--todo-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="ui--todo-form-header">
        <h2 className="title">{title || 'Form Todo'}</h2>
        <p className="desc">Generate Lorem Ipsum placeholder text.</p>
      </div>

      <div className="ui--todo-form-body">
        <Input
          key=".title"
          name="title"
          label="Title"
          register={register}
          errors={errors.title}
          rules={{ required: true }}
        />

        <Textarea
          key=".description"
          name="description"
          label="Description"
          register={register}
          errors={errors.description}
          rules={{ required: true }}
        />
      </div>

      <div className="ui--todo-form-footer">
        <button className="btn btn-primary btn-create" type="submit">
          <span className="text">{defaultValues ? 'save change' : 'create'}</span>
        </button>
      </div>
    </form>
  )
}
