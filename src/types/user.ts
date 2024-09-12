export interface User {
  email: string
  role: 'admin' | 'user'
  status: 'inactive' | 'active'
}
