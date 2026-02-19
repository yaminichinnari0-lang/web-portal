const searchInput = document.querySelector("input");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("keyup", function() {
    const value = searchInput.value.toLowerCase();

    cards.forEach(card => {
        const title = card.querySelector("h3").textContent.toLowerCase();
        card.style.display = title.includes(value) ? "block" : "none";
    });
});
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function() {
    successMessage.textContent = "Message sent successfully!";
});
