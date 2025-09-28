let registerForm = document.getElementById("register-form");
registerForm.addEventListener("submit", function (event) {
  event.preventDefault();

  //Get input values
  let fullname = document.getElementById("fullname").value.trim();
  let email = document.getElementById("email").value.trim();
  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value.trim();
  let confirmPassword = document
    .getElementById("confirm_password")
    .value.trim();
  let dob = document.getElementById("dob").value.trim();
  let gender = document.getElementById("gender").value.trim();
  // console.log(fullname);

  // Get error spans
  let fullnameError = document.getElementById("fullname-error");
  let emailError = document.getElementById("email-error");
  let usernameError = document.getElementById("username-error");
  let passwordError = document.getElementById("password-error");
  let cpasswordError = document.getElementById("confirm-password-error");
  let dobError = document.getElementById("dob-error");
  let genderError = document.getElementById("gender-error");

  //Patterns
  let usernamePattern = /^[a-zA-Z0-9\s]+$/;
  let passwordPattern = /^[A-Za-z\d\W]{8,}$/;
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let namePattern = /^[a-zA-Z\s]+$/;
  let dobPattern = /^\d{4}-\d{2}-\d{2}$/;
  let genderPattern = /^(Male|Female|Other)$/;

  let isValid = true;

  // Fullname Validation
  if (fullname === "") {
    fullnameError.innerText = "*Name is required.";
    isValid = false;
  } else if (!namePattern.test(fullname)) {
    fullnameError.textContent = "*Name contain letters and spaces.";
    isValid = false;
  } else {
    fullnameError.textContent = "";
  }

  // Email Validation
  if (email === "") {
    emailError.textContent = "*Email is required";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    emailError.textContent = "*Email is not valid";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Username Validation
  if (username === "") {
    usernameError.textContent = "*Username is requited";
    isValid = false;
  } else if (!usernamePattern.test(username)) {
    usernameError.textContent =
      "*Username can only contain letters, numbers, and underscores.";
    isValid = false;
  } else {
    usernameError.textContent = "";
  }

  // Password Validation
  if (password === "") {
    passwordError.textContent = "*Password is required";
    isValid = false;
  } else if (!passwordPattern.test(password)) {
    passwordError.textContent = "*Password must be at least 8 characters.";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  //Confirm Password Validation
  if (confirmPassword === "") {
    cpasswordError.textContent = "*Confirm Password is required";
    isValid = false;
  } else if (password !== confirmPassword) {
    cpasswordError.textContent = "*Passwords do not match";
    isValid = false;
  } else {
    cpasswordError.textContent = "";
  }

  //DOB Validation
  if (dob === "") {
    dobError.textContent = "*Date of Birth is required";
    isValid = false;
  } else if (!dobPattern.test(dob)) {
    dobError.textContent = "*Date of Birth is not valid";
    isValid = false;
  } else {
    dobError.textContent = "";
  }

  //Gender Validation
  if (gender === "") {
    genderError.textContent = "*Gender is required";
    isValid = false;
  } else if (!genderPattern) {
    genderError.textContent = "*Please select your Gender";
    isValid = false;
  } else {
    genderError.textContent = "";
  }


if (isValid) {
  // Store username and password in localStorage for sign in
  const user = {
    username: username,
    password: password
  };
  localStorage.setItem('registeredUser', JSON.stringify(user));
  alert(`Hi! ${fullname}. Registration Successful !`);

  registerForm.reset();
  window.location.href = "index.html";
}

});

// Hide error span when user types or changes input fields
document.getElementById("fullname").addEventListener("input", function () {
  document.getElementById("fullname-error").textContent = "";
});
document.getElementById("email").addEventListener("input", function () {
  document.getElementById("email-error").textContent = "";
});
document.getElementById("username").addEventListener("input", function () {
  document.getElementById("username-error").textContent = "";
});
document.getElementById("password").addEventListener("input", function () {
  document.getElementById("password-error").textContent = "";
});
document.getElementById("confirm_password").addEventListener("input", function () {
  document.getElementById("confirm-password-error").textContent = "";
});
document.getElementById("dob").addEventListener("input", function () {
  document.getElementById("dob-error").textContent = "";
});
document.getElementById("gender").addEventListener("change", function () {
  document.getElementById("gender-error").textContent = "";
});
