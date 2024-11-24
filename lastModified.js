document.addEventListener("DOMContentLoaded", function() {
    const lastModifiedDate = document.lastModified; // 获取最后修改的日期和时间

    // 更新最后修改时间显示
    const lastModifiedElement = document.getElementById("last-modified");
    lastModifiedElement.textContent = `本网页最后更新的时间和日期：${lastModifiedDate}`;
});
