const openButton = document.querySelector('#openOverlay')
const body = document.body
const sucsessModal = createModal('The message has been sent!')

openButton.addEventListener('click', (e) => {
  body.appendChild(sucsessModal)
})

function createModal(content) {
  const overlayElement = document.createElement('div')
  overlayElement.classList.add('overlay')

  const template = document.querySelector('#overlayTemplate')
  overlayElement.innerHTML = template.innerHTML
  overlayElement.addEventListener('click', (e) => {
    if (e.target === overlayElement) {
      closeElement.click()
    }
  })

  const closeElement = overlayElement.querySelector('.close')
  closeElement.addEventListener('click', (e) => {
    e.preventDefault()
    body.removeChild(overlayElement)
  })

  const contentElement = overlayElement.querySelector('.content')
  contentElement.innerHTML = content

  return overlayElement
}