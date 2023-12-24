const projects = document.querySelectorAll(".project");

const handleMouseMove = e =>{
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x",`${x}px`);
    target.style.setProperty("--mouse-y",`${y}px`);
    letterBox.innerHTML="";
    setText()
}

for(const card of document.querySelectorAll(".card")){
    card.onmousemove = e => handleMouseMove(e);
}

const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123434567890"

const letterBox = document.querySelector('.crazyLetters')

function setText() {
    for (let i = 0; i < 1000; i++) {
        letterBox.innerHTML += letters[Math.floor(Math.random() * (letters.length-1))] 
    }
}
setText()

let currentProject = 1

function moveProject(place){
    projects.forEach(element => {
        element.classList.remove("focus")
        element.classList.remove("remove")
    });
    
    let nextProject = currentProject
    place=='right' ?  currentProject==projects.length ? nextProject=1 : nextProject++ : currentProject==1 ? nextProject=projects.length : nextProject-- 
    
    projects[currentProject-1].classList.add("remove")
    projects[nextProject-1].classList.add("focus")

    currentProject = nextProject
    console.log(place + currentProject)
}


// get all social 


setInterval(()=>{
    let soccialMedia = document.querySelectorAll('.social')
    let highlight = soccialMedia[Math.floor(Math.random()*(soccialMedia.length-1))]

    highlight?.classList.add('highlight')
    setTimeout(()=>highlight?.classList.remove('highlight'),2000)
},2000)
setInterval(()=>{
    let languages = document.querySelectorAll('.language')
    let highlightl = languages[Math.floor(Math.random()*(languages.length-1))]

    highlightl?.classList.add('highlight')
    setTimeout(()=>highlightl?.classList.remove('highlight'),2000)
},2000)