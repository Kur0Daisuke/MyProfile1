const letterInLine = 20;
const textBox = document.querySelector(".titleTextP");
let textToGenerate = "These days, launching applications means navigating an endless sea of complexity.";
let sentences = ["✌HI my name is ➡thar htet zan⬅","I am a full stack developer ✌ working as a freelancer✅","You can check✔ my ❤social accounts for more detail informations"]

addText(sentences[0])

let num = 1
setInterval(() => {
    textBox.innerHTML = ""
    console.log(num)
    addText(sentences[num])
    if(num==sentences.length-1){
        num = 0 
    }else{
        num++
    }
}, 6000);

function addText(textToGenerate) {
  var words = textToGenerate.split(" ");
  console.log(words);

  let wordCount = 0;
  let sentence_flg = 0;
  let timeCounter = 0;
  let sentence = "";
  for (let i = 0; i < words.length; i++) {
    // console.log(`Word[${i}] - ${words[i]}`);
    let estimate = words[i].length + wordCount;
    // console.log(`Estimate - ${estimate}\nCount - ${wordCount}`)
    if (estimate <= letterInLine) {
      for (const key in words[i]) {
        sentence += words[i][key];
      }
      if (estimate != letterInLine) {
        wordCount = estimate + 1;
        sentence += " ";
      } else {
        wordCount = estimate;
      }
    } else {
      sentence_flg += 1;
      // reset
      wordCount = 0;
      i = i - 1;
    }

    if (sentence_flg == 1 || i == words.length - 1) {
      console.log(
        `${sentence.length} : ${letterInLine} [${
          letterInLine - sentence.length
        }]`
      );
      let toadd = letterInLine - sentence.length;
      // generate text
      if (sentence.length != letterInLine) {
        for (let i = 0; i < toadd; i++) {
          Math.floor(Math.random() * 2) == 0
            ? (sentence += " ")
            : (sentence = " " + sentence);
        }
      }

      for (let i in sentence) {
        sentence[i] == " "
          ? (textBox.innerHTML += `<span style="--s:${letterInLine};" class="blank">${sentence[i]}</span>`)
          : (textBox.innerHTML += `<span style="--s:${letterInLine};">${sentence[i]}</span>`);
      }
      sentence = "";
      sentence_flg = 0;
    }

    // console.log(`Sentence - ${sentence}`)
  }
}
