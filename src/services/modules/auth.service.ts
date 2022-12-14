import { configs } from '@/constants'
import axios from '@/utils/axios'
import { cookie } from '@/utils'
import type { FormLogin } from '@/types'
import { addHours } from 'date-fns'

export class AuthService {
  static async signin(form: FormLogin) {
    try {
      const { data } = await axios.post<{ token: string }>('users/auth', form)
      if (data) {
        cookie.set(configs.APP_AUTH_ACCESS, data.token, { expires: addHours(Date.now(), 3) })
        return true
      }
    } catch (error: any) {
      console.error(error)
      alert(error?.message || 'Unknown')
    }
  }

  static signout(cb?: () => void) {
    cookie.remove(configs.APP_AUTH_ACCESS)
    if (cb) cb()
  }
}
