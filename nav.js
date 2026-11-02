// 页面加载完成后注入导航
document.addEventListener("DOMContentLoaded", function () {
    // 创建导航容器
    const navPlaceholder = document.createElement("div");
    navPlaceholder.id = "nav-placeholder";
    // 插入到 body 最前面
    document.body.prepend(navPlaceholder);

    // 导航HTML代码（只写这一次）
    const navHTML = `
    <nav class="navbar">
        <div class="nav-container">
            <a href="index.html" class="nav-btn" id="nav-home">Home</a>
            <a href="quotes.html" class="nav-btn" id="nav-quotes">Quotes</a>
            <a href="project.html" class="nav-btn" id="nav-project">Projects</a>
            <a href="machine.html" class="nav-btn" id="nav-machine">Fun Machine</a>
        </div>
    </nav>
    `;

    navPlaceholder.innerHTML = navHTML;

    // 自动给当前页导航按钮加上高亮
    const currentPage = location.pathname.split("/").pop();
    const pageMap = {
        "index.html": "nav-home",
        "quotes.html": "nav-quotes",
        "project.html": "nav-project",
        "machine.html": "nav-machine"
    };
    const activeId = pageMap[currentPage];
    if (activeId) {
        document.getElementById(activeId).classList.add("active");
    }
});
