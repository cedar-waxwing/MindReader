//these are all potential options for symbols (9 total)
let symbolArray = ["*", "$", "!", "?", "+", "@", "^", "}", "#"]
//this assigns randomnumber to a whole, random number 
let randomNumber = Math.floor(Math.random() * 9);
//this picks a symbol from the array of numbers, 1 - 9
let consistantSymbol = symbolArray[randomNumber]
//this removes the consistant symbol from the array so that it's not repeated.
symbolArray.splice(randomNumber, 1)

//this is the function for the number/symbol array display
function manySymbols() {
    //numbers starts as an empty string
    let numbers = ""
    //this cycles through numbers 0 - 99
    for (let i = 0; i < 100; i++) {
        // 
        numbers += i + " = "
        //if the remainder of 1 / 9 is zero
        if (i % 9 == 0) {
            //this position on the number string is assigned to the "number = consistantSymbol"
            numbers += consistantSymbol
            console.log(consistantSymbol)
        } else {
            //if the number is not divisible by 9, this picks a random number and selects a symbol from 
            //the modified array of 8. 
            let randomTwo = Math.floor(Math.random() * 8)
            //here, the position on the number string is assigned to the "number = symbolArray" (a random symbol)
            numbers += symbolArray[randomTwo] 
        }
        //this puts a line break in the string, so that the number/symbol pairs aren't all bunched together.
        numbers += "<br>"
    }
    return numbers
}

//these are the different possible states of the page
let states = [
    { id: 1, maintext: "I can read your mind", smalltext: "", firstbutton: "Go", secondbutton: "" },
    { id: 2, maintext: "Pick a number from 01 - 99.", smalltext: "When you have your number, click next", firstbutton: "Back", secondbutton: "Next" },
    { id: 3, maintext: "Add both digits together to get a new number.", smalltext: "Ex: 14 is 1+4=5. Click next to proceed.", firstbutton: "Back", secondbutton: "Next" },
    { id: 4, maintext: "Subtract your new number from the original number.", smalltext: "Ex: 14-5=9. Click next to proceed.", firstbutton: "Back", secondbutton: "Next" },
    { id: 5, maintext: manySymbols(), smalltext: "Find your new number. Note the symbol beside the number.", firstbutton: "Back", secondbutton: "Reveal" },
    { id: 6, maintext: consistantSymbol, smalltext: "Your symbol is " + consistantSymbol, firstbutton: "Back", secondbutton: "" }
]

//page number starts at position 0 in the states array. 
let pageNumber = 0
//this is pulling the html in 
let secondbutton = document.getElementById("secondbutton")
let firstbutton = document.getElementById("firstbutton")
let smalltext = document.getElementById("smalltext")
let maintext = document.getElementById("maintext")

//the render function makes the innerHTMl of each text box & button list as the info in position "x" of the
//states array.
function render() {
    maintext.innerHTML = states[pageNumber].maintext
    smalltext.innerHTML = states[pageNumber].smalltext
    firstbutton.innerHTML = states[pageNumber].firstbutton
    secondbutton.innerHTML = states[pageNumber].secondbutton
}

//this function makes the next/reveal button disappear on the first and last pages. 
function visibility() {
    if (states[pageNumber].id == 1 || states[pageNumber].id == 6) {
        secondbutton.disabled = true;
        secondbutton.style.visibility = "hidden";
    } else {
        secondbutton.disabled = false;
        secondbutton.style.visibility = "visible";
    }
}

//this controls the go/back button. 
firstbutton.addEventListener("click", function () {
    if (pageNumber == 0) {
        pageNumber++;
        //if page number is 0, this button goes forward one in the array and runs the init function. 
        init()
    }
    else if (pageNumber == 5) {
        //if the page number in the array is 5, this takes you back to page 0. 
        pageNumber = 0;
    }
    //otherwise, it functions as a 'back' button.
    else {
        pageNumber--;
    }
    //each time you change state, call render to render onclick -- also call visibility. 
    visibility()
    render()
})

//this runs visibility and render when page number progresses. 
secondbutton.addEventListener("click", function () {
    pageNumber++;
    visibility()
    render()
})

//the initialize function makes sure that everything is loaded properly on init. 
function init() {
    visibility()
    //this runs the symbol array list and loads it.
    symbolArray = ["*", "$", "!", "?", "+", "@", "^", "}", "#"]
    let randomNumber = Math.floor(Math.random() * 9);
    consistantSymbol = symbolArray[randomNumber]
    //and this reduces the symbol array to 8 options
    symbolArray.splice(randomNumber, 1)
    states[4].maintext = manySymbols();
    states[5].maintext = consistantSymbol;
    states[5].smalltext = "Your symbol is " + consistantSymbol;
    render()
}

//onload commmand
document.body.onload = init