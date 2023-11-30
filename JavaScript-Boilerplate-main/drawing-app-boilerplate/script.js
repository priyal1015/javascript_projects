/** Select all necessary elements from DOM */

const canvas = document.getElementById('canvas')
const decreaseBtn = document.getElementById('decreaseBtn')
const sizeE1 = document.getElementById('sizeE1')
const increaseBtn = document.getElementById('increaseBtn')
const colorE1 = document.getElementById('color')
const clearBtn = document.getElementById('clear')

const ctx = canvas.getContext('2d');


let size = 10;
let isPressed = false
colorE1.value = "black"
let color = colorE1.value
let x 
let y 

//Add event listener on mousedown
canvas.addEventListener('mousedown' , (e)=>{
    isPressed = true 

    x = e.offsetX
    y = e.offsetY
})

//Add event listener on mouseup
canvas.addEventListener('mouseup' , (e)=>{
    isPressed = false

    x = undefined
    y = undefined
})

//Add event listener on mousemove
document.addEventListener('mousemove' , (e) =>{
    if(isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y , x2, y2)

        x = x2
        y = y2
   
    }
})

//Define function to draw a circle
function drawCircle(x,y) {
    ctx.beginPath();
    ctx.arc(x , y ,size, 0 , Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

//Define function to draw line
function drawLine(x1 , y1 , x2 , y2 ) {
    ctx.beginPath()
    ctx.moveTo(x1 , y1)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
    
}

//Define function to change size of element
function updateSizeOnScreen(){
    sizeE1.innerText = size
}

//Add event listener on click to increase size
increaseBtn.addEventListener('click', ()=>{
    size += 5

    if(size>50){
        size = 50
    }
    updateSizeOnScreen()
})

//Add event listener on click to decrease size

//Add event listener to change color
colorE1.addEventListener('change' , (e)=>{
    color =e.target.value
})

//Add event listener to clear the canvas
clearBtn.addEventListener('click', ()=>{
    ctx.clearRect(0,0, canvas.width , canvas.height)
})
