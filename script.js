document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you would normally handle form submission to your server
    document.getElementById('form-response').innerText = `Thank you, ${name}! Your message has been sent.`;

    // Clear the form
    document.getElementById('contact-form').reset();
});
