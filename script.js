/**********************TO DO ****************************/
//make sure prompt closes
//size must not be larger than 100
//clear only button
//random colors


//Fill the Grid
for (let i = 0; i <10000; i++) {
    let container = document.querySelector("#container");
    let div = document.createElement("div");
    div.setAttribute("class", "interactable");
    container.appendChild(div);

}

//Draw on the Grid
let interactables = document.querySelectorAll(".interactable");
interactables.forEach((interactable) => {
    interactable.addEventListener("mouseenter", () => {
        interactable.setAttribute("class", "drawn")
    });
});

//Clears Grid
let resizeButton = document.querySelector("#resize");
resizeButton.addEventListener("click", () => {
    interactables.forEach((interactable) => {
        interactable.removeAttribute("class");
    });

    let input = getInput("Enter a size");
    console.log(typeof(input) + ": " + input);
    
//Checks if input is valid
    if (isNaN(input)) {

        while(isNaN(input)) {
            input = getInput("Please enter a Number.");
            console.log(input);
        }
    }
    resizeGrid(input);
/*******************************TO DO*********************************
    
 */
});

function getInput(text) {
    let input = prompt(text);
    return parseInt(input);
}

let test = document.querySelector("#change");
test.setAttribute("style", "background-color: purple;");

function resizeGrid(size) {
    let container = document.querySelector("#container");
    container.setAttribute("style", `grid-template-columns: repeat(${size}, 1fr);
                                    grid-template-rows: repeat(${size}, 1fr)`);
}