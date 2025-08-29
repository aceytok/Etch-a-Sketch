const container = document.querySelector("#container");
const gridButton = document.querySelector("#gridSize");
/* 
Create 16X16 grid in container using flexbox
*/



for (let i = 0; i< 256; i++) {
    const gridBox = document.createElement("div")
    gridBox.setAttribute("class", "box");
    container.appendChild(gridBox);
    gridBox.addEventListener('mouseenter', () => {
        gridBox.style.backgroundColor = "black"
    });
};

