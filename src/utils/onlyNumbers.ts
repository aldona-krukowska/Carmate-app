export const onlyNumbers = (inputString: string) => {
  const numbers = /^[0-9]+$/
  return numbers.test(inputString)
}
