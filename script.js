document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const navLinks = document.querySelectorAll("nav ul li a");
    const services = document.querySelectorAll(".service-card");
    const animatedText = document.querySelector(".animated-text");

    // Smooth Scroll for Navigation Links
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Text Animation Effect
    if (animatedText) {
        animatedText.style.opacity = "0";
        animatedText.style.transform = "translateY(-10px)";
        setTimeout(() => {
            animatedText.style.transition = "opacity 2s, transform 2s";
            animatedText.style.opacity = "1";
            animatedText.style.transform = "translateY(0)";
        }, 500);
    }

    // Form Validation and Submission
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the form from submitting
            
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            
            if (name && email && message) {
                alert(`Thank you, ${name}! Your message has been received. We will get back to you soon.`);
                form.reset(); // Clear the form fields after submission
            } else {
                alert("Please fill in all the fields before submitting.");
            }
        });
    }

    // Service Card Hover Effect
    services.forEach(service => {
        service.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.1)";
            this.style.transition = "transform 0.3s ease-in-out";
        });
        
        service.addEventListener("mouseout", function() {
            this.style.transform = "scale(1)";
        });
    });

    // Insert MJM Logo at the top-right dynamically
    const logo = document.createElement("img");
    logo.src = "logo.jpg";  // Ensure the correct path to your logo
    logo.classList.add("logo"); // Apply CSS styling
    document.body.appendChild(logo);
});
