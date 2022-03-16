function isHtml(path) {
  if (path.slice(-5) == '.html') return true
  else return false
}

const path = '/users/download/index.html'

console.log(isHtml(path))
