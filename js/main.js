
document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmpassword = document.getElementById('confirm-password').value.trim();


    const unameError = document.getElementById('uname-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const confirmPasswordError = document.getElementById('confirm-password-error');

    // Clear previous error messages
    document.getElementById('uname-error').innerHTML = "";
    document.getElementById('email-error').innerHTML = "";
    document.getElementById('password-error').innerHTML = "";

    let isValid = true;
    if (username === "") {
        unameError.innerHTML = "*Username is required";
        isValid = false;
    } else if (username.length < 3) {
        unameError.innerHTML = "Username must be at least 3 characters long";
        isValid = false;
    }
    else {
        unameError.innerHTML = "";
    }
    if (email === "") {
        emailError.innerHTML = "*Email is required";
        isValid = false;
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailError.innerHTML = "Invalid email format";
        isValid = false;
    }
    else {
        emailError.innerHTML = "";
    }
    if (password === "") {
        passwordError.innerHTML = "*Password is required";
        isValid = false;
    } else if (password.length < 6) {
        passwordError.innerHTML = "Password must be at least 6 characters long";
        isValid = false;
    } else {
        passwordError.innerHTML = "";
    }
    if (confirmpassword === "") {
        confirmPasswordError.innerHTML = "*Confirm Password is required";
        isValid = false;
    } else if (confirmpassword !== password) {
        confirmPasswordError.innerHTML = "Passwords do not match";
        isValid = false;
    } else {
        confirmPasswordError.innerHTML = "";
    }
    if (isValid) {
        alert(`Hi ${username}, Registered successfully!`);
        // Here you can add code to submit the form data to the server

    }
});


// Sign-in form validation
document.getElementById("signin-form")?.addEventListener("submit", function (event) {
    event.preventDefault();
    // const username = document.getElementById('signin-username').value.trim();
    // const email = document.getElementById('signin-email').value.trim();

    const emailError = document.getElementById('signin-email-error');
    const passwordError = document.getElementById('signin-password-error');

    // Clear previous error messages
    if (emailError) emailError.innerHTML = "";
    if (passwordError) passwordError.innerHTML = "";

    let isValid = true;

    if (email === "") {
        if (emailError) emailError.innerHTML = "*Email is required";
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        if (emailError) emailError.innerHTML = "Invalid email format";
        isValid = false;
    }

    if (password === "") {
        if (passwordError) passwordError.innerHTML = "*Password is required";
        isValid = false;
    }
    if (isValid) {
        alert(`Hi ${username} Welcome back!`);
            
    }


});
