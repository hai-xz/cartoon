import React, { useLayoutEffect } from 'react'


export default function Trans(props) {

  useLayoutEffect(() => {
    let target = props.children.ref.current
    let nodeStyle = props.children.props.style
    target.setAttribute('transitKey-' + props.children.key, "")
    Promise.resolve().then(()=>transitMoveNode(target, props.children.key, nodeStyle))
    return () => {
      transitCloneNode(document.querySelector(`*[transitKey-${props.children.key}]`), props.children.key)
    }
  })

  return (
    <>
      {props.children}
    </>
  )
}

const startMap = new Map()
const root = document.querySelector('html')

function transitCloneNode(node, key) {
  let nodePosition = node.getBoundingClientRect()
  Promise.resolve().then(()=>{
    let start = node
    start.classList.add('transit-0000')
    start.style.cssText += `top:${nodePosition.top}px !important;left:${nodePosition.left}px !important;`
    startMap.set(key, start)
    root.appendChild(start)
    clearMap()
  })
}

function transitMoveNode(node, key, style) {
  if (startMap.get(key) === undefined) {
    return 0
  }
  node.style.opacity = 0
  let start = startMap.get(key)
  startMap.delete(key)

  setTimeout(() => {

    let startPos = start.getBoundingClientRect()
    let nodePos = node.getBoundingClientRect()
    let moveLeft = nodePos.left - startPos.left
    let moveTop = nodePos.top - startPos.top

    start.style.cssText += `transform: translateX(${moveLeft+0.001}px) translateY(${moveTop}px) !important;`
    start.classList = node.classList
    start.classList.add('transit-0000')
    
    for (let h in style) {
      if (h !== 'top' && h !== 'left') {
        start.style[h] = style[h]
      }
    }

    start.ontransitionend = () => {
      node.style.opacity = 1
      start.ontransitionend = () => { }
      console.log(start)
      root.removeChild(start)
    }
  }, 20)
}

let x = true
function clearMap() {
  if (x) {
    x = false
    Promise.resolve().then(() => {
      for (let [key, val] of startMap) {
        console.log(key)
        root.removeChild(val)
        startMap.delete(key)
      }
      x = true
    })
  }
}