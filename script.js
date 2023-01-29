//Bouncy box paramteres
let x=0,
    y=0,
    xMovement='left',
    yMovement="down"

let running=false
    

function bounce(){
    if(running){
        //Collision parameters (these are placed in the function so they have a chance to update as the page is moved)
        let containerWidth=document.getElementById('container').offsetWidth,
            containerHeight=document.getElementById('container').offsetHeight,
            boxSize=document.getElementById('bouncy').offsetWidth
        
        //checklist for determining the directions to move in
        if(xMovement=='left'){
            x++
        } else {
            x--
        }
        if(yMovement=='down'){
            y++
        } else {
            y--
        }

        //collision check for when the box bumps into the egde of the container. changes direction.
        if(x>=containerWidth-boxSize){
            x=containerWidth-boxSize
            xMovement='right'
        }
        if(x<=0) xMovement='left'

        if(y>=containerHeight-boxSize){
            y=containerHeight-boxSize
            yMovement='up'
        }
        if(y<=0) yMovement='down'

        //updates position of the box
        document.documentElement.style.setProperty('--x-axis', `${x}px`)
        document.documentElement.style.setProperty('--y-axis', `${y}px`)
    }
}

//logic for the button
function animation(){
    if(!running){
        running=true
        document.getElementById('the-button').innerText='Stop'
    }
    else if(running){
        running=false
        document.getElementById('the-button').innerText='Start'
        
    }
}
setInterval(bounce, 15)