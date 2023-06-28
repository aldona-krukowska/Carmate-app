export const getFormData = (e: React.FormEvent) => {
  e.preventDefault()

  const form = e.target as HTMLFormElement
  const { email, password, name } = form

  const user = {
    email: (email as unknown as HTMLInputElement).value,
    password: (password as unknown as HTMLInputElement).value,
    name: (name as unknown as HTMLInputElement).value,
  }

  return user
}
