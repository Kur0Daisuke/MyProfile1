const letterInLine = 12
const textBox = document.querySelector('.titleTextP')
let textToGenerate = "@Hi my name is ➡Thar htet Zan➡"
var words = textToGenerate.split(" ");
console.log(words);
// for (let i in textToGenerate) {
//     textToGenerate[i]==' '?textBox.innerHTML += `<span style="--s:${letterInLine}" class="blank">${textToGenerate[i]}</span>`:textBox.innerHTML += `<span style="--s:${letterInLine}">${textToGenerate[i]}</span>`
// }

let wordCount = 0
let sentence_flg = 0
let timeCounter = 0
let sentence = ""
for (let i = 0; i < words.length; i++) {
    // console.log(`Word[${i}] - ${words[i]}`);
    let estimate = words[i].length + wordCount
    // console.log(`Estimate - ${estimate}\nCount - ${wordCount}`)
    if(estimate <= letterInLine){
        for (const key in words[i]) {
            sentence+=words[i][key]
        }
        if(estimate!=letterInLine){
            wordCount = estimate+1
            sentence+=" "
        }else{
            wordCount = estimate
        }
    }else{
        sentence_flg += 1
        // reset
        wordCount = 0
        i = i -1
    }

    if (sentence_flg == 1 || i == words.length -1) {
        console.log(`${sentence_flg}: set sentence`)
        // generate text
        if(sentence.length!=letterInLine){
            for (let i = 0; i <= letterInLine-sentence.length; i++) {
                sentence.length%2==0?sentence+= " ":sentence = " " + sentence
            }
        }
        
        for (let i in sentence) {
            timeCounter = Math.round((timeCounter+=0.05) * 10) / 10
            sentence[i]==' '?textBox.innerHTML += `<span style="--s:${letterInLine}; --delay:${timeCounter}s" class="blank">${sentence[i]}</span>`:textBox.innerHTML += `<span style="--s:${letterInLine}; --delay:${timeCounter}s">${sentence[i]}</span>`
        }
        sentence = ""
        sentence_flg = 0
    }

    console.log(`Sentence - ${sentence}`)
}