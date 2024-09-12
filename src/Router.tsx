import LoginPage from './pages/login'

export function Router() {
  const url = new URL(window.location.href)

  switch (url.pathname) {
    case '/':
      return <LoginPage />
    case '/subscribe':
      return (
        <>
          <h1>Your account is inactive</h1>
          <p>Subscribe again to access your dashboard</p>
          <a href="/"> Go Back </a>
        </>
      )
    default:
      return (
        <>
          <h1>404 Page not Found</h1>
          <a href="/"> Go Back </a>
        </>
      )
  }
}
