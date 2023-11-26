const colors = ["purple","white","pink","skyblue"]
const trailmode = ["trailfall1","trailfall2","trailfall3"]

selectRandomColor = ()=> colors[Math.floor(Math.random()*(colors.length-1))]
selectRandomTrail = ()=> trailmode[Math.floor(Math.random()*(trailmode.length-1))]

const last = {x:0,y:0}

calcDistance=(current,last)=>Math.sqrt((current.x - last.x)*(current.x - last.x) + (current.y - last.y)*(current.y - last.y));

window.onmousemove = e => {
    const current = {x:e.clientX,y:e.clientY}
    if(calcDistance(current,last) >=25){
        const box = document.querySelector('.trailBox')
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const dot = document.createElement("div")
        dot.className = "trail"
        dot.style.left = `${mouseX}px`
        dot.style.top = `${mouseY}px`
        dot.style.background = selectRandomColor()
        dot.style.animationFillMode = "forwards" 
        dot.style.animation = `${selectRandomTrail()} 1s linear`
        Math
        box.appendChild(dot)
        setTimeout(()=> box.removeChild(dot),1500)
        
        last.x = current.x
        last.y = current.y
    }
    
    console.log(`distance - ${last}`)

}