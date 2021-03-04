Mind reader pseudocode 
General notes
-The only user input is clicking buttons
    -Will need event listener for clicking buttons. 

OBJECTS

Go/Back button
-On frame 1 shows "go", all others shows "back"
-On frame 6 goes back to #1, on all other frames goes to next frame
-Works the same on frames 2 - 5
-User input: when user clicks button, bring up the specified "page".

Main text box
-No border. Always in same spot. Grey, ariel text.
-Completely independent of user input 
-1-4, 6 are just text -- 5 shows the big list of all #s/symbols with scroll bar. 
    -For the list, a for loop -- every time number is 0 or divisible by 9, assign it &. Otherwise, assign symbol randomly. 

Big button
-Only on pages 2 - 5. 
-When use clicks button, bring up the specified "page". 

Small text
-Only on pages 2-6
-Completey independent of user input

FUNCTIONS

Go button is clicked
-Page should bring up view 2

Back button is clicked 
-Page should go to view 1

Next/reveal button is clicked 
-Go to next page 

Assign numbers to symbols &
-Start with an empty array 

let numberSymbols = []
for (i = 0; i < 99, i++) {
    if i%9 = 0 {
        numberSymbols.push("&")
    } else {
        let cymbal = ""
        ->Function to pick a random symbol here 
        numberSymbols.push(cymbal)
    }
}
return numberSymbols

View 1
-Button: state = "go"
-Main text box: state = "I can read your mind"
-Big button: false
-Small text: false

View 2
-Button: state = "back"
-Main text box: state = "Pick a number from 01 - 99"
-...etc

View 3
""
View 4
""
View 5
""
View 6
""

    
Event Listeners
-If go button clicked, display View 2
-If back button clicked on any screen besides 6, display view one back 
    -If back button on screen 6 is clicked, display view 1 
-If next/reveal button clicked, display view one forward
    -Do I want to structure this as the system knowing the ordered list, or do I just want to say "on page 5, back = page 4". That might be easier. 
