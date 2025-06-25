const form = document.getElementById('feedbackForm');
const successMsg = document.getElementById('successMsg');
const errorMsg = document.getElementById('errorMsg');

form.addEventListener('submit', async (event) => {
event.preventDefault();

// Clear previous errors and messages
['nameError', 'emailError', 'messageError'].forEach(id => {
    document.getElementById(id).textContent = '';
});
successMsg.style.display = 'none';
errorMsg.style.display = 'none';

let valid = true;

// Validate name
const name = form.name.value.trim();
if (!name) {
    document.getElementById('nameError').textContent = 'Name is required.';
    valid = false;
}

// Validate email
const email = form.email.value.trim();
if (!email) {
    document.getElementById('emailError').textContent = 'Email is required.';
    valid = false;
} else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
    document.getElementById('emailError').textContent = 'Please enter a valid email.';
    valid = false;
    }
}

// Validate message
const message = form.message.value.trim();
if (!message) {
    document.getElementById('messageError').textContent = 'Message cannot be empty.';
    valid = false;
}

if (!valid) return;

// Submit form data via fetch to Formspree
const formData = new FormData(form);

try {
    const response = await fetch(form.action, {
    method: 'POST',
    headers: {
        'Accept': 'application/json'
    },
    body: formData
    });

    if (response.ok) {
  form.reset();
  successMsg.style.display = 'block';
  setTimeout(() => {
    window.location.href = "https://byuh-cs140.github.io/activities-JTuitavake/Final_Project/index.html"; // ← change to your URL
  }, 3000); // Wait 3 seconds before redirect
}

} catch (error) {
    errorMsg.style.display = 'block';
}
});