/**********************TO DO ****************************/
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
interactables.forEach(draw);


//Color Button
let colorButton = document.querySelector("#color");
let color = false;
colorButton.addEventListener("click", changeColor);



//Erase Button
let eraseButton = document.querySelector("#erase");
eraseButton.addEventListener("click", clearGrid);


//Resize Button
let resizeButton = document.querySelector("#resize");
resizeButton.addEventListener("click", () => {
    clearGrid();

    let input = getInput("Enter a size");
    console.log(typeof(input) + ": " + input);
    
//Checks if input is valid
    if (input !== null && isNaN(parseInt(input))) {
        while(input !== null && isNaN(parseInt(input))) {
            input = getInput("Please enter a Number.");
            console.log(input);
        }
        
  
    } else if (input > 100) {
        while (input > 100) {
            input = getInput("Your number must be less than 100");
        }
        
    }

    resizeGrid(input);
});

function getInput(text) {
    let input = prompt(text);
    return input;
}

function resizeGrid(size) {
    let container = document.querySelector("#container");
    container.setAttribute("style", `grid-template-columns: repeat(${size}, 1fr);
                                    grid-template-rows: repeat(${size}, 1fr)`);
}

function clearGrid() {
    interactables.forEach((interactable) =>{
        interactable.removeAttribute("class");
    });
}

function draw(interactable) {
    interactable.addEventListener("mouseenter", () => {
        if (!color) {
            interactable.setAttribute("class", "drawn");
            return;
        } 
        randomColor = Math.floor(Math.random() * 255);
        interactable.setAttribute("style", `background-color: hsl(${randomColor}, 100%, 50%)`);
        
    });
}

function changeColor() {
    color = true;
    interactables.forEach(draw);
}