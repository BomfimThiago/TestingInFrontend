import http from '../config/http'
import { validatePassword } from '../helpers/validate-password'
import { User } from '../types/user'

type LoginParams = {
  email: string
  password: string
}

export function login({ email, password }: LoginParams): User | { error: string } {
  const passwordValidation = validatePassword(password)

  if (!passwordValidation.success) return { error: passwordValidation.message }

  // fake http request
  const result = http().postLogin(email, password)

  return result as User
}

const Auth = { login }

export default Auth
