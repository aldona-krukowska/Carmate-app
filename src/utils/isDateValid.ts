export const isDateValid = (dateString: string) => {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/

  if (!dateRegex.test(dateString)) {
    return false
  }

  const dateParts = dateString.split('-')
  const year = parseInt(dateParts[0])
  const month = parseInt(dateParts[1])
  const day = parseInt(dateParts[2])

  const date = new Date(year, month - 1, day)

  if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
    return false
  }

  return true
}
