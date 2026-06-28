const brillo = document.getElementById("brillo");

document.addEventListener("mousemove", (e) => {
    brillo.style.opacity = 1;
    let posY = e.y + "px";
    let posX = e.x + "px";
    brillo.style.top = posY;
    brillo.style.left = posX;
});

