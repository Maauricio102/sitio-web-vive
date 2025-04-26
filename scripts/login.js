document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("login-form");
    const emailField = document.getElementById("email-field");
    const passwordField = document.getElementById("password-field");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const spinner = document.getElementById("login-spinner");
    const loginBtnText = document.getElementById("login-btn-text");
    const togglePasswordButton = document.querySelector(".toggle-password");
  

    // Form validation
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      let isValid = true;
  
      // Validate email
      if (!emailField.value || !emailField.value.includes("@")) {
        emailError.style.display = "block";
        isValid = false;
      } else {
        emailError.style.display = "none";
      }
  
      // Validate password
      if (!passwordField.value) {
        passwordError.style.display = "block";
        isValid = false;
      } else {
        passwordError.style.display = "none";
      }
  
      if (isValid) {
        // Show spinner and simulate login
        spinner.style.display = "inline-block";
        loginBtnText.style.display = "none";
  
        // Simulate a network request
        setTimeout(() => {
          alert("Inicio de sesión exitoso");
          spinner.style.display = "none";
          loginBtnText.style.display = "inline";
        }, 2000);
      }
    });
  });