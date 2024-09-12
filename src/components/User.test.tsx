import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { UserView } from './User'

const USER_EMAIL = 'user@test.com'
const logoutFn = vi.fn()

describe('User component', () => {
  it('should render welcome message with user email', () => {
    render(<UserView email={USER_EMAIL} handleLogout={() => {}} />)
  })

  it('should call logoutFn on logout button click', async () => {
    const user = userEvent.setup()
    render(<UserView email={USER_EMAIL} handleLogout={logoutFn} />)

    await user.click(screen.getByRole('button'))

    expect(logoutFn).toHaveBeenCalled()
  })
})
