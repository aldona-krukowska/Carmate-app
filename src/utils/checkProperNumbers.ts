export const checkProperNumbers = (inputString: string) => {
  const number = parseInt(inputString)
  if (isNaN(number) || number < 0 || number >= 25) {
    return false
  }
  return true
}
