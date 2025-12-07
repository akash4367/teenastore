// Set current year in footer
document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  
    // Fake form submission (front-end only)
    const form = document.getElementById("contact-form");
    const messageEl = document.getElementById("form-message");
  
    if (form && messageEl) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        messageEl.textContent = "Thank you! Your message has been received. We will contact you soon.";
        messageEl.style.color = "#2f7a3e";
        form.reset();
      });
    }
  });
  