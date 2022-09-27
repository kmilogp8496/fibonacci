export const useFibonacci = () => {
  const nextValue = ref('')
  const previousValues = ref<number[]>([])

  const getFibonacciValue = (index: number): number => {
    if (index === 0)
      return 0
    if (index === 1)
      return 1
    return previousValues.value[index - 1] + previousValues.value[index - 2]
  }

  const validateInput = () => {
    const value = Number(nextValue.value)
    if (Number.isNaN(value))
      return false

    return getFibonacciValue(previousValues.value.length) === value
  }

  const validate = () => {
    if (validateInput()) {
      previousValues.value.push(parseInt(nextValue.value))
      nextValue.value = ''
      return true
    }
    return false
  }

  return {
    validate,
    nextValue,
    previousValues,
  }
}
