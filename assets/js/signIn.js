let signInForm = document.querySelector("form");
signInForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get input values
  let username = document.getElementById("username-signin").value.trim();
  let password = document.getElementById("password-signin").value.trim();

  // Get error spans
  let usernameError = document.getElementById("usename-error-signin");
  let passwordError = document.getElementById("password-error-signin");

  let isValid = true;

  // Username validation
  if (username === "") {
    usernameError.textContent = "*User name is required";
    isValid = false;
  } else {
    usernameError.textContent = "";
  }

  // Password validation
  if (password === "") {
    passwordError.textContent = "*Password is required";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }


  // get registered user from localStorage (simulate registration)

  let registeredUser = JSON.parse(localStorage.getItem("registeredUser"));
  if (isValid) {
    if (
      registeredUser &&
      username === registeredUser.username &&
      password === registeredUser.password
    ) {
      alert(`Welcome back, ${username}! Sign In Successful.`);
      //   console.log(registeredUser);
      signInForm.reset();
    } else {
      //   console.log(registeredUser);
      usernameError.textContent = "*Invalid username ";
      passwordError.textContent = "*Invalid username or password";
    }
  }
});

// Hide error span when user types in username or password
document.getElementById("username-signin").addEventListener("input", function () {
  document.getElementById("usename-error-signin").textContent = "";
});
document.getElementById("password-signin").addEventListener("input", function () {
  document.getElementById("password-error-signin").textContent = "";
});
