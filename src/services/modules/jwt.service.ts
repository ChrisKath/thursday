import { getUnixTime, isAfter as isExpired } from 'date-fns'
import { decode, JwtPayload } from 'jsonwebtoken'

export class JWT {
  static audit<T extends JwtPayload>(jwt: string): T | void {
    const payload = decode(jwt) as T
    const now = getUnixTime(new Date())

    if (payload.exp && isExpired(now, payload.exp)) return void 0

    return payload
  }
}
