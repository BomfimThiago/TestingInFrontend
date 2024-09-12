type Props = {
  email: string
  password: string
  handleLogin: (e: React.FormEvent) => void
  setEmail: (v: string) => void
  setPassword: (v: string) => void
}

export function LoginForm({ email, password, handleLogin, setEmail, setPassword }: Props) {
  return (
    <form onSubmit={handleLogin}>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Password:</label>
        <input name="password" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
      </div>
      <button disabled={!email && !password} type="submit">
        Login
      </button>
    </form>
  )
}
