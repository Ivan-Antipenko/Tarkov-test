const accordion = document.querySelector('.low-section__accordion')
const button = document.querySelector('.low-section__accordion-button')
const content = document.querySelector('.low-section__accordion-content')
const closeIcon = document.querySelector('.popup__close-img')
const isShow = 'low-section__accordion-content_visible';
const isShowPopup = 'placeholder_visible';

const buttons = Array.from(document.querySelectorAll('.button'))
const popup = document.querySelector('.placeholder')

buttons.forEach((button) => {
  button.addEventListener('click', changePopup)
})

closeIcon.addEventListener('click', changePopup)

function changePopup() {
  if (!popup.classList.contains(isShowPopup)) {
    popup.classList.add(isShowPopup)
  } else {
    popup.classList.remove(isShowPopup)
  }
}

button.addEventListener('click', () => {
  if (!content.classList.contains(isShow)) {
    content.classList.add(isShow)
    accordion.style.height = accordion.style.height + content.style.height + 'px'
  } else {
    content.classList.remove(isShow)
    accordion.style.height = null
  }
})