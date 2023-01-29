document.getElementById('bouncy').style.animationPlayState='paused'
//Bouncy box paramteres
let x=0,
    y=0,
    xMovement='left',
    yMovement="down"

let running=false
    

function bounce(){
    if(running){
        //Collision parameters (these are placed in the function so they have a chance to update as the page is moved)
        let containerMaxWidth=document.getElementById('container').offsetWidth,
            containerMaxHeight=document.getElementById('container').offsetHeight,
            containerMin=0,
            boxSize=document.getElementById('bouncy').offsetWidth

        if(dimensions){
            boxSize=document.getElementById('bouncy').offsetWidth+(boxSize*.1)
            containerMin=boxSize*.15
        }
        
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
        if(x>=containerMaxWidth-boxSize){
            x=containerMaxWidth-boxSize
            xMovement='right'
        }
        if(x<=containerMin) xMovement='left'

        if(y>=containerMaxHeight-boxSize){
            y=containerMaxHeight-boxSize
            yMovement='up'
        }
        if(y<=containerMin) yMovement='down'

        //updates position of the box
        document.documentElement.style.setProperty('--x-axis', `${x}px`)
        document.documentElement.style.setProperty('--y-axis', `${y}px`)
    }
}

//logic for 3d box
let dimensions=false
function threeDimensions(){
    if(dimensions){
        dimensions=false
        document.documentElement.style.setProperty('--transform-style', `none`)
        document.documentElement.style.setProperty('--animation', `none`)

    } else if (!dimensions){
        dimensions=true
        document.documentElement.style.setProperty('--transform-style', `preserve-3d`)
        document.documentElement.style.setProperty('--animation', `animateSpin 10s linear infinite`)
    }
}

//logic for the button
function animation(){
    if(!running){
        running=true
        document.getElementById('bouncy').style.animationPlayState='running'
        document.getElementById('the-button').innerText='Stop'
    }
    else if(running){
        running=false
        document.getElementById('bouncy').style.animationPlayState='paused'
        document.getElementById('the-button').innerText='Start'
        
    }
}
setInterval(bounce, 10)