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

function setupSecretLink() {
    const trigger = document.getElementById("secret-trigger");
    if (!trigger) return;

    trigger.addEventListener("click", function (e) {
        if (e.shiftKey) {
            e.preventDefault(); // stop normal navigation
            window.location.href = "extras.html";
        }
        // otherwise → normal click goes to index.html automatically
    });
}

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
