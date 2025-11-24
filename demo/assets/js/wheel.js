const wheelControler = () => {
    const wheel = document.querySelector(".wheel");

    let isDragging = false;
    let previousX;
    let previousY;

    wheel.addEventListener("mousedown", (event) => {
        isDragging = true;
        previousX = event.clientX;
        previousY = event.clientY;
    });

    wheel.addEventListener("mouseup", () => {
        isDragging = false;
    });

    wheel.addEventListener("mousemove", (event) => {
        if (isDragging) {
            const currentX = event.clientX;
            const currentY = event.clientY;
            const rotationX = currentX - previousX;
            const rotationY = currentY - previousY;
            const rot = (rotationX + rotationY) / 2;
            wheel.style.transform += `rotate(${rot}deg)`;
            previousX = currentX;
            previousY = currentY;
        }
    });

    wheel.addEventListener("touchstart", (event) => {
        isDragging = true;
        previousX = event.touches[0].clientX;
        previousY = event.touches[0].clientY;
    });

    wheel.addEventListener("touchend", () => {
        isDragging = false;
    });

    wheel.addEventListener("touchmove", (event) => {
        if (isDragging) {
            const currentX = event.touches[0].clientX;
            const currentY = event.touches[0].clientY;
            const rotationX = currentX - previousX;
            const rotationY = currentY - previousY;
            const rot = (rotationX + rotationY) / 2;
            wheel.style.transform += `rotate(${rot}deg)`;
            previousX = currentX;
            previousY = currentY;
        }
    });
}

wheelControler();