function validateForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

 
    if (email === "" || password === "") {
        alert("Both email and password are required!");
        return false;
    }



    return true;
}
if (!emailRegex.test(emailInput)) {
            emailError.innerHTML = 'Email is Required!';
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

    function validateForm() {

        validateEmail();
        validatePassword();
        
    }

