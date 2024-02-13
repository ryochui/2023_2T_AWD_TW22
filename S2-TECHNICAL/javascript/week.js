const buttons = document.querySelectorAll(".button");

let currentSquare = null;

buttons.forEach((button) => {
    button.addEventListener("mouseover", () => {
        button.classList.add("b-hover");
        button.style.cursor = "pointer";
    });
    
    button.addEventListener("mouseout", () => {
        button.classList.remove("b-hover");
    });

    button.addEventListener("mousedown", () => {
        button.classList.add("b-click");
    });

    button.addEventListener("mouseup", () => {
        button.classList.remove("b-click");
    });

    button.addEventListener("click", () => {
        const squareId = button.getAttribute("data-square");
        const nextSquare = document.querySelector(`#${squareId}`);

        if (currentSquare !== null) {
            const originalBackgroundColor = getComputedStyle(currentSquare).backgroundColor;
            currentSquare.style.setProperty('--original-bg-color', originalBackgroundColor);
            currentSquare.style.animationName = 'up';
        }

        const originalBackgroundColor = getComputedStyle(nextSquare).backgroundColor;
        nextSquare.style.setProperty('--original-bg-color', originalBackgroundColor);
        nextSquare.style.animationName = 'down';

        currentSquare = nextSquare;
    });
});
