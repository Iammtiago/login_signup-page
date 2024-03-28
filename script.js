const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const signUpBtn = document.getElementById('sign-up');
const signInBtn = document.getElementById('sign-in');

const nameSignUp = document.getElementById('name-sign-up');
const emailSignUp = document.getElementById('email-sign-up');
const passwordSignUp = document.getElementById('password-sign-up');

const emailSignIn = document.getElementById('email-sign-in');
const passwordSignIn = document.getElementById('password-sign-in');

const nameString = "name"
const emailString = "email"
const passwordString = "password"

registerBtn.addEventListener('click', function (e) {
    container.classList.add("active");
});

loginBtn.addEventListener('click', function (e) {
    container.classList.remove("active");
});

signUpBtn.addEventListener('click', function (e) {
    e.preventDefault()
    container.classList.remove("active");

    localStorage.setItem(nameString, nameSignUp.value)
    localStorage.setItem(emailString, emailSignUp.value)
    localStorage.setItem(passwordString, passwordSignUp.value)

    console.log("name", localStorage.getItem(nameString));
    console.log("email", localStorage.getItem(emailString));
    console.log("password", localStorage.getItem(passwordString));
});

signInBtn.addEventListener('click', function (e) {
    e.preventDefault()
    if (!localStorage.getItem(emailString)) return

    if (emailSignIn.value === localStorage.getItem(emailString)) {
        if (passwordSignIn.value === localStorage.getItem(passwordString)) {
            console.log("yes");
            let urlPrincipal = window.location.href
            let urlFinal = urlPrincipal.split("index.html?")[0] + "pages/home.html"
            window.location.href = urlFinal
        } else {
            alert("password incorrect!");
        }

    } else {
        alert("email not found");
    }


});