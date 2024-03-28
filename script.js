const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const signUpBtn = document.getElementById('sign-up');

registerBtn.addEventListener('click', function (e) {
    container.classList.add("active");
});

signUpBtn.addEventListener('click', function (e) {
    e.preventDefault()
    container.classList.remove("active");
});

loginBtn.addEventListener('click', function (e) {
    container.classList.remove("active");
});