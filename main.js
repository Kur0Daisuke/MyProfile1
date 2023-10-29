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

// const reset = () => {projects.forEach((e) => e.classList.remove("focus"))}

// function GoRight() {
//     reset()
//     if(currentFocus+1 >= projects.length) currentFocus=0;
//     else currentFocus++;
//     projects[currentFocus].classList.add("focus")
// }

// function GoLeft() {
//     reset()
//     if(currentFocus-1 <= 0) currentFocus=0;
//     else currentFocus--;
//     projects[currentFocus].classList.add("focus")
// }

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