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