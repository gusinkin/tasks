const arrowLeft = document.querySelector('#left')
const arrowRight = document.querySelector('#right')
const itemsList = document.querySelector('#items')
const computedStyles = window.getComputedStyle(itemsList)
const items = document.querySelectorAll('.slider__item')

const minRight = 0
const itemWidth = getComputedStyle(items[0]).width
const step = parseInt(itemWidth)
const preShownItems = 300 / step
const maxRight = (items.length - preShownItems) * step
let position = 0
itemsList.style.right = position

arrowLeft.addEventListener('click', (e) => {
  e.preventDefault()
  if (position > minRight) {
    position -= step
    itemsList.style.right = `${position}px`
  }
})
arrowRight.addEventListener('click', (e) => {
  e.preventDefault()
  if (position < maxRight) {
    position += step
    itemsList.style.right = `${position}px`
  }
})
