const Password = document.querySelectorAll(".password")
const togglePassword = document.querySelectorAll(".togglePassword");

togglePassword.forEach((button, index) => {
    button.addEventListener('click', () =>{
        if(Password[index].type === "password"){
            Password[index].type = "text";
        }

        else{
            Password[index].type = "password"
        }
    })
});