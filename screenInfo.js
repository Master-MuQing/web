function updateScreenInfo() {
    const screenWidth = screen.width; // 屏幕宽度
    const screenHeight = screen.height; // 屏幕高度
    const windowWidth = window.innerWidth; // 当前窗口宽度
    const windowHeight = window.innerHeight; // 当前窗口高度

    // 更新屏幕信息显示
    const screenInfoElement = document.getElementById("screen-info");
    screenInfoElement.textContent = `屏幕宽度：${screenWidth}, 屏幕高度：${screenHeight}, 浏览器窗口宽度：${windowWidth}, 浏览器窗口高度：${windowHeight}`;
}

// 初始显示
updateScreenInfo();
window.onresize = updateScreenInfo; // 窗口大小改变时更新
