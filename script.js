const container = document.querySelector(".container");

const gridbtn = document.querySelector("#grid");
const clearbtn = document.querySelector("#clear");
const colorbtn = document.querySelector("#color");
const colorpickerbtn = document.querySelector("#colorPicker");
const randomchecker = document.querySelector("#randomColor");

let rows = [];
let cols = [];

let gridSize = 16;
let currentColor = "rgb(0, 0, 0)"

function createGrid(size) {
    container.innerHTML = "";
    rows = [];
    cols = [];

    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        rows.push(row);
    }

    for (let row of rows) {
        for (let i = 0; i < size; i++) {
            let col = document.createElement("div");
            col.classList.add("col");
            row.append(col);
            cols.push(col);

            col.addEventListener("mouseenter", () => {
                if(randomchecker.checked) {
                    col.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
                }
                else {
                    col.style.backgroundColor = currentColor;
                }
            })
        }
    }
}

createGrid(gridSize);

gridbtn.addEventListener("click", () => {
    let newSize = parseInt(prompt("Enter grid size: "));
    if (newSize <= 0 || newSize > 100 || isNaN(newSize)) {
        alert("Invadlid Grid Size!");
    } else {
        gridSize = newSize
        createGrid(gridSize);
    }
})

clearbtn.addEventListener("click", () => {
    createGrid(gridSize);
})

colorbtn.addEventListener("click", () => {
    colorpickerbtn.click();
})

colorpickerbtn.addEventListener("input", (event) => {
  currentColor = event.target.value;
  const r = parseInt(currentColor.substr(1,2), 16);
  const g = parseInt(currentColor.substr(3,2), 16);
  const b = parseInt(currentColor.substr(5,2), 16);
  currentColor = `rgb(${r}, ${g}, ${b})`;
})

console.log(rows);