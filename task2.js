function getWorthyWorkers(arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].salary > 1000) {
      result.push(arr[i].name)
    }
  }
  return result
}

const workers = [
  { name: 'John', salary: 500 },
  { name: 'Mike', salary: 1300 },
  { name: 'Linda', salary: 1500 },
]

console.log(getWorthyWorkers(workers))
