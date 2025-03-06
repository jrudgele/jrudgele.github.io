// Toggle Mobile Navbar

 function toggleNav() {
    var navbar = document.getElementById("myNavbar");
    navbar.classList.toggle("responsive");  // Toggles the class for responsive mode
}


function visib(id) {
			  var x = document.getElementById(id);
			  if (x.style.display === "block") {
				x.style.display = "none";
			  } else {
				x.style.display = "block";
			  }
			}

// Highlight Active Navbar Link
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");

    // Get the current path, default to 'index' if empty
    let currentPath = window.location.pathname.split("/").pop() || "index";

    // Remove '.html' to handle cases where it's omitted
    currentPath = currentPath.replace(".html", "");

    navLinks.forEach(link => {
        let linkPath = link.getAttribute("href").replace(".html", "");

        // Debugging: Print values to check them
        console.log(`Checking: ${linkPath} === ${currentPath}`);

        if (linkPath === currentPath) {
            link.classList.add("active");
        }
    });
});
