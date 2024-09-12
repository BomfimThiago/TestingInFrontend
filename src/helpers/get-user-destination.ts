import { User } from '../types/user'

export enum UserDestination {
  Subscribe,
  Dashboard,
  Logout,
}

export function getUserDestination(user: User) {
  if (user.role === 'admin' && user.status === 'inactive') return UserDestination.Subscribe

  if (user.role === 'user' && user.status === 'inactive') return UserDestination.Logout

  return UserDestination.Dashboard
}
