function toggleNav() {
    const nav = document.getElementById("myNavbar");
    if (nav) {
        nav.classList.toggle("responsive");
    }
}

function visib(id) {
    const x = document.getElementById(id);
    if (x) {
        x.style.display = (x.style.display === "block") ? "none" : "block";
    }
}

function setActiveNavLink() {
    const navLinks = document.querySelectorAll(".nav-link");

    let currentPath = window.location.pathname.split("/").pop() || "index.html";
    currentPath = currentPath.replace(".html", "");

    navLinks.forEach(link => {
        const href = link.getAttribute("href");
        if (!href) return;

        const linkPath = href.replace(".html", "");

        if (linkPath === currentPath) {
            link.classList.add("active");
        }
    });
}

let clicks = 0;
let timer;

secretTrigger.addEventListener("click", function (e) {
    clicks++;

    if (clicks < 5) {
        e.preventDefault();
    }

    clearTimeout(timer);
    timer = setTimeout(() => clicks = 0, 1500); // reset after 1.5s

    if (clicks === 5) {
        window.location.href = "extras.html";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-placeholder").innerHTML = data;

            // Run these AFTER navbar is inserted
            setActiveNavLink();
            setupSecretLink();
        })
        .catch(error => console.error("Error loading navbar:", error));
});
