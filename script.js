// Mobile Navigation Toggle
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    if (navLinks) {
        navLinks.classList.toggle("open");
    }
}

// Contact Form Handler
function handleContactSubmit(event) {
    event.preventDefault();
    const form = document.getElementById("contactForm");
    const successMsg = document.getElementById("formSuccessMessage");
    
    if (form && successMsg) {
        form.reset();
        successMsg.style.display = "block";
        setTimeout(() => {
            successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    }
    return false;
}
