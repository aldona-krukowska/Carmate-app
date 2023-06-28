export const checkNumberFourDigit = (inputString: string) => {
  const number = parseInt(inputString)

  if (isNaN(number) || inputString.length !== 4) {
    return false
  }

  return true
}
