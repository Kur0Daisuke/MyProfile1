function PlayNote() {
    let random = Math.floor(Math.random() * 17)+1;
    let audioTarget = document.querySelector(`audio[data-key="${random}"]`)
    audioTarget.play();
}   

fetch('./data/data.json')
    .then((response) => response.json())
    .then((json) => {
        let parent = document.querySelector(".scrollInfo");
        let parent2 = document.querySelector(".scrollInfo2");
        function addSocials() {
            let div = document.createElement("div")
            for (let i = 0; i < json.socials.length; i++) {
                div.innerHTML += `<span class="noteable" onclick="PlayNote()"><a class="social" style="--dataColor:${json.socials[i].color};" href="#"><ion-icon name="${json.socials[i].icon}"></ion-icon>${json.socials[i].name}</a></span>`
            }
            parent.appendChild(div)
        }
        function addLanguage() {
            let div = document.createElement("div")
            for (let i = 0; i < json.languages.length; i++) {
                div.innerHTML += `<span class="noteable" onclick="PlayNote()"><a class="social" style="--dataColor:${json.languages[i].color};" href="#"><ion-icon name="${json.languages[i].icon}"></ion-icon>${json.languages[i].name}</a></span>`
            }
            parent2.appendChild(div)
        }
        addLanguage()
        addLanguage()
        addSocials()
        addSocials()
    });
