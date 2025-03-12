const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repeatPassword = document.getElementById('password2');


form.addEventListener('submit', e=>{
    e.preventDefault();
    validateInputs();
})
const setError = (element, message) =>{
    const inputControl = element.parentElement
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerHTML = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}
const setSuccess = (element) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerHTML = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}
const validateInputs = () =>{
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const repeatPasswordValue = repeatPassword.value.trim();
    let regExp = /^([\w]+)\@([a-z]{3,5})\.([a-z]{2,5})$/
    let test = regExp.test(emailValue);
    if (usernameValue === ''){
        setError(username, 'Username is required');
    }else{
        setSuccess(username);
    }
    if (emailValue === ''){
         setError(email, 'Email is required');
    }else{
        setSuccess(email);
    }
    if(passwordValue === ''){
        setError(password, 'Password is required');
    }else if(passwordValue.length < 8){
        setError(password, 'Password must be at least 8 characters');
    }else{
        setSuccess(password);
    }
    if(repeatPasswordValue === ''){
        setError(repeatPassword, 'Password is required');
    }else if(repeatPasswordValue !== passwordValue){
        setError(repeatPassword, 'Password does not match');
    }else{
        setSuccess(repeatPassword);
    }
}