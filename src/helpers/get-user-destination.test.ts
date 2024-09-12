import { expect, describe, it } from 'vitest'
import { getUserDestination, UserDestination } from './get-user-destination'

const ACTIVE_ADMIN = { email: 'test@test.com', role: 'admin', status: 'active' } as const
const ACTIVE_USER = { email: 'test@test.com', role: 'user', status: 'active' } as const
const INACTIVE_USER = { email: 'test@test.com', role: 'user', status: 'inactive' } as const
const INACTIVE_ADMIN = { email: 'test@test.com', role: 'admin', status: 'inactive' } as const

describe('getUserDestination helper', () => {
  it('should return Dashboard when user is ACTIVE', () => {
    expect(getUserDestination(ACTIVE_USER)).toBe(UserDestination.Dashboard)
    expect(getUserDestination(ACTIVE_ADMIN)).toBe(UserDestination.Dashboard)
  })

  it('should return Logout when user is INACTIVE', () => {
    expect(getUserDestination(INACTIVE_USER)).toBe(UserDestination.Logout)
  })

  it('should return Subscribe when admin is INACTIVE', () => {
    expect(getUserDestination(INACTIVE_ADMIN)).toBe(UserDestination.Subscribe)
  })
})
