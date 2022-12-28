
function Model() {
  let div = document.createElement("div")
  div.style.position = 'fixed'
  div.style.zIndex = 999
  div.style.left = 0
  div.style.right = 0
  div.style.top = 0
  div.style.bottom = 0
  return div
}

/**
 * 返回一个 div 元素
 * @returns div 元素
 */
function Container(...elements) {
  let container = document.createElement("div")
  elements.forEach(el => {
    container.appendChild(el)
  })
  return container
}

function Flex({
  alignItems,
  justifyContent,
}, ...elements) {
  let container = document.createElement("div")
  container.style.display = 'flex'
  container.style.alignItems = alignItems
  container.style.justifyContent = justifyContent
  elements.forEach(el => {
    container.appendChild(el)
  })
  return container
}

function Button({
  text = '',
  onclick = () => { },
}) {
  let button = document.createElement('button')
  button.textContent = text
  button.onclick = onclick
  return button
}

function Input({
  placeholder = '',
  value = '',
  onchange = () => { },
}) {
  let el = document.createElement('input')
  el.placeholder = placeholder
  el.value = value
  el.onchange = onchange
  return el
}

function Text({ text }) {
  let el = document.createElement('span')
  el.innerText = text
  return el
}