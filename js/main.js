//random 9 symbol is not 

let symbolArray = ["*", "$", "!", "?", "+", "@", "^", "}", "#"]
let randomNumber = Math.floor(Math.random() * 9);
let consistantSymbol = symbolArray[randomNumber]
symbolArray.splice(randomNumber, 1)

function manySymbols() {
    let numbers = ""
    for (let i = 0; i < 100; i++) {
        numbers += i + " = "
        if (i % 9 == 0) {
            numbers += consistantSymbol
            console.log(consistantSymbol)
        } else {
            let randomTwo = Math.floor(Math.random() * 8)
            numbers += symbolArray[randomTwo] 
        }
        numbers += "<br>"
    }
    return numbers
}

let states = [
    { id: 1, maintext: "I can read your mind", smalltext: "", firstbutton: "Go", secondbutton: "" },
    { id: 2, maintext: "Pick a number from 01 - 99.", smalltext: "When you have your number, click next", firstbutton: "Back", secondbutton: "Next" },
    { id: 3, maintext: "Add both digits together to get a new number.", smalltext: "Ex: 14 is 1+4=5. Click next to proceed.", firstbutton: "Back", secondbutton: "Next" },
    { id: 4, maintext: "Subtract your new number from the original number.", smalltext: "Ex: 14-5=9. Click next to proceed.", firstbutton: "Back", secondbutton: "Next" },
    { id: 5, maintext: manySymbols(), smalltext: "Find your new number. Note the symbol beside the number.", firstbutton: "Back", secondbutton: "Reveal" },
    { id: 6, maintext: consistantSymbol, smalltext: "Your symbol is " + consistantSymbol, firstbutton: "Back", secondbutton: "" }
]

let pageNumber = 0
let secondbutton = document.getElementById("secondbutton")
let firstbutton = document.getElementById("firstbutton")
let smalltext = document.getElementById("smalltext")
let maintext = document.getElementById("maintext")

function render() {
    maintext.innerHTML = states[pageNumber].maintext
    smalltext.innerHTML = states[pageNumber].smalltext
    firstbutton.innerHTML = states[pageNumber].firstbutton
    secondbutton.innerHTML = states[pageNumber].secondbutton
}

function visibility() {
    if (states[pageNumber].id == 1 || states[pageNumber].id == 6) {
        secondbutton.disabled = true;
        secondbutton.style.visibility = "hidden";
    } else {
        secondbutton.disabled = false;
        secondbutton.style.visibility = "visible";
    }
}

//need firstbutton to not be there on the first page, go forward on pages 2-5, and go to page 1 on page 6.
firstbutton.addEventListener("click", function () {
    if (pageNumber == 0) {
        pageNumber++;
        init()
    }
    else if (pageNumber == 5) {
        pageNumber = 0;
    }
    else {
        pageNumber--;
    }
    //each time you change state, call render -- this will render onclick 
    visibility()
    render()
})

//need secondbutton to go forward one on the first page, and go back one on pages 2-5, and go to page 1 on page 6.
secondbutton.addEventListener("click", function () {
    pageNumber++;
    visibility()
    render()
})


function init() {
    visibility()
    symbolArray = ["*", "$", "!", "?", "+", "@", "^", "}", "#"]
    let randomNumber = Math.floor(Math.random() * 9);
    consistantSymbol = symbolArray[randomNumber]
    symbolArray.splice(randomNumber, 1)
    states[4].maintext = manySymbols();
    states[5].maintext = consistantSymbol;
    states[5].smalltext = "Your symbol is " + consistantSymbol;
    render()
}

document.body.onload = init