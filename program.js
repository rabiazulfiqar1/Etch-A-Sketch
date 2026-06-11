const gridSize = 688;

const container = document.querySelector('.container');

function createGrid(n) {
    container.replaceChildren();
    const squareSize = gridSize/n;
    for (let i=0; i<n*n; i++) {
        const square = document.createElement('div')
        square.dataset.cnt = "0";
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.classList.add('square');
        container.appendChild(square);
    }
}

createGrid(16);

function randomVibrantColor() {
    const hue = Math.floor(Math.random()*360);
    return `hsl(${hue} 85% 60%)`
}

container.addEventListener("mouseover", function(e) {
    let cnt = parseInt(e.target.dataset.cnt);
    if (cnt < 10) {
        cnt++;
        e.target.dataset.cnt = cnt;
    }
    e.target.style.backgroundColor = randomVibrantColor();
    e.target.style.opacity = cnt/10;
    // e.target.classList.add('hover-effect');
});

const btn = document.querySelector('.reset-btn');
btn.addEventListener('click', () => {
    const input = Number(prompt("Enter grid size", "16"));
    if (!isNaN(input) && (input>=16 && input<100)) createGrid(input);
    else alert('Enter valid number in range 16-100');
})