const container = document.querySelector("#container");
const gridButton = document.querySelector("#gridSize");

/* 
Create 16X16 grid in container using flexbox
*/

function createGrid(gridSize) {
    container.innerHTML = ""

    for (let i = 0; i < gridSize * gridSize; i++) {
        let boxSize = 512 / gridSize;
        const gridBox = document.createElement("div")

        gridBox.setAttribute("class", "box");
        gridBox.style.width = `${boxSize}px`
        gridBox.style.height = `${boxSize}px`

        container.appendChild(gridBox);

        gridBox.addEventListener('mouseenter', () => {
        gridBox.style.backgroundColor = "black"
    });
    };
};

createGrid(16);

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

