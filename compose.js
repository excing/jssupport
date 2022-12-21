
function model() {
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
function div() {
  let div = document.createElement("div")
  return div
}

function button(text, {
  onclick = () => { },
}) {
  let button = document.createElement('button')
  button.textContent = text
  button.onclick = onclick
  return button
}

function input(placeholder) {
  let el = document.createElement('input')
  el.placeholder = placeholder
  return el
}