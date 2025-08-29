const container = document.querySelector("#container");
const gridButton = document.querySelector("#gridSize");
const rainbowButton = document.querySelector("#rainbow");
const classicButton = document.querySelector("#classic");
const clearButton = document.querySelector("#clear");
const shadingButton = document.querySelector("#shading");

let currentMode = "classic";

function createGrid(gridSize) {
    container.innerHTML = ""

    for (let i = 0; i < gridSize * gridSize; i++) {
        let boxSize = 512 / gridSize;
        const gridBox = document.createElement("div");

        gridBox.classList.add("box");
        gridBox.style.width = `${boxSize}px`;
        gridBox.style.height = `${boxSize}px`;
        gridBox.dataset.shading = 0;

        container.appendChild(gridBox);

        gridBox.addEventListener("mouseenter", () => {
            if (currentMode === "classic") {
                gridBox.style.backgroundColor = "black";
                gridBox.style.opacity = "1";
            }
            else if (currentMode === "rainbow") {
                gridBox.style.backgroundColor = randomColor();
                gridBox.style.opacity = "1";
            }
            else if (currentMode === "shading") {
                let shadingLevel = parseInt(gridBox.dataset.shading);
                if (shadingLevel < 10) {
                    shadingLevel++;
                    gridBox.dataset.shading = shadingLevel;
                    gridBox.style.backgroundColor = "black";
                    gridBox.style.opacity = shadingLevel / 10; 
                }
            }
        });
    };
};

createGrid(16);

classicButton.addEventListener("click", () => currentMode = "classic");
rainbowButton.addEventListener("click", () => currentMode = "rainbow");
shadingButton.addEventListener("click", () => currentMode = "shading");
clearButton.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".box");

    boxes.forEach(box => {
        box.style.backgroundColor = "white";
        box.style.opacity = "1";
        box.dataset.shade = 0;
    });
});

gridButton.addEventListener("click", () => {
    let input = prompt("How many squares would you like per side? (Maximum 100)");
    let parsedInput = parseInt(input);
    if (parsedInput <=100 && parsedInput > 0 && !isNaN(parsedInput)) {
        createGrid(parsedInput);
    }
    else {
        alert("Please enter a number from 1 to 100")
    }
});



function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    return `rgb(${r} ${g} ${b})`
};
