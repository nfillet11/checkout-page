const stripe = Stripe('your-publishable-key'); // Replace with your actual Stripe publishable key

const elements = stripe.elements();
const card = elements.create('card');
card.mount('#card-element');

const form = document.getElementById('checkout-form');
const status = document.getElementById('payment-status');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { token, error } = await stripe.createToken(card);

    if (error) {
        status.textContent = error.message;
    } else {
        status.textContent = "Payment successful!";
        // Optionally send the token to your server for further processing
        console.log('Payment token:', token);
    }
});
