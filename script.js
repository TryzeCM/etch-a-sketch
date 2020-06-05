for (let i = 0; i < 2500; i++) {
    let container = document.querySelector("#container");
    let div = document.createElement("div");
    div.setAttribute("class", "interactable");
    container.appendChild(div);

}

let interactables = document.querySelectorAll(".interactable");

interactables.forEach((interactable) => {
    interactable.addEventListener("mouseenter", () => {
        interactable.setAttribute("class", "drawn")
    });
});

