
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

// Floating WhatsApp Button
const whatsapp = document.createElement("a");

whatsapp.href = "https://wa.me/PARENT_APPROVED_NUMBER";
whatsapp.target = "_blank";
whatsapp.rel = "noopener noreferrer";
whatsapp.innerHTML = "☏ WhatsApp";

whatsapp.style.position = "fixed";
whatsapp.style.bottom = "25px";
whatsapp.style.right = "25px";
whatsapp.style.backgroundColor = "#25D366";
whatsapp.style.color = "white";
whatsapp.style.padding = "14px 22px";
whatsapp.style.borderRadius = "50px";
whatsapp.style.textDecoration = "none";
whatsapp.style.fontWeight = "bold";
whatsapp.style.fontSize = "16px";
whatsapp.style.zIndex = "9999";
whatsapp.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";

document.body.appendChild(whatsapp);
