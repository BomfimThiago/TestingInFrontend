import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginForm } from './LoginForm'

const USER_EMAIL = 'user@test.com'
const PASSWORD = '123456'
const loginFn = vi.fn()
const setEmailFn = vi.fn()
const setPasswordFn = vi.fn()

describe('LoginForm component', () => {
  it('should render disabled button, email and password fields', () => {
    const { container } = render(
      <LoginForm email={''} password={''} setEmail={setEmailFn} setPassword={setPasswordFn} handleLogin={loginFn} />
    )

    const emailInput = screen.getByRole('textbox')
    const passwordInput = container.querySelector('input[name="password"]')
    const submitButton = screen.getByRole('button')

    expect(emailInput).toBeVisible()
    expect(passwordInput).toBeVisible()
    expect(submitButton).toBeDisabled()
  })

  it('should render a enabled button when email and password has values and call loginFn on click', async () => {
    const user = userEvent.setup()
    render(
      <LoginForm
        email={USER_EMAIL}
        password={PASSWORD}
        setEmail={setEmailFn}
        setPassword={setPasswordFn}
        handleLogin={loginFn}
      />
    )
    const submitButton = screen.getByRole('button')

    await user.click(submitButton)

    expect(submitButton).toBeEnabled()
    expect(loginFn).toHaveBeenCalled()
  })

  it('should render a enabled button when email and password has values and call loginFn on click', async () => {
    const user = userEvent.setup()
    const { container } = render(
      <LoginForm email={''} password={''} setEmail={setEmailFn} setPassword={setPasswordFn} handleLogin={loginFn} />
    )

    const emailInput = screen.getByRole('textbox')
    const passwordInput = container.querySelector('input[name="password"]')
    await user.type(emailInput, USER_EMAIL)
    await user.type(passwordInput!, PASSWORD)

    expect(setEmailFn).toHaveBeenCalledTimes(USER_EMAIL.length)
    expect(setPasswordFn).toHaveBeenCalledTimes(PASSWORD.length)
  })
})
