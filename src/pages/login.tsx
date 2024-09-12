import React, { useEffect, useState } from 'react'
import { LoginForm } from '../components/LoginForm'
import Auth from '../services/auth'
import { User } from '../types/user'
import { getUserDestination, UserDestination } from '../helpers/get-user-destination'
import { UserView } from '../components/User'

const LoginPage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    const userOrError = Auth.login({ email, password })

    if ('error' in userOrError) {
      console.log({ userOrError })
      alert(userOrError.error)
    } else {
      setUser(userOrError)
    }
  }

  const handleLogout = () => {
    setUser(null)
    setEmail('')
    setPassword('')
  }

  useEffect(() => {
    if (user) {
      const destination = getUserDestination(user)

      switch (destination) {
        case UserDestination.Dashboard:
          break
        case UserDestination.Logout:
          window.location.href = '/404'
          break
        case UserDestination.Subscribe:
          window.location.href = '/subscribe'
          break
      }
    }
  }, [user])

  return (
    <>
      {user && user.status !== 'inactive' ? (
        <UserView email={user.email} handleLogout={handleLogout} />
      ) : (
        <LoginForm
          email={email}
          password={password}
          handleLogin={handleLogin}
          setEmail={setEmail}
          setPassword={setPassword}
        />
      )}
    </>
  )
}

export default LoginPage
