
// Sweetbot Favicon
const favicon = document.createElement("link");

favicon.rel = "icon";
favicon.type = "image/png";
favicon.href = "./images/logo.png";

// Remove old favicon
document.querySelectorAll("link[rel*='icon']").forEach(icon => {
    icon.remove();
});

// Add Sweetbot favicon
document.head.appendChild(favicon);


// Website Header
document.getElementById("header").innerHTML = `
<header style="background-color: #F8DCE8;">

    <div class="logo-box">

        <img src="images/logo.png"
             alt="Tahreem's World Logo"
             class="logo"
             style="width: 40px; height: 40px; object-fit: contain;">

        <h2>Tahreem's World</h2>

    </div>

    <nav>
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="art.html">My Art</a>
        <a href="projects.html">Projects</a>
        <a href="contact.html">Contact</a>
    </nav>

</header>
`;
