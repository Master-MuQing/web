document.addEventListener("DOMContentLoaded", function() {
    // 选择所有书籍项
    const bookItems = document.querySelectorAll(".employee-card");

    // 添加点击事件
    bookItems.forEach(function(item) {
        item.onclick = function() {
            const text = this.textContent; // 获取文本内容
            const titleAndRating = text.split(" - "); // 按照" - "拆分
            alert("你点击了：" + titleAndRating[0] + " - " + titleAndRating[2]); // 弹窗
        };

        // 鼠标悬停和离开事件
        item.onmouseover = function() {
            this.style.backgroundColor = "#b2ebf2"; // 鼠标悬停时改变颜色
        };
        item.onmouseout = function() {
            this.style.backgroundColor = ""; // 鼠标离开时恢复颜色
        };
    });
});
