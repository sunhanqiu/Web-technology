
document.addEventListener("DOMContentLoaded", function () {

    const navPlaceholder = document.createElement("div");
    navPlaceholder.id = "nav-placeholder";
   
    document.body.prepend(navPlaceholder);

   
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
