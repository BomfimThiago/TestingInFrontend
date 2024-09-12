import { expect, describe, it } from 'vitest'
import { validatePassword } from './validate-password'

describe('validatePassword helper', () => {
  it('should successfully validate when passing valid password', () => {
    expect(validatePassword('12345678')).toStrictEqual({ success: true, message: 'Password is valid' })
  })

  it('should not validate when passing no password', () => {
    expect(validatePassword('')).toStrictEqual({ success: false, message: 'Password is required' })
  })

  it('should not validate when passing weak passwords', () => {
    expect(validatePassword('123')).toStrictEqual({ success: false, message: 'Password is too weak' })
    expect(validatePassword('password')).toStrictEqual({ success: false, message: 'Password is too weak' })
    expect(validatePassword('cheesecake')).toStrictEqual({ success: false, message: 'Password is too weak' })
  })
})
