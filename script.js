/* =====================================
   Deco Desk And Design
   script.js
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Deco Desk And Design website loaded successfully.");

    // Welcome message
    setTimeout(function () {
        alert("Welcome to Deco Desk And Design! We are ready to help with Construction, Solar, Furniture, Printing & Branding.");
    }, 1000);

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Highlight current navigation link
    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll("nav a").forEach(link => {
        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
            link.style.backgroundColor = "#198754";
            link.style.color = "#ffffff";
        }
    });

});

// Function to open WhatsApp
function openWhatsApp() {
    window.open("https://wa.me/27655342706", "_blank");
}

// Function to call the business
function callBusiness() {
    window.location.href = "tel:+27655342707";
}

// Quote request confirmation
function requestQuote() {
    alert("Thank you for your interest! Please complete the quotation form and we will contact you shortly.");
}
