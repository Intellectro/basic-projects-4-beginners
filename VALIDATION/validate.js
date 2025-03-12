const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repeatPassword = document.getElementById('password2');
const submitBTn = document.getElementById('submit');
const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    validateInputs();
})

const setError = (element, message) =>{
    const grabParent = element.parentElement;
    const errorDisplay = grabParent.querySelector('.error');

    errorDisplay.textContent = message;
    grabParent.classList.add('error');
    grabParent.classList.remove('success');
}

const setSuccess = (element) =>{
    const grabParent = element.parentElement;
    const errorDisplay = grabParent.querySelector('.error');
    errorDisplay.textContent = "";
    grabParent.classList.add('success');
    grabParent.classList.remove('error');
}

const validateInputs = () =>{
    let usernameValue = username.value.trim();
    let passwordValue = password.value.trim();
    let emailValue = email.value.trim();
    let repeatPasswordValue = repeatPassword.value.trim();
    let regExp = /^([\w]+)\@([a-z]{5,5})\.([a-z]{3,3})$/

    if (usernameValue === ""){
        setError(username, "Please enter your username");
    }else{
        setSuccess(username);
    }
    if (emailValue === ""){
        setError(email, "Please enter your email");
    }else if(!regExp.test(emailValue)){
        setError(email, "Invalid Email Address");
    }else{
        setSuccess(email);
    }
    if (passwordValue === ""){
        setError(password, "Please enter your password");
    }else if(passwordValue < 8){
        setError(password, "Password must be at least 8 characters");
    }else{
        setSuccess(password);
    }
    if (repeatPasswordValue === ""){
        setError(password, "Please re-enter the exact passowrd");
    }else if (repeatPasswordValue !== passwordValue){
        setError(password, "Password does not match");
    }else{
        setSuccess(repeatPassword);
    }
}