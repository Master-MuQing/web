document.addEventListener("click", function(event) {
    const x = event.clientX; // 鼠标点击的X坐标
    const y = event.clientY; // 鼠标点击的Y坐标

    const mouseCoordsElement = document.getElementById("mouse-coordinates");
    mouseCoordsElement.textContent = `点击位置：（${x},${y}）`;
});
