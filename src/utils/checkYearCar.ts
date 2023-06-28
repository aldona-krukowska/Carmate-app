export const checkYearCar = (inputString: string) => {
  const number = parseInt(inputString)

  if (isNaN(number) || number < 1886) {
    return false
  }

  return true
}
