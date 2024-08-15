const container = document.querySelector(".container");
const gridBtn = document.querySelector(".grid-btn");
const maxGridSize = Math.min(window.innerHeight, window.innerWidth) * 9 / 10;

function colorElement(element) {
    element.style.backgroundColor = "black";
}


function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.classList.add("sketch-row");
        for (let j = 0; j < gridSize; j++) {
            const box = document.createElement("div");
            box.classList.add("sketch-element");
            box.style.width = maxGridSize / gridSize + "px";
            box.style.height = maxGridSize / gridSize + "px";
            box.addEventListener("mouseover", () => colorElement(box))
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}

gridBtn.addEventListener("click", () => {
    let gridSize;
    do {
        gridSize = prompt("Enter a new size per side 1-100\nExample: 20");
    } while (gridSize < 1 || gridSize > 100);
    container.innerHTML = "";
    createGrid(gridSize)
})

createGrid(16);