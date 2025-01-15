const form = document.getElementById('checkout-form');
const confirmationMessage = document.getElementById('confirmation-message');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Simulate successful form submission
    confirmationMessage.textContent = "Thank you for your purchase!";
    form.reset();
});
