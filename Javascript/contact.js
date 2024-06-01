function validateForm() {
    // Get the form elements
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    // Email validation regex
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Phone validation regex (10 digit number)
    var phonePattern = /^\d{10}$/;

    // Check if all fields are filled
    if (name == "" || email == "" || phone == "" || message == "") {
        alert("All fields are required.");
        return false;
    }
    // Validate email
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validate phone
    if (!phone.match(phonePattern)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    // If everything is valid, alert success
    alert("Form submitted successfully!");
    return true;
}
