import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Input } from '@/components'
import type { FormLogin } from '@/types'
import { AuthService } from '@/services'

export default function AuthContainer() {
  // __STATE <React.Hooks>
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormLogin>({
    defaultValues: {
      username: 'unnamed',
      password: 'password'
    }
  })

  // __FUNCTION's
  const onSubmit = useCallback(async (data: FormLogin) => {
    const resp = await AuthService.signin(data)
    if (resp) router.push('/todos')
  }, [])

  // __RENDER
  return (
    <div className="ui--auth-container">
      <form className="ui--auth-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="ui--auth-form-header">
          <h2 className="title">login</h2>
          <p className="desc">Generate Lorem Ipsum placeholder text.</p>
        </div>

        <div className="ui--auth-form-body">
          <Input
            key=".username"
            name="username"
            label="Username"
            register={register}
            errors={errors.username}
            rules={{ required: true }}
          />

          <Input
            key=".password"
            type="password"
            name="password"
            label="Password"
            register={register}
            errors={errors.password}
            rules={{ required: true }}
          />
        </div>

        <div className="ui--auth-form-footer">
          <button className="btn btn-primary btn-login" type="submit">
            <span className="icon bi bi-box-arrow-in-right"></span>
            <span className="text">login</span>
          </button>
        </div>
      </form>
    </div>
  )
}
