function passwordFormValidation() {
    // Get the form fields
    const firstName = document.getElementById("firstName").value;
    const password = document.getElementById("password").value;
    const retypePassword = document.getElementById("retypePassword").value;
    const demoMessage = document.getElementById("demo");

    // Validate if first name is filled
    if (firstName === "") {
        demoMessage.innerHTML = "First Name has to be entered.";
        return false;
    }

    // Validate if passwords match
    if (password !== retypePassword) {
        demoMessage.innerHTML = "Password and retyped password are not matching.";
        return false;
    }

    // Clear the message if everything is fine
    demoMessage.innerHTML = "Form is valid!";
    demoMessage.style.color = "green";

    // Here you can proceed with further form submission or handling logic
}