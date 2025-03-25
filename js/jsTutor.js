
document.getElementById("tutor-form").addEventListener("submit", function(event) {
    // helps not to reload the page when submitted
    event.preventDefault();
    document.getElementById("confirmation-message").innerText = "Thank you for your request! A tutor will contact you shortly.";

    this.reset();
});