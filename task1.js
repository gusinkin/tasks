function getVowels(string) {
  const vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я']
  let arr = string.toLowerCase().split('')
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (vowels.includes(arr[i])) {
      result.push(arr[i])
    }
  }
  return result.join('')
}
const string = 'ПривЕт, как дела?'
console.log(getVowels(string))
