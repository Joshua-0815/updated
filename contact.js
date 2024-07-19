// Function to validate email
function validateEmail() {
    var email = document.getElementById('email').value;
    if (!email.endsWith('@gmail.com')) {
        alert('Please enter a valid Gmail address (@gmail.com).');
        return false;
    }
    return true;
}

// Function to validate phone number
function validatePhone() {
    var phone = document.getElementById('phone').value;
    var phonePattern = /^\d+$/;
    if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').style.display = 'inline';
        return false;
    }
    document.getElementById('phoneError').style.display = 'none';
    return true;
}

// Function to handle form submission
function validateForm(event) {
    event.preventDefault(); // Prevent the default form submission

    if (validateEmail() && validatePhone()) {
        var formData = new FormData(document.getElementById('contactForm'));

        fetch('contact.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(result => {
            alert('Message sent successfully!');
            document.getElementById('contactForm').reset(); // Reset the form after successful submission
        })
        .catch(error => {
            alert('There was an error sending the message. Please try again.');
        });

        return false; // Prevent the default form submission
    }
    return false; // If validation fails
}

// Set up event listeners
document.getElementById('contactForm').addEventListener('submit', validateForm);

// Ensure phone input only accepts numbers
var phoneInput = document.getElementById('phone');
phoneInput.addEventListener('input', function () {
    this.value = this.value.replace(/[^\d]/g, '');
});

// Auto-expand textarea height
var textarea = document.getElementById('message');
textarea.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});
textarea.dispatchEvent(new Event('input'));
