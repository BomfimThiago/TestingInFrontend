type Validation = {
  success: boolean
  message: string
}

export function validatePassword(password?: string): Validation {
  if (!password) return { success: false, message: 'Password is required' }

  if (password.length < 6 || password.match(/password/) || password.match(/cheesecake/)) {
    return { success: false, message: 'Password is too weak' }
  }

  return { success: true, message: 'Password is valid' }
}
