const loginForm = document.querySelector(".login_form")
const sighnupForm = document.querySelector(".signup_form")

document.getElementById("showSignup").addEventListener("click", () => {
    loginForm.style.display = "none"
    sighnupForm.style.display = "flex"
})

document.getElementById("showLogin").addEventListener("click", () => {
    sighnupForm.style.display = "none"
    loginForm.style.display = "flex"
})

sighnupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("newpassword").value;
    const confirm = document.getElementById("confirmpassword").value;
    const error = document.getElementById("error");
    const acc_cr = document.getElementById("acc_cr");

    if (password !== confirm) {
        error.style.display = "block";
    } else {
        // foydalanuvchini localStorage ga saqlash
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

        acc_cr.style.display = "block";
        error.style.display = "none";

        setTimeout(() => {
            sighnupForm.style.display = "none";
            loginForm.style.display = "flex";
        }, 2000);
    }
});

loginForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const enteredUsername = document.getElementById("id_member").value
    const enteredPassword = document.getElementById("password").value;

    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (enteredUsername === savedUsername && enteredPassword === savedPassword) {
        window.location.href = "entry.html";
    } else {
        alert("ID or Password Incorrect!")
    }
})