'use strict'

const body = document.body

let x = document.createElement('span')
let y = document.createElement('span')



body.appendChild(x)
body.appendChild(y)

window.addEventListener('mousemove', (e) => {
    let userX = x.textContent = e.x
    let userY = y.textContent = e.y
    body.style.background = `hsl(${userX}, ${userY}%, 50%)`
    
})