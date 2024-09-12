type Props = {
  email: string
  handleLogout: () => void
}

export function UserView({ email, handleLogout }: Props) {
  return (
    <div>
      <span>Hey! 👋, welcome back {email}!</span>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
