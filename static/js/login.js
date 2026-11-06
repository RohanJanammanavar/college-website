const Username = document.querySelector("#name")
const Password = document.querySelector(".password")
const login = document.querySelector(".login-btn");
const togglePassword = document.querySelector(".togglePassword");

// eye button functionality
togglePassword.addEventListener("click", () => {
    if (Password.type === "password") {
        Password.type = "text";
    }
    else {
        Password.type = "password";
    }

});