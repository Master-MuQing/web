function updateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; 
    const date = now.getDate();
    const day = ['日', '一', '二', '三', '四', '五', '六'][now.getDay()]; 
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // 更新时钟显示
    const clockElement = document.getElementById("clock");
    clockElement.textContent = `当前时间：${year}年${month}月${date}日 星期${day} ${hours}时${minutes}分${seconds}秒`;

    // 提醒每到20和50分
    if (minutes === 20 || minutes === 50) {
        console.log("站起来活动一下吧！");
    }
}

// 初始化时钟
setInterval(updateTime, 1000); // 每秒更新
