import { describe, expect, it, vi } from 'vitest'
import LoginPage from './login'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const httpPostLoginMock = vi.fn()
vi.mock('/src/config/http.ts', () => ({ default: vi.fn().mockReturnValue({ postLogin: () => httpPostLoginMock }) }))

const USER_EMAIL = 'user@test.com'
const PASSWORD = '123456'

describe('Login page tests', () => {
  it('should show User component after login when user is active', async () => {
    const user = userEvent.setup()
    const { container } = render(<LoginPage />)
    httpPostLoginMock.mockResolvedValueOnce({ email: USER_EMAIL, role: 'user', status: 'active' })

    const emailInput = screen.getByRole('textbox')
    const passwordInput = container.querySelector('input[name="password"]')
    await user.type(emailInput, USER_EMAIL)
    await user.type(passwordInput!, PASSWORD)
    await user.click(screen.getByRole('button'))

    const userComponent = await screen.findByText(/welcome back/)
    expect(userComponent).toBeVisible()
  })

  it('should hide User component after login when user is inactive', async () => {
    const user = userEvent.setup()
    const { container } = render(<LoginPage />)
    httpPostLoginMock.mockResolvedValueOnce({ email: USER_EMAIL, role: 'user', status: 'inactive' })

    const emailInput = screen.getByRole('textbox')
    const passwordInput = container.querySelector('input[name="password"]')
    await user.type(emailInput, USER_EMAIL)
    await user.type(passwordInput!, PASSWORD)
    await user.click(screen.getByRole('button'))

    const userComponent = await screen.findByText(/welcome back/)
    expect(userComponent).toBeVisible()
  })
})
