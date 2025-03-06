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
    let currentPath = window.location.pathname.split("/").pop();
    
    if (currentPath === "" || currentPath === "index") {
        currentPath = "index"; // Default to index if empty
    }

    navLinks.forEach(link => {
        const linkPath = link.getAttribute("href");
        if (linkPath === currentPath) {
            link.classList.add("active");
        }
    });
});
