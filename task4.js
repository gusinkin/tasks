const isEven = (num) => {
  if (Number.isInteger(num)) {
    return num % 2 == 0
  }
}
const mixedArray = [3, 13, 74, 14, 66, 15, 22, 4]
const filterArray = (arr, fn) => {
  return arr.filter(fn)
}
console.log(filterArray(mixedArray, isEven))
