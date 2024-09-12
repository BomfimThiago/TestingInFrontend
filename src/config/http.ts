export default function http() {
  return {
    postLogin: (email: string, password: string) => {
      if (email === 'user@example.com' && password === '123456') {
        return { email, role: 'user', status: 'active' }
      } else if (email === 'admin@example.com' && password === '123456') {
        return { email, role: 'admin', status: 'active' }
      } else if (email === 'admin@acme.com' && password === '123456') {
        return { email, role: 'admin', status: 'inactive' }
      } else {
        return { error: 'Invalid credentials' }
      }
    },
  }
}
