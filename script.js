// script.js

function calculateCarbon() {
    const usage = document.getElementById('usage').value;
    const quantity = document.getElementById('quantity').value;
    const type = document.getElementById('type').value;

    let impactFactor;
    switch (type) {
        case "low":
            impactFactor = 0.3;
            break;
        case "medium":
            impactFactor = 0.6;
            break;
        case "high":
            impactFactor = 1.0;
            break;
    }

    const carbon = usage * quantity * impactFactor;
    document.getElementById('result').innerText = `Your carbon footprint is ${carbon.toFixed(2)} units.`;
}

// Contact form submission alert
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your message has been sent!');
});
