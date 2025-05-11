const bubble = document.querySelector(".bubble");
let x = 100, y = 100;
let dx = 2, dy = 3;

function animate(){
    const h = window.innerHeight;
    const w = window.innerWidth;

    x += dx;
    y += dy;

    if (x <= 0 || x+100 >= w) {
        dx *= -1;
    }
    if (y <= 80 || y+100 >= h) {
        dy *= -1;
    }

    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;

    requestAnimationFrame(animate)
}

animate()