function validateForm()  {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const password2 = document.getElementById("password").value;

    document.getElementById("name-error").innerHTML = "";
    document.getElementById("email-error").innerHTML = "";
    document.getElementById("password-error").innerHTML = "";
    document.getElementById("password2-error").innerHTML = "";

    if (username === "") {
     
        document.getElementById("name-error").innerHTML = "*Name Does Not Meet Requirements! ";   
        return false;
    }
    
    if (email === "") {
     
        document.getElementById("email-error").innerHTML = "*Email Does Not Meet Requirements! ";   
        return false;
    }

    if (password === "") {
     
        document.getElementById("password-error").innerHTML = "*Password Does Not Meet Requirements! ";   
        return false;
    }

    if (password !== password2) {
     
        document.getElementById("password2-error").innerHTML = "*Passwords Do Not Match!";   
        return false;
    }

    return true;

    }


function validateUsername() {
    const usernameRegex = /^[a-zA-Z0-9]{8,15}$/;
    const usernameInput = document.getElementById('username').value;
    const usernameError = document.getElementById('usernameError');
    usernameError.innerHTML = '';

    if (!usernameRegex.test(usernameInput)) {
        usernameError.innerHTML = '';
    }
}


function validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;;
    const emailInput = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    emailError.innerHTML = '';

    if (!emailRegex.test(emailInput)) {
        emailError.innerHTML = '';
    }
}


function validatePassword() {
    const passwordRegex = /^[A-Z].*\d{3}$/;
    const passwordInput = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    passwordError.innerHTML = '';

    if (!passwordRegex.test(passwordInput)) {
        passwordError.innerHTML = '';
    }
}

function validatePassword2() {
    const password2Regex = passwordRegex;
    const password2Input = document.getElementById('password2').value;
    const password2Error = document.getElementById('password2Error');
    password2Error.innerHTML = '';

    if (!password2Regex.test(password2Input)) {
        password2Error.innerHTML = '';
    }
}

function validateForm() {

    validateUsername();
    validateEmail();
    validatePassword();
    validatePassword2();
    
}
